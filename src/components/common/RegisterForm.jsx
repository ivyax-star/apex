import { useEffect, useRef, useState } from 'react'
import registerButton from '../../assets/Apex - Export/02 Form/CTA dk ngay.png'

const SUBMIT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxuO4CZ7HjMlD0mvIMdcn9BUmZkH6-uK3JhmG6yCmniBIS5QLXF4Yx2Mn3AipjlT1wTvw/exec'

const COURSE_OPTIONS = ['Ôn luyện Homeschooling', 'Chính thức Homeschooling', 'Lớp trải nghiệm miễn phí']
const PHONE_PATTERN = /^0(3|5|7|8|9)\d{8}$/
const RETRY_DELAY_MS = 2000
const MAX_NETWORK_RETRIES = 2

const createUserId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = Math.random() * 16 | 0
    const value = char === 'x' ? random : (random & 0x3) | 0x8

    return value.toString(16)
  })
}

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms))

const initialValues = {
  parentName: '',
  phone: '',
  childBirthYear: '',
  courses: [COURSE_OPTIONS[0]],
  allowContact: false,
}

export default function RegisterForm() {
  const userIdRef = useRef(null)
  const courseGroupRef = useRef(null)
  if (userIdRef.current === null) {
    userIdRef.current = createUserId()
  }
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false)

  useEffect(() => {
    if (!isCourseMenuOpen) return undefined

    const handlePointerDown = (event) => {
      if (courseGroupRef.current?.contains(event.target)) return

      setIsCourseMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isCourseMenuOpen])

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false)
  }

  const handleSuccessPopupBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeSuccessPopup()
    }
  }

  const updateField = (field, value) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }))
    setErrors((current) => {
      if (!current[field]) return current

      const nextErrors = { ...current }
      delete nextErrors[field]
      return nextErrors
    })
    setFormMessage('')
  }

  const selectCourse = (course) => {
    setValues((current) => ({
      ...current,
      courses: [course],
    }))
    setIsCourseMenuOpen(false)
    setErrors((current) => {
      if (!current.courses) return current

      const nextErrors = { ...current }
      delete nextErrors.courses
      return nextErrors
    })
    setFormMessage('')
  }

  const validateForm = () => {
    const nextErrors = {}
    const parentName = values.parentName.trim()
    const phone = values.phone.trim()
    const childBirthYear = values.childBirthYear.trim()
    const birthYear = Number(childBirthYear)

    if (!parentName) {
      nextErrors.parentName = 'Vui lòng nhập họ tên Ba/Mẹ'
    }

    if (!phone) {
      nextErrors.phone = 'Vui lòng nhập số điện thoại'
    } else if (!PHONE_PATTERN.test(phone)) {
      nextErrors.phone = 'Số điện thoại phải gồm 10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09'
    }

    if (!childBirthYear) {
      nextErrors.childBirthYear = 'Vui lòng nhập năm sinh bé'
    } else if (!Number.isInteger(birthYear) || birthYear < 2015 || birthYear > 2024) {
      nextErrors.childBirthYear = 'Năm sinh bé phải từ 2015 đến 2024'
    }

    if (values.courses.length === 0) {
      nextErrors.courses = 'Vui lòng chọn ít nhất một khóa học'
    }

    if (!values.allowContact) {
      nextErrors.allowContact = 'Vui lòng đồng ý để ApexEdu liên hệ tư vấn'
    }

    return nextErrors
  }

  const postWithRetry = async (payload) => {
    let lastError

    for (let attempt = 0; attempt <= MAX_NETWORK_RETRIES; attempt += 1) {
      try {
        return await fetch(SUBMIT_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        })
      } catch (error) {
        lastError = error

        if (attempt < MAX_NETWORK_RETRIES) {
          await wait(RETRY_DELAY_MS)
        }
      }
    }

    throw lastError
  }

  const readServerResponse = async (response) => {
    const text = await response.text()
    let data = {}

    if (text) {
      try {
        data = JSON.parse(text)
      } catch {
        data = { message: text }
      }
    }

    return data
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) return

    setFormMessage('')

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const payload = {
      userId: userIdRef.current,
      parentName: values.parentName.trim(),
      phone: values.phone.trim(),
      childBirthYear: values.childBirthYear.trim(),
      courses: [...values.courses],
      allowContact: values.allowContact,
    }

    setIsSubmitting(true)

    try {
      const response = await postWithRetry(payload)

      if (response.type === 'opaque') {
        setShowSuccessPopup(true)
        setValues(initialValues)
        setErrors({})
        return
      }

      const data = await readServerResponse(response)
      const serverError = data.error || data.code

      if (serverError === 'CONTACT_NOT_ALLOWED') {
        setErrors({ allowContact: 'Vui lòng đồng ý để ApexEdu liên hệ tư vấn' })
        setFormMessage('Vui lòng đồng ý để ApexEdu liên hệ tư vấn')
        return
      }

      if (!response.ok || data.success === false || data.ok === false || data.status === 'error') {
        setFormMessage(data.message || 'Không thể gửi thông tin lúc này. Vui lòng thử lại sau.')
        return
      }

      setShowSuccessPopup(true)
      setValues(initialValues)
      setErrors({})
    } catch {
      setFormMessage('Kết nối chưa ổn định. Vui lòng kiểm tra mạng và thử lại.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isSubmitDisabled = isSubmitting
  const selectedCourseLabel = values.courses.length > 0 ? values.courses.join(', ') : 'Chọn khóa học'
  const courseSelectLabel = errors.courses && values.courses.length === 0 ? errors.courses : selectedCourseLabel

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <label className={`registration-field registration-field--full${errors.parentName ? ' is-invalid' : ''}`}>
          <span>Họ Tên Ba / Mẹ</span>
          <input
            name="parentName"
            value={values.parentName}
            onChange={(event) => updateField('parentName', event.target.value)}
            autoComplete="name"
            placeholder={errors.parentName || ''}
            aria-invalid={errors.parentName ? 'true' : undefined}
            aria-describedby={errors.parentName ? 'registration-parent-name-error' : undefined}
          />
          {errors.parentName && (
            <small className="registration-error sr-only" id="registration-parent-name-error">
              {errors.parentName}
            </small>
          )}
        </label>

        <label className={`registration-field${errors.phone ? ' is-invalid' : ''}`}>
          <span>Số ĐT</span>
          <input
            name="phone"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={errors.phone || ''}
            aria-invalid={errors.phone ? 'true' : undefined}
            aria-describedby={errors.phone ? 'registration-phone-error' : undefined}
          />
          {errors.phone && (
            <small className="registration-error sr-only" id="registration-phone-error">
              {errors.phone}
            </small>
          )}
        </label>

        <label className={`registration-field${errors.childBirthYear ? ' is-invalid' : ''}`}>
          <span>Năm sinh bé</span>
          <input
            name="childBirthYear"
            value={values.childBirthYear}
            onChange={(event) => updateField('childBirthYear', event.target.value)}
            type="number"
            min="2015"
            max="2024"
            inputMode="numeric"
            placeholder={errors.childBirthYear || ''}
            aria-invalid={errors.childBirthYear ? 'true' : undefined}
            aria-describedby={errors.childBirthYear ? 'registration-birth-year-error' : undefined}
          />
          {errors.childBirthYear && (
            <small className="registration-error sr-only" id="registration-birth-year-error">
              {errors.childBirthYear}
            </small>
          )}
        </label>

        <fieldset
          className={`registration-field registration-field--full registration-course-group${errors.courses ? ' is-invalid' : ''}`}
          ref={courseGroupRef}
        >
          <legend>Khóa học ba mẹ quan tâm</legend>
          <button
            className="registration-course-select"
            type="button"
            onClick={() => setIsCourseMenuOpen((current) => !current)}
            aria-expanded={isCourseMenuOpen}
            aria-haspopup="listbox"
            aria-invalid={errors.courses ? 'true' : undefined}
            aria-describedby={errors.courses ? 'registration-course-error' : undefined}
          >
            <span>{courseSelectLabel}</span>
          </button>
          <div className={`registration-course-list${isCourseMenuOpen ? ' is-open' : ''}`} role="listbox">
            {COURSE_OPTIONS.map((course) => (
              <button
                className="registration-course-option"
                key={course}
                type="button"
                role="option"
                aria-selected={values.courses.includes(course)}
                onClick={() => selectCourse(course)}
              >
                <span>{course}</span>
              </button>
            ))}
          </div>
          {errors.courses && (
            <small className="registration-error sr-only" id="registration-course-error">
              {errors.courses}
            </small>
          )}
        </fieldset>

        <label className={`registration-consent${errors.allowContact ? ' is-invalid' : ''}`}>
          <input
            type="checkbox"
            name="allowContact"
            checked={values.allowContact}
            onChange={(event) => updateField('allowContact', event.target.checked)}
            aria-invalid={errors.allowContact ? 'true' : undefined}
          />
          <span>
            Bằng việc đăng ký thông tin, ba mẹ đồng ý cho phép ApexEdu liên hệ thông qua cuộc gọi,
            tin nhắn nhằm mục đích tư vấn khóa học phù hợp, cập nhật các chương trình ưu đãi và
            nghiên cứu thị trường.
          </span>
        </label>
        {errors.allowContact && <small className="registration-error registration-error--consent">{errors.allowContact}</small>}

        {formMessage && <p className="registration-message" role="alert">{formMessage}</p>}

        <div className="registration-submit-wrap">
          <button
            className="registration-submit"
            type="submit"
            disabled={isSubmitDisabled}
            aria-busy={isSubmitting ? 'true' : undefined}
          >
            <img src={registerButton} alt="Đăng ký ngay" width="460" height="120" />
            {isSubmitting && <span className="registration-submit__spinner" aria-hidden="true" />}
          </button>
        </div>
      </form>

      {showSuccessPopup && (
        <div
          className="registration-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-success-title"
          onClick={handleSuccessPopupBackdropClick}
        >
          <div className="registration-popup__card">
            <button
              className="registration-popup__close"
              type="button"
              onClick={closeSuccessPopup}
              aria-label="Đóng thông báo"
            >
              ×
            </button>
            <h2 id="registration-success-title">
              <span>Cảm ơn ba mẹ</span>
              Đã đăng ký
            </h2>
            <p>
              <strong>ApexEdu</strong> sẽ liên hệ ba mẹ trong thời gian sớm nhất để tư vấn lộ trình phù hợp cho bé;
              hoặc ba mẹ có thể gọi <strong>Hotline / Zalo 037 756 5059</strong> để được hỗ trợ nhanh nhất!
            </p>
          </div>
        </div>
      )}
    </>
  )
}
