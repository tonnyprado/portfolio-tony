import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-background">
        <span className="about-title-bg">FULLSTACK</span>
        <span className="about-title-bg about-title-bg-2">ENGINEER</span>
      </div>

      <div className="about-container container">
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello, I'm <span className="highlight">Marco Antonio Prado García</span>,
              a Full-Stack Engineer based in Mexico.
            </p>
            <p className="about-description">
              I bring innovative ideas to life through clean code and creative solutions.
              Experience in Spring Boot, React, Kafka, PostgreSQL, with hands-on experience
              implementing RAG systems and OAuth2 integrations.
            </p>
          </div>

          <div className="about-text about-text-right">
            <p>
              Skilled in delivering complete platforms end-to-end with React + Spring Boot.
              Passionate about microservices, cloud infrastructure, and building products
              that make a real difference.
            </p>
          </div>
        </div>

        <div className="about-image">
          <div className="about-image-placeholder">
            <div className="placeholder-silhouette">
              <div className="placeholder-head"></div>
              <div className="placeholder-body"></div>
            </div>
          </div>
          {/* Cuando tengas tu foto PNG, reemplaza el placeholder con:
          <img src="/path/to/your-photo.png" alt="Marco Prado" />
          */}
        </div>
      </div>

      <div className="about-scroll">
        <span>(Scroll down)</span>
      </div>
    </section>
  )
}

export default About
