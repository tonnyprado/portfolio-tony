import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            Marco <span className="text-primary">Prado</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Engineer & Startup Founder</p>
          <p className="hero-description">
            5+ years building enterprise microservices and production SaaS platforms.
            Turning complex problems into elegant, scalable solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <span>MP</span>
            </div>
            <div className="hero-decoration hero-decoration-1"></div>
            <div className="hero-decoration hero-decoration-2"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

export default Hero
