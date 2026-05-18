import './Header.css'

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Apex</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button className="nav-link" onClick={() => scrollToSection('about')}>
                About
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection('features')}>
                Features
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection('cta')}>
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
