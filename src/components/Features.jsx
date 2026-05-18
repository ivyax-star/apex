import './Features.css'

export default function Features() {
  const features = [
    {
      icon: '🎓',
      title: 'Accredited Courses',
      description: 'All our courses are designed to meet educational standards and ensure recognized credentials.'
    },
    {
      icon: '📱',
      title: 'Interactive Platform',
      description: 'Modern learning tools with videos, quizzes, assignments, and real-time feedback.'
    },
    {
      icon: '👨‍🏫',
      title: 'Live Sessions',
      description: 'Interactive live classes with expert instructors for real-time learning and Q&A.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Detailed analytics and reports to monitor your child\'s academic progress and growth.'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Connect with students worldwide, participate in collaborative projects and events.'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      description: 'Enterprise-grade security ensuring student data privacy and safe online learning environment.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose Apex Edu?</h2>
        <p className="section-subtitle">
          Innovative features designed for modern homeschooling
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
