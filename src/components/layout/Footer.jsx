import { brand, footerLinks } from '../../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand-mark brand-mark--footer" href="#hero">
            <span className="brand-symbol">A</span>
            <span>{brand.name}</span>
          </a>
          <p>{brand.tagline}</p>
        </div>

        {footerLinks.map((group) => (
          <div className="footer-column" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
