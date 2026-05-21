import { ArrowRight, CalendarDays } from 'lucide-react'
import { cta } from '../../data/siteContent'
import { scrollToSection } from '../../utils/scrollToSection'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container cta-grid">
        <div>
          <p className="eyebrow eyebrow--light">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>

        <div className="cta-actions">
          <button className="button button--light" type="button" onClick={() => scrollToSection(cta.primaryAction.id)}>
            {cta.primaryAction.label}
            <ArrowRight size={18} />
          </button>
          <button className="button button--outline-light" type="button" onClick={() => scrollToSection(cta.secondaryAction.id)}>
            <CalendarDays size={18} />
            {cta.secondaryAction.label}
          </button>
          <span>{cta.note}</span>
        </div>
      </div>
    </section>
  )
}
