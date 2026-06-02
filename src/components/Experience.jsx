import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'IBM',
      role: 'Application Developer',
      period: 'June 2021 - July 2025',
      description: [
        'Developed and maintained Spring Boot microservices on Red Hat OpenShift with Kafka for event-driven architecture, serving high-volume banking transactions',
        'Led migration from legacy WebSphere monolith to Spring Boot microservices using strangler fig pattern—completed with zero downtime over 6-month period',
        'Debugged critical performance bottleneck (API response from 1s to 8s under load). Analyzed Prometheus metrics and Kibana logs, identified N+1 query issues',
        'Implemented CI/CD pipelines with GitLab and Docker, automating testing (JUnit, Mockito) and deployment workflows',
        'Managed code quality with SonarQube, maintaining 80%+ test coverage and resolving security vulnerabilities',
        'Collaborated in Agile teams (Scrum) with 6 developers and product managers, conducting daily standups and code reviews',
      ],
      technologies: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'OpenShift', 'Docker', 'GitLab CI/CD'],
    },
    {
      id: 2,
      company: 'IBM',
      role: 'Application Developer Intern',
      period: 'December 2020 - June 2021',
      description: [
        'Support in testing and error correction of Java Spring Boot applications',
        'Practice in dependency management with Gradle and version control with Git',
        'Work in an Agile team using Scrum, Jira and CI/CD pipelines',
      ],
      technologies: ['Java', 'Spring Boot', 'Gradle', 'Git', 'Jira'],
    },
  ]

  return (
    <section className="experience section bg-alt" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-company-logo">
                  <span>{exp.company.charAt(0)}</span>
                </div>
                <div className="experience-info">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>

              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="experience-technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
