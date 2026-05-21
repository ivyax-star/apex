import { results } from '../../data/siteContent'
import SectionHeader from '../common/SectionHeader'

export default function Results() {
  return (
    <section className="page-section results-section" id="results">
      <div className="container results-grid">
        <SectionHeader
          eyebrow={results.eyebrow}
          title={results.title}
          description={results.description}
          align="left"
        />

        <div className="step-list">
          {results.steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article className="step-item" key={step.title}>
                <div className="step-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="step-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
