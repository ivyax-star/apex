import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Modern Homeschooling for the Digital Age
          </h1>
          <p className="hero-subtitle">
            Apex Edu provides personalized, comprehensive education for homeschooled students. 
            Our platform combines rigorous curriculum, expert guidance, and innovative technology 
            to help your child thrive academically and personally.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Learning Today</button>
            <button className="btn btn-secondary">Schedule a Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="placeholder-content">
              <span className="icon-large">📚</span>
              <p>Your educational journey starts here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
