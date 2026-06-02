import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Mendiola's Logistics",
      period: 'March 2026 - Present',
      description: 'Logistics and shipment tracking system with real-time carrier location updates using WebSocket integration. Designed ETL algorithm to transform unstructured Excel data into structured PostgreSQL database.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Expo', 'Python', 'WebSocket'],
      highlights: [
        'Monolithic architecture for faster MVP, planned microservices migration',
        'Single-codebase mobile app with Expo (iOS/Android)',
        'Google Maps API integration for distribution mapping',
      ],
    },
    {
      id: 2,
      name: 'MARNEE',
      period: 'August 2025 - Present',
      description: 'SaaS platform with microservices architecture. Co-Founder & Full-Stack Developer. Implemented RAG with ChromaDB achieving 70-80% token cost reduction.',
      technologies: ['React', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'ChromaDB', 'Docker'],
      highlights: [
        'OAuth2 multi-provider auth (Meta, Google, Apple)',
        'Hybrid ML+AI reducing OpenAI costs by 90-95%',
        '100+ registered users, deployed on Railway',
      ],
    },
    {
      id: 3,
      name: 'SIGAPI',
      period: 'December 2025 - April 2026',
      description: 'Platform for diagram modeling at Roomie-IT. Self-taught React Flow library, implementing complex diagram system with custom nodes and real-time state sync within 3 weeks.',
      technologies: ['React', 'React Flow', 'Spring Boot', 'PostgreSQL', 'JavaScript'],
      highlights: [
        'Migration from legacy platform to new React system',
        'Custom nodes and edge handling',
        'Real-time state synchronization',
      ],
    },
    {
      id: 4,
      name: 'Blundy',
      period: 'July 2025 - November 2025',
      description: 'Custom e-commerce ordering platform with serverless backend. Event-driven architecture for async order processing and payment handling.',
      technologies: ['React', 'Next.js', 'Google Cloud Functions', 'Stripe', 'PayPal', 'Firebase'],
      highlights: [
        'Integrated Stripe, PayPal, and Shippo APIs',
        'Firebase Storage for scalable media management',
        'Serverless architecture on Google Cloud',
      ],
    },
    {
      id: 5,
      name: 'Belle Pielle',
      period: 'May 2026 - Present',
      description: 'Landing page and appointment booking system for a cosmetology business. Features a multi-step reservation flow with interactive calendar and a complete admin dashboard for managing appointments, schedules, and treatments.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Framer Motion', 'FullCalendar'],
      highlights: [
        'Multi-step booking flow with real-time availability',
        'Admin dashboard with calendar and CRUD for treatments',
        'PWA-ready with WhatsApp integration for reminders',
      ],
    },
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <span>{project.name.charAt(0)}</span>
                </div>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
