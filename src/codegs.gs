const SHEET_NAME = "Leads";
const TIMEZONE = "Asia/Ho_Chi_Minh";
const SPREADSHEET_ID = "";
const PHONE_COLUMN = 4;
const NOTIFICATION_RECIPIENTS = "phuoc.dt@agorax.vn";

function doPost(e) {
  const lock = LockService.getScriptLock();
  let hasLock = false;

  try {
    lock.waitLock(10000);
    hasLock = true;

    const sheet = getSheet_();
    const data = parsePayload_(e);

    // Validate bắt buộc
    if (!data.parentName || !data.phone) {
      return jsonResponse({ success: false, error: "Thiếu thông tin bắt buộc" });
    }

    // Bắt buộc phải tích cho phép liên hệ
    if (data.allowContact !== true) {
      return jsonResponse({
        success: false,
        error: "CONTACT_NOT_ALLOWED",
        message: "Vui lòng đồng ý để ApexEdu liên hệ tư vấn"
      });
    }

    const phone = normalizePhone(data.phone);
    if (!phone) {
      return jsonResponse({ success: false, error: "Số điện thoại không hợp lệ" });
    }

    const userId = data.userId || Utilities.getUuid();
    const timestamp = Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss");
    const parentName = data.parentName.trim();
    const childBirthYear = data.childBirthYear || "";
    const courseText = Array.isArray(data.courses)
      ? data.courses.join(", ")
      : (data.courses || "");

    const row = [
      userId,          // A - User ID
      timestamp,       // B - Timestamp
      parentName,      // C - Họ tên Ba/Mẹ
      "",              // D - Số điện thoại, ghi riêng dạng text để không mất số 0
      childBirthYear,  // E - Năm sinh bé
      courseText,      // F - Khóa quan tâm
      "TRUE"           // G - Cho phép liên hệ
    ];

    sheet.appendRow(row);
    const rowNumber = sheet.getLastRow();
    setPhoneCellText_(sheet, rowNumber, phone);
    SpreadsheetApp.flush();

    lock.releaseLock();
    hasLock = false;

    sendLeadNotification_({
      userId,
      timestamp,
      parentName,
      phone,
      childBirthYear,
      courseText,
      rowNumber
    });

    return jsonResponse({ success: true, userId });

  } catch (err) {
    return jsonResponse({ success: false, error: err.message });

  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

// ── Helpers ──────────────────────────────────────────

function getSheet_() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("Spreadsheet not found. Bind this script to a Google Sheet or set SPREADSHEET_ID.");
  }

  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  ensureHeaders_(sheet);

  return sheet;
}

function ensureHeaders_(sheet) {
  const headers = [
    "userId",
    "Timestamp",
    "Họ tên Ba/Mẹ",
    "Số điện thoại",
    "Năm sinh bé",
    "Khóa quan tâm",
    "Cho phép liên hệ"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }

  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  const currentHeaders = headerRange.getValues()[0];

  headers.forEach(function(header, index) {
    if (!currentHeaders[index]) {
      sheet.getRange(1, index + 1).setValue(header);
    }
  });
}

function setPhoneCellText_(sheet, rowNumber, phone) {
  sheet
    .getRange(rowNumber, PHONE_COLUMN)
    .setNumberFormat("@")
    .setValue(phone);
}

function parsePayload_(e) {
  const raw = e && e.postData && e.postData.contents;

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (err) {
    return e.parameter || {};
  }
}

function normalizePhone(raw) {
  let p = String(raw).replace(/[\s\-\.]/g, "");
  if (p.startsWith("+84")) p = "0" + p.slice(3);
  if (p.startsWith("84") && p.length === 11) p = "0" + p.slice(2);
  return /^0(3|5|7|8|9)\d{8}$/.test(p) ? p : null;
}

function sendLeadNotification_(lead) {
  if (!NOTIFICATION_RECIPIENTS) {
    return {
      sent: false,
      error: "Chưa cấu hình NOTIFICATION_RECIPIENTS"
    };
  }

  try {
    MailApp.sendEmail({
      to: NOTIFICATION_RECIPIENTS,
      subject: "[ApexEdu] Có phụ huynh đăng ký mới - " + lead.parentName,
      body: buildLeadEmailBody_(lead),
      name: "ApexEdu Website"
    });

    return {
      sent: true,
      error: ""
    };
  } catch (err) {
    Logger.log("Không gửi được email thông báo: " + err.message);
    return {
      sent: false,
      error: err.message
    };
  }
}

function buildLeadEmailBody_(lead) {
  return [
    "Website vừa có phụ huynh đăng ký tư vấn.",
    "",
    "Họ tên Ba/Mẹ: " + lead.parentName,
    "Số điện thoại: " + lead.phone,
    "Năm sinh bé: " + (lead.childBirthYear || "Chưa cung cấp"),
    "Khóa quan tâm: " + (lead.courseText || "Chưa cung cấp"),
    "Thời gian đăng ký: " + lead.timestamp,
    "Dòng trong Sheet: " + lead.rowNumber,
    "",
    "Vui lòng liên hệ phụ huynh sớm để hỗ trợ."
  ].join("\n");
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Test ─────────────────────────────────────────────

function testPost_allowed() {
  const fakeData = {
    userId: "5b6d0e65-a798-4790-a339-67994658948f",
    parentName: "Nguyễn Thị Bình",
    phone: "0901234567",
    childBirthYear: "2019",
    courses: ["Ôn luyện Homeschooling", "Chính thức Homeschooling"],
    allowContact: true
  };
  const result = doPost({ postData: { contents: JSON.stringify(fakeData) } });
  Logger.log("Kết quả: " + result.getContent());
}

function testPost_blocked() {
  const fakeData = {
    userId: "abc-123",
    parentName: "Trần Văn B",
    phone: "0912345678",
    childBirthYear: "2020",
    courses: ["Chính thức Homeschooling"],
    allowContact: false
  };
  const result = doPost({ postData: { contents: JSON.stringify(fakeData) } });
  Logger.log("Kết quả: " + result.getContent());
}

function testSendLeadNotification() {
  const result = sendLeadNotification_({
    userId: "test-email",
    parentName: "Test ApexEdu",
    phone: "0373445349",
    childBirthYear: "2019",
    courseText: "Lớp trải nghiệm miễn phí",
    timestamp: Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss"),
    rowNumber: "test"
  });

  Logger.log("Kết quả gửi email: " + JSON.stringify(result));
}

function authorizeMailPermission() {
  ScriptApp.requireScopes(ScriptApp.AuthMode.FULL, [
    "https://www.googleapis.com/auth/script.send_mail",
    "https://www.googleapis.com/auth/spreadsheets"
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_RECIPIENTS,
    subject: "[ApexEdu] Test cấp quyền gửi email",
    body: "Nếu nhận được email này thì Apps Script đã có quyền gửi email thông báo đăng ký."
  });

  Logger.log("Đã gửi email test cấp quyền đến: " + NOTIFICATION_RECIPIENTS);
}

function removeEmailDebugColumns() {
  const sheet = getSheet_();
  const emailStatusHeader = sheet.getRange(1, 8).getValue();
  const emailErrorHeader = sheet.getRange(1, 9).getValue();

  if (emailStatusHeader === "Email thông báo" && emailErrorHeader === "Lỗi gửi email") {
    sheet.deleteColumns(8, 2);
    Logger.log("Đã xóa cột H và I.");
    return;
  }

  Logger.log("Không xóa cột vì header H/I không khớp cột debug email.");
}
