import { useEffect, useState } from 'react'
import RegisterForm from '../common/RegisterForm'
import Footer from '../layout/Footer'
import { scrollToSection } from '../../utils/scrollToSection'
import bannerDesktop from '../../assets/Apex - Export/01 top banner opt 2.png'
import bannerMobile from '../../assets/Apex - Export/01 top banner opt 2.png'
import formFrame from '../../assets/Apex - Export/form 2.png'
import registerButton from '../../assets/Apex - Export/Icon + Button/btn dk ngay.png'
import finalCtaButton from '../../assets/Apex - Export/Icon + Button/CTA end.png'
import faqBulletIcon from '../../assets/Apex - Export/Icon + Button/bullet.png'
import faqArrowIcon from '../../assets/Apex - Export/Icon + Button/arrow.png'
import growthImageOne from '../../assets/Apex - Export/Block 2/h1.png'
import growthImageTwo from '../../assets/Apex - Export/Block 2/h2.png'
import growthImageThree from '../../assets/Apex - Export/Block 2/h3.png'
import platformIcon from '../../assets/Apex - Export/Block 3/icon headline 2.png'
import platformImageOne from '../../assets/Apex - Export/Block 3/img 1.png'
import platformImageTwo from '../../assets/Apex - Export/Block 3/imae 2.png'
import platformImageThree from '../../assets/Apex - Export/Block 3/img 3.png'
import platformImageFour from '../../assets/Apex - Export/Block 3/img 4.png'
import platformImageFive from '../../assets/Apex - Export/Block 3/img 5.png'
import summerCardOne from '../../assets/Apex - Export/Block 4/banner khoa hoc 1.png'
import summerCardTwo from '../../assets/Apex - Export/Block 4/banner khoa hoc 2.png'
import summerPlane from '../../assets/Apex - Export/Block 4/icon 4.png'
import matchImageOne from '../../assets/Apex - Export/Block 5/h1.png'
import matchImageTwo from '../../assets/Apex - Export/Block 5/h2.png'
import matchImageThree from '../../assets/Apex - Export/Block 5/h3.png'
import matchImageFour from '../../assets/Apex - Export/Block 5/h4.png'
import matchTalkOne from '../../assets/Apex - Export/Block 5/talk 1.png'
import matchTalkTwo from '../../assets/Apex - Export/Block 5/talk 2.png'
import matchTalkThree from '../../assets/Apex - Export/Block 5/talk 3.png'
import matchTalkFour from '../../assets/Apex - Export/Block 5/talk 4.png'
import scheduleTimeOne from '../../assets/Apex - Export/Block 6/act 1.png'
import scheduleTimeTwo from '../../assets/Apex - Export/Block 6/act 2.png'
import scheduleTimeThree from '../../assets/Apex - Export/Block 6/act 3.png'
import scheduleTimeFour from '../../assets/Apex - Export/Block 6/act 4.png'
import scheduleTimeFive from '../../assets/Apex - Export/Block 6/act 5.png'
import scheduleTimeSix from '../../assets/Apex - Export/Block 6/act 6.png'
import scheduleTimeSeven from '../../assets/Apex - Export/Block 6/act 7.png'
import scheduleTimeEight from '../../assets/Apex - Export/Block 6/act 8.png'
import dailyGrowthIcon from '../../assets/Apex - Export/Block 7/icon 7.png'
import dailyGrowthImageOne from '../../assets/Apex - Export/Block 7/block 7 hinh 1.png'
import dailyGrowthImageTwo from '../../assets/Apex - Export/Block 7/block 7 hiinh 2.png'
import dailyGrowthImageThree from '../../assets/Apex - Export/Block 7/block 7 hinh 3.png'
import faqImageOne from '../../assets/Apex - Export/Block 9/0.png'
import faqImageTwo from '../../assets/Apex - Export/Block 9/2.png'
import faqImageThree from '../../assets/Apex - Export/Block 9/3.png'
import faqImageFour from '../../assets/Apex - Export/Block 9/5.png'

const lazyImageProps = {
  loading: 'lazy',
  decoding: 'async',
}

const growthImages = [
  {
    src: growthImageOne,
    alt: 'Làm quen tiếng Anh, Toán, tư duy và kỹ năng học tập theo cách học chuẩn Mỹ',
  },
  {
    src: growthImageTwo,
    alt: 'Học và tương tác bằng tiếng Anh trong môi trường lớp học có định hướng',
  },
  {
    src: growthImageThree,
    alt: 'Tham gia kỹ năng sống, nghệ thuật, thể thao, nấu ăn và hoạt động trải nghiệm',
  },
]

const platformCards = [
  {
    id: 'curriculum',
    src: platformImageOne,
    text: 'Học theo giáo trình K-12 chuẩn Mỹ từ Ivy Global School',
    copy: (
      <>
        <span>Học theo giáo trình</span>
        <span>K-12 chuẩn Mỹ từ</span>
        <span>
          <strong>Ivy Global School</strong>
        </span>
      </>
    ),
  },
  {
    id: 'thinking',
    src: platformImageTwo,
    text: 'Kết hợp toàn diện tư duy, kỹ năng sống, sự tự tin và khả năng thích nghi',
    copy: (
      <>
        <span>
          <strong>Kết hợp toàn diện</strong> tư duy,
        </span>
        <span>kỹ năng sống, sự tự tin và khả</span>
        <span>năng thích nghi</span>
      </>
    ),
  },
  {
    id: 'english-teachers',
    src: platformImageThree,
    text: 'Thẩm thấu tiếng Anh với 100% giáo viên nước ngoài',
    copy: (
      <>
        <span>Thẩm thấu tiếng Anh</span>
        <span>
          với <strong>100% giáo viên</strong>
        </span>
        <span>
          <strong>nước ngoài</strong>
        </span>
      </>
    ),
  },
  {
    id: 'english-interaction',
    src: platformImageFour,
    text: 'Học, hỏi, tương tác bằng 100% tiếng Anh',
    copy: (
      <>
        <span>Học, hỏi, tương tác</span>
        <span>
          bằng <strong>100% tiếng Anh</strong>
        </span>
      </>
    ),
  },
  {
    id: 'class-size',
    src: platformImageFive,
    text: 'Sĩ số tối đa 20 bé/lớp tối ưu hóa thời gian tương tác với giáo viên',
    copy: (
      <>
        <span>
          Sĩ số tối đa <strong>20 bé/lớp</strong>
        </span>
        <span>tối ưu hóa thời gian</span>
        <span>tương tác với giáo viên</span>
      </>
    ),
  },
]

const platformSlideInterval = 3800

const summerOptions = [
  {
    src: summerCardOne,
    title: 'Khóa ôn luyện Homeschooling bé 5-7 tuổi',
    bullets: ['Học từ thứ 2 - thứ 6', 'Từ 7h-17h', 'Trong tháng 6 và 7'],
  },
  {
    src: summerCardTwo,
    title: 'Khóa Homeschooling bé 6-8 tuổi',
    bullets: [
      'Học thứ 7 & Chủ Nhật',
      'Từ 7h-17h',
      'Từ tháng 8 đến tháng 5 năm sau',
      'Có bảng điểm/chứng nhận từ Ivy Global School',
    ],
  },
]

const matchCards = [
  {
    src: matchImageOne,
    talk: matchTalkOne,
    label: 'Bé chuẩn bị vào lớp 1',
    alt: 'Can lam quen ne nep, su tap trung, tieng Anh va ky nang lop hoc',
  },
  {
    src: matchImageTwo,
    talk: matchTalkTwo,
    label: 'Bé có định hướng học quốc tế / song bằng',
    alt: 'Can mot buoc bat dau linh hoat, nhe nhang va gan nha hon',
  },
  {
    src: matchImageThree,
    talk: matchTalkThree,
    label: 'Bé đã học tiếng Anh nhưng chưa phản xạ tự nhiên',
    alt: 'Can moi truong dung tieng Anh de hoc, hoi va tuong tac',
  },
  {
    src: matchImageFour,
    talk: matchTalkFour,
    label: 'Bé cần một mùa hè có định hướng',
    alt: 'Co hoc, co choi, co ky nang, co trai nghiem va co nguoi dong hanh',
  },
]

const daySchedule = [
  { time: '07:00 - 08:00', image: scheduleTimeOne, text: 'Đón bé & ổn định lớp.' },
  { time: '08:00 - 10:00', image: scheduleTimeTwo, text: 'Tiếng Anh/ Toán' },
  { time: '10:00 - 10:30', image: scheduleTimeThree, text: 'Nghỉ ngơi & hoạt động nhẹ.' },
  { time: '10:30 - 11:30', image: scheduleTimeFour, text: 'Tư duy logic/ kỹ năng học thuật.' },
  { time: '11:30 - 13:30', image: scheduleTimeFive, text: 'Nghỉ trưa.' },
  { time: '13:30 - 15:00', image: scheduleTimeSix, text: 'Kỹ năng sống/ nghệ thuật/ nấu ăn.' },
  { time: '15:00 - 16:00', image: scheduleTimeSeven, text: 'Thể thao/ hoạt động nhóm.' },
  { time: '16:00 - 17:00', image: scheduleTimeEight, text: 'Tổng kết & tan lớp.' },
]

const dailyGrowthCards = [
  {
    src: dailyGrowthImageOne,
    title: 'Con lớn hơn trong cách học',
    description: 'Biết cách học, quen nề nếp, tập trung và chủ động tham gia.',
    alt: 'Con lon hon trong cach hoc: biet cach hoc, quen ne nep, tap trung va chu dong tham gia',
  },
  {
    src: dailyGrowthImageTwo,
    title: 'Con lớn hơn trong cách nghĩ',
    description: 'Tư duy độc lập, biết hỏi, biết thử và biết thể hiện ý tưởng của mình.',
    alt: 'Con lon hon trong cach nghi: tu duy doc lap, biet hoi, biet thu va biet the hien y tuong cua minh',
  },
  {
    src: dailyGrowthImageThree,
    title: 'Con lớn hơn trong cách dùng tiếng Anh',
    description: 'Dùng tiếng Anh để học, hỏi, tương tác và tự tin thể hiện.',
    alt: 'Con lon hon trong cach dung tieng Anh: dung tieng Anh de hoc, hoi, tuong tac va tu tin the hien',
  },
]

const faqItems = [
  {
    question: 'Khóa Homeschooling khác gì lớp tiếng Anh thông thường?',
    answer:
      'Trẻ không chỉ học tiếng Anh như một môn riêng lẻ, mà dùng tiếng Anh trong các hoạt động học Toán, tư duy, kỹ năng và tương tác trong lớp học.',
  },
  {
    question: 'Con chưa giỏi tiếng Anh có theo kịp chương trình không?',
    answer:
      'Có. Khóa ôn luyện tháng 6-7 được thiết kế để trẻ làm quen từ nền tảng Tiếng Anh cơ bản, giúp con nghe - nói - phản xạ tiếng Anh và các kỹ năng học tập.',
  },
  {
    question: 'Homeschooling có ảnh hưởng chương trình học chính không?',
    answer:
      'Không. Chương trình tại ApexEdu được thiết kế như một lộ trình hỗ trợ, giúp con làm quen cách học theo định hướng chuẩn Mỹ, phát triển tiếng Anh, tư duy, kỹ năng và sự tự tin bên cạnh chương trình học chính.',
  },
  {
    question: 'Có phải Homeschooling chỉ dạy kiến thức học thuật?',
    answer:
      'Không. Chương trình kết hợp học thuật với kỹ năng sống, nghệ thuật, thể thao, nấu ăn và hoạt động trải nghiệm giúp con phát triển toàn diện.',
  },
  {
    question: 'Nên chọn khóa ôn luyện tháng 6-7 hay Homeschooling tháng 8?',
    answer:
      'Nếu bé cần làm quen trước với tiếng Anh, Toán, tư duy và nề nếp lớp học chuẩn Mỹ, ba mẹ có thể bắt đầu với khóa ôn luyện tháng 6-7. Nếu ba mẹ đã có định hướng dài hơn cho con, có thể tìm hiểu lộ trình Homeschooling khai giảng tháng 8.',
  },
]

const faqImages = [
  { src: faqImageOne, alt: 'Tre tham gia hoat dong hoc tap tai ApexEdu' },
  { src: faqImageTwo, alt: 'Tre hoc cung giao vien trong lop hoc ApexEdu' },
  { src: faqImageThree, alt: 'Tre thuc hanh va tuong tac trong lop hoc' },
  { src: faqImageFour, alt: 'Tre tham gia bai hoc tren bang tuong tac' },
]

const faqSlideInterval = 3800

export default function Hero() {
  const [activeFaqImage, setActiveFaqImage] = useState(1)
  const [platformStartIndex, setPlatformStartIndex] = useState(0)
  const visiblePlatformCards = Array.from({ length: 4 }, (_, offset) => {
    const originalIndex = (platformStartIndex + offset) % platformCards.length

    return {
      ...platformCards[originalIndex],
      originalIndex,
    }
  })
  const visiblePlatformIndexes = visiblePlatformCards.map((card) => card.originalIndex)
  const visibleFaqImages = Array.from({ length: 3 }, (_, offset) => {
    const originalIndex = (activeFaqImage + offset) % faqImages.length

    return {
      ...faqImages[originalIndex],
      originalIndex,
    }
  })
  const visibleFaqIndexes = visibleFaqImages.map((image) => image.originalIndex)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlatformStartIndex((current) => (current + 1) % platformCards.length)
    }, platformSlideInterval)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFaqImage((current) => (current + 1) % faqImages.length)
    }, faqSlideInterval)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="hero-section" id="hero" aria-labelledby="landing-title">
      <h1 className="sr-only" id="landing-title">
        Hè này, con lớn hơn cùng Homeschooling ApexEdu
      </h1>

      <div className="hero-banner">
        <picture>
          <source media="(max-width: 640px)" srcSet={bannerMobile} />
          <img
            className="hero-banner__image"
            src={bannerDesktop}
            alt="Hè này, con lớn hơn - Khóa hè Homeschooling ApexEdu cho trẻ 5 đến 8 tuổi"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>

      </div>

      <div className="registration-section" id="registration-section">
        <div className="registration-card">
          <img className="registration-card__frame" src={formFrame} alt="" aria-hidden="true" />

          <div className="registration-card__title">
            <span>Đăng ký trải nghiệm</span>
            <strong>Homeschooling</strong>
            <span>chuẩn Mỹ ngay tại Dĩ An</span>
          </div>

          <RegisterForm />
        </div>
      </div>

      <div className="growth-section" aria-labelledby="growth-title">
        <div className="growth-panel">
          <div className="section-heading section-heading--growth">
            <h2 id="growth-title">
              <span>Homeschooling ApexEdu</span>
              giúp con lớn hơn như thế nào?
            </h2>
            <p>
              Chương trình Homeschooling{' '}
              <strong>
                100% Tiếng Anh theo giáo trình chuẩn Mỹ, kết nối toàn diện: Toán / Khoa học / Ngữ văn
                / Kỹ năng sống
              </strong>{' '}
              - giúp con lớn hơn trong cách học chủ động, nghĩ độc lập và tự tin thể hiện bản thân.
            </p>
          </div>

          <div className="growth-list" aria-label="Các hoạt động giúp con lớn hơn">
            {growthImages.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} {...lazyImageProps} />
            ))}
          </div>
        </div>
      </div>

      <div className="platform-section" aria-labelledby="platform-title">
        <div className="section-heading section-heading--platform">
          <h2 id="platform-title">
            <span className="platform-title__primary">Nền tảng cho chương trình</span>
            <span className="platform-title__secondary">
              Homeschooling tại Apex Edu
              <img src={platformIcon} alt="" aria-hidden="true" {...lazyImageProps} />
            </span>
          </h2>
        </div>

        <div className="platform-slider" aria-label="Nền tảng chương trình Homeschooling">
          {visiblePlatformCards.map((card) => (
            <article
              className="platform-card"
              key={card.id}
            >
              <img src={card.src} alt="" aria-hidden="true" {...lazyImageProps} />
              <p>{card.copy}</p>
              <span className="sr-only">Nội dung {card.originalIndex + 1}: {card.text}</span>
            </article>
          ))}
        </div>

        <div className="platform-dots" aria-label="Chọn thẻ nền tảng chương trình">
          {platformCards.map((card, index) => (
            <button
              className={visiblePlatformIndexes.includes(index) ? 'is-visible' : 'is-muted'}
              key={card.id}
              type="button"
              onClick={() => setPlatformStartIndex(index)}
              aria-label={`Hiển thị nhóm bắt đầu từ thẻ ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="summer-section" aria-labelledby="summer-title">
        <div className="section-heading section-heading--summer">
          <h2 id="summer-title">
            <span>Bắt đầu từ mùa hè này</span>
            với 2 lựa chọn cho con
            <img src={summerPlane} alt="" aria-hidden="true" {...lazyImageProps} />
          </h2>
        </div>

        <div className="summer-cards">
          {summerOptions.map((option) => (
            <article className="summer-card" key={option.title}>
              <img className="summer-card__bg" src={option.src} alt="" aria-hidden="true" {...lazyImageProps} />
              <div className="summer-card__content">
                <h3>{option.title}</h3>
                <ul>
                  {option.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <button className="consult-button" type="button" onClick={() => scrollToSection('registration-section')}>
                  Đăng ký tư vấn
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="landing-bg landing-bg--match match-section"
        aria-labelledby="match-title"
      >
        <div className="match-panel">
          <div className="section-heading section-heading--match">
            <h2 id="match-title">
              <span>Khóa học</span> phù hợp với bé nào?
            </h2>
          </div>

          <div className="match-card-grid" aria-label="Các nhóm bé phù hợp với chương trình">
            {matchCards.map((card) => (
              <article className="match-card" key={card.label}>
                <img className="match-card__talk" src={card.talk} alt={card.label} {...lazyImageProps} />
                <img src={card.src} alt={card.alt} {...lazyImageProps} />
              </article>
            ))}
          </div>

          <button className="match-submit" type="button" onClick={() => scrollToSection('registration-section')}>
            <img src={registerButton} alt="Đăng ký ngay" />
          </button>

          <div className="day-section" aria-labelledby="day-title">
            <h2 id="day-title">Một ngày của con có gì?</h2>
            <div className="day-schedule">
              {daySchedule.map((item) => (
                <div className="day-schedule__item" key={`${item.time}-${item.text}`}>
                  <img className="day-schedule__time" src={item.image} alt={item.time} {...lazyImageProps} />
                  <span className="day-schedule__text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="landing-bg landing-bg--daily-growth daily-growth-section"
        aria-labelledby="daily-growth-title"
      >
        <div className="section-heading section-heading--daily-growth">
          <h2 id="daily-growth-title">
            <span>Mùa hè cùng Homeschooling</span>
            Thấy con lớn hơn mỗi ngày
            <img src={dailyGrowthIcon} alt="" aria-hidden="true" {...lazyImageProps} />
          </h2>
        </div>

        <div className="daily-growth-cards" aria-label="Ba thay doi cua con trong mua he">
          {dailyGrowthCards.map((card) => (
            <article className="daily-growth-card" key={card.src}>
              <img src={card.src} alt={card.alt} {...lazyImageProps} />
              <div className="daily-growth-card__content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="landing-bg landing-bg--faq faq-section"
        aria-labelledby="faq-title"
      >
        <div className="faq-inner">
          <div className="section-heading section-heading--faq">
            <h2 id="faq-title">
              Ba mẹ còn đang <span>băn khoăn?</span>
            </h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <img className="faq-item__bullet" src={faqBulletIcon} alt="" aria-hidden="true" />
                  <span>{item.question}</span>
                  <img className="faq-item__arrow" src={faqArrowIcon} alt="" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="faq-carousel" aria-label="Hinh anh lop hoc ApexEdu">
            <div className="faq-carousel__stage">
              {visibleFaqImages.map((image) => (
                <button
                  className="faq-carousel__slide"
                  key={image.src}
                  type="button"
                  onClick={() => setActiveFaqImage(image.originalIndex)}
                  aria-label={`Xem hình ${image.originalIndex + 1}`}
                >
                  <img src={image.src} alt={image.alt} {...lazyImageProps} />
                </button>
              ))}
            </div>

            <div className="faq-carousel__dots" aria-label="Chọn hình lớp học">
              {faqImages.map((image, index) => (
                <button
                  className={visibleFaqIndexes.includes(index) ? 'is-visible' : 'is-muted'}
                  key={image.src}
                  type="button"
                  onClick={() => setActiveFaqImage(index)}
                  aria-label={`Chuyển đến hình ${index + 1}`}
                  aria-current={index === activeFaqImage ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

          <button className="faq-submit" type="button" onClick={() => scrollToSection('registration-section')}>
            <img src={finalCtaButton} alt="Đăng ký ngay buổi trải nghiệm miễn phí" />
          </button>
        </div>
      </div>

      <Footer />
    </section>
  )
}
