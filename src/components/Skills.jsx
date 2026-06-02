import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Backend & Core',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs', 'Kafka', 'Microservices', 'Python', 'FastAPI'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React Native', 'Expo'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'ChromaDB', 'Firebase', 'Redis'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Red Hat OpenShift', 'Docker', 'GitLab CI/CD', 'Railway', 'Vercel'],
    },
    {
      category: 'Tools & Observability',
      skills: ['Prometheus', 'Kibana', 'SonarQube', 'Swagger/OpenAPI', 'Postman', 'Jira', 'Git'],
    },
    {
      category: 'Testing',
      skills: ['JUnit', 'Mockito', 'Integration Testing'],
    },
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-languages">
          <h3>Languages</h3>
          <div className="language-badges">
            <span className="language-badge">English</span>
            <span className="language-badge">Spanish (Native)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
