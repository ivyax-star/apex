import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { brand, navigation } from '../../data/siteContent'
import { scrollToSection } from '../../utils/scrollToSection'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (id) => {
    setIsMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand-mark" type="button" onClick={() => handleNavigation('hero')}>
          <span className="brand-symbol">A</span>
          <span>{brand.name}</span>
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`} aria-label="Primary">
          {navigation.map((item) => (
            <button
              className="nav-link"
              type="button"
              key={item.id}
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="nav-cta" type="button" onClick={() => handleNavigation('cta')}>
            Book Demo
          </button>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
