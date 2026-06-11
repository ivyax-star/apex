import Footer from '../layout/Footer'
import { privacyPolicy } from '../../data/privacyPolicy'

function PolicyText({ text }) {
  const parts = text.split(/(https:\/\/ApexEdu\.edu\.vn|apexedu2025@gmail\.com)/gi)

  return parts.map((part, index) => {
    const normalizedPart = part.toLowerCase()

    if (normalizedPart === 'https://apexedu.edu.vn') {
      return (
        <a href="https://ApexEdu.edu.vn" key={`${part}-${index}`}>
          {part}
        </a>
      )
    }

    if (normalizedPart === 'apexedu2025@gmail.com') {
      return (
        <a href="mailto:apexedu2025@gmail.com" key={`${part}-${index}`}>
          {part}
        </a>
      )
    }

    return part
  })
}

function PolicyItem({ item }) {
  return (
    <li className="policy-detail">
      {item.label ? <strong>{item.label}: </strong> : null}
      <span>
        <PolicyText text={item.text} />
      </span>
    </li>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <header className="policy-breadcrumb" aria-label="Chỉ mục trang">
        <div className="policy-breadcrumb__inner">
          <nav className="policy-breadcrumb__nav" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            <span>Chính Sách Bảo Mật Thông Tin</span>
          </nav>
        </div>
      </header>

      <main className="policy-main">
        <article className="policy-article" aria-labelledby="privacy-policy-title">
          <h1 className="policy-title" id="privacy-policy-title">
            {privacyPolicy.title}
          </h1>
          <p className="policy-intro">
            <PolicyText text={privacyPolicy.intro} />
          </p>

          {privacyPolicy.sections.map((section) => (
            <section className="policy-section" key={section.title}>
              <h2>{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>
                  <PolicyText text={paragraph} />
                </p>
              ))}

              {section.items?.length ? (
                <ul>
                  {section.items.map((item) => (
                    <PolicyItem item={item} key={`${item.label || ''}${item.text}`} />
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  )
}
