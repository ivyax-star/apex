import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>Apex Edu</h4>
          <p>Transforming homeschool education through modern technology and expert instruction.</p>
        </div>

        <div className="footer-section">
          <h5>Product</h5>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Legal</h5>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Apex Edu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
