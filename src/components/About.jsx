import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Apex Edu</h2>
        <p className="section-subtitle">
          Empowering families with quality homeschool education
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Comprehensive Curriculum</h3>
            <p>
              Our curriculum covers all core subjects including Math, Science, 
              English, History, and more. Each subject is designed with engaging 
              content and real-world applications to keep students motivated.
            </p>
          </div>

          <div className="about-card">
            <h3>Expert Instructors</h3>
            <p>
              Learn from experienced educators who are passionate about teaching 
              and dedicated to each student's success. Our instructors provide 
              personalized guidance and support throughout the learning journey.
            </p>
          </div>

          <div className="about-card">
            <h3>Flexible Learning</h3>
            <p>
              Study at your own pace with our flexible schedule. Access course 
              materials anytime, anywhere, and progress through lessons at a speed 
              that works best for your family's lifestyle.
            </p>
          </div>

          <div className="about-card">
            <h3>Community Support</h3>
            <p>
              Join a vibrant community of homeschooling families. Participate in 
              group projects, virtual events, and forums where you can connect 
              with other students and parents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
