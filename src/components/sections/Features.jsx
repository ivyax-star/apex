import { features } from '../../data/siteContent'
import SectionHeader from '../common/SectionHeader'

export default function Features() {
  return (
    <section className="page-section features-section" id="features">
      <div className="container">
        <SectionHeader
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
        />
        
        <div className="feature-grid">
          {features.items.map((feature) => {
            const Icon = feature.icon

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
