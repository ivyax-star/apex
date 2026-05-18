import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container cta-content">
        <h2 className="cta-title">Ready to Transform Your Child's Education?</h2>
        <p className="cta-subtitle">
          Join thousands of families who are already experiencing the Apex Edu difference. 
          Start your free trial today with no commitment required.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-secondary-light">Contact Sales</button>
        </div>
        <p className="cta-info">
          No credit card required • Instant access • Cancel anytime
        </p>
      </div>
    </section>
  )
}
