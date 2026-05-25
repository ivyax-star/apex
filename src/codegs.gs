const SHEET_NAME = "Leads";
const TIMEZONE = "Asia/Ho_Chi_Minh";
const SPREADSHEET_ID = "";

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

    const timestamp = Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss");

    const row = [
      data.userId || Utilities.getUuid(),        // A - User ID
      timestamp,                                  // B - Timestamp
      data.parentName.trim(),                     // C - Họ tên Ba/Mẹ
      phone,                                      // D - Số điện thoại
      data.childBirthYear || "",                  // E - Năm sinh bé
      Array.isArray(data.courses)                 // F - Khóa quan tâm
        ? data.courses.join(", ") 
        : (data.courses || ""),
      "TRUE"                                      // G - Cho phép liên hệ
    ];

    sheet.appendRow(row);

    return jsonResponse({ success: true, userId: row[0] });

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

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "userId",
      "Timestamp",
      "Họ tên Ba/Mẹ",
      "Số điện thoại",
      "Năm sinh bé",
      "Khóa quan tâm",
      "Cho phép liên hệ"
    ]);
  }

  return sheet;
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
  Logger.log("✅ Kết quả:", result.getContent());
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
  Logger.log("🚫 Kết quả:", result.getContent());
}
