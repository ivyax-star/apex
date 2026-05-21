import { about } from '../../data/siteContent'
import SectionHeader from '../common/SectionHeader'

export default function About() {
  return (
    <section className="page-section about-section" id="about">
      <div className="container about-grid">
        <div className="about-media">
          <img src={about.image.src} alt={about.image.alt} />
          <div className="about-badge">
            <strong>4 day</strong>
            <span>guided rhythm</span>
          </div>
        </div>

        <div className="about-content">
          <SectionHeader
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
            align="left"
          />

          <div className="pillar-list">
            {about.pillars.map((pillar) => (
              <article className="pillar-item" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
