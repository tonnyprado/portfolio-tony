import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Marco<span className="text-primary">.</span></span>
            <p>Full-Stack Engineer building digital experiences with passion and purpose.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/mapg15" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="mailto:tonnypradog@hotmail.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Marco Antonio Prado García. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
