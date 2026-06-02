import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      institution: 'University of Colima',
      degree: "Bachelor's Degree – Computer Systems Engineering",
      period: 'June 2021',
      description: 'Hands-on experience with Python and Java for backend development. Knowledge in algorithms and data structures with C/C++ and Python. Practical skills in Linux environments and command line.',
    },
    {
      id: 2,
      institution: 'University of Colima',
      degree: 'Diploma – Information Technologies for Development and Innovation',
      period: 'June 2022',
      description: 'Advanced studies in modern information technologies and innovative development practices.',
    },
    {
      id: 3,
      institution: 'University of Colima',
      degree: 'High School Diploma – Programming',
      period: 'June 2017',
      description: 'Foundation in algorithms and data structures solving programming challenges in C/C++ and C#.',
    },
  ]

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
    },
  ]

  return (
    <section className="education section bg-alt" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="certifications">
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-badge">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
