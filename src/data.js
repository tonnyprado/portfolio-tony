// Bilingual content + project data
export const PORT = {
  ui: {
    nav: {
      es: [["about","Sobre mí"],["projects","Proyectos"],["experience","Experiencia"],["skills","Skills"],["education","Formación"],["contact","Contacto"]],
      en: [["about","About"],["projects","Projects"],["experience","Experience"],["skills","Skills"],["education","Education"],["contact","Contact"]],
    },
    letsTalk: { es: "Hablemos", en: "Let's talk" },
    hero: {
      hi: { es: "Hola, soy", en: "Hello, I'm" },
      role: { es: "Full-Stack Engineer & Fundador", en: "Full-Stack Engineer & Founder" },
      desc: {
        es: "5+ años creando aplicaciones web y móviles para empresas y startups. Transformo ideas en productos digitales funcionales que generan impacto real.",
        en: "5+ years creating web and mobile apps for enterprises and startups. I transform ideas into functional digital products that generate real impact.",
      },
      checks: {
        es: ["Desarrollo completo: diseño, código y despliegue", "Aplicaciones web, móviles y en la nube", "De tu idea a un producto funcionando"],
        en: ["Full development: design, code & deployment", "Web, mobile & cloud applications", "From your idea to a working product"],
      },
      viewWork: { es: "Ver proyectos", en: "View projects" },
      contact: { es: "Contáctame", en: "Contact me" },
      badge: { es: ["años","construyendo"], en: ["years","building"] },
      available: { es: "Disponible para proyectos", en: "Available for projects" },
      scroll: { es: "Scroll", en: "Scroll" },
    },
    marquee: ["FULL-STACK","MICROSERVICES","REACT","SPRING BOOT","CLOUD & DEVOPS","IA / RAG","STARTUP FOUNDER"],
    about: {
      eyebrow: { es: "Sobre mí", en: "About me" },
      bg: ["FULLSTACK","ENGINEER"],
      intro: {
        es: ["Soy ", "Marco Antonio Prado García", ", Full-Stack Engineer basado en México."],
        en: ["I'm ", "Marco Antonio Prado García", ", a Full-Stack Engineer based in Mexico."],
      },
      p1: {
        es: "Doy vida a ideas con código limpio y soluciones creativas. Experiencia en Spring Boot, React, Kafka y PostgreSQL, además de sistemas RAG e integraciones OAuth2.",
        en: "I bring ideas to life through clean code and creative solutions. Experienced in Spring Boot, React, Kafka and PostgreSQL, plus RAG systems and OAuth2 integrations.",
      },
      p2: {
        es: "Entrego plataformas completas de punta a punta con React + Spring Boot. Me apasionan los microservicios, la infraestructura cloud y construir productos que hacen una diferencia real.",
        en: "I deliver complete end-to-end platforms with React + Spring Boot. Passionate about microservices, cloud infrastructure and building products that make a real difference.",
      },
      stats: {
        es: [["5+","Años de experiencia"],["3","Startups co-fundadas"],["100+","Usuarios en producción"],["IBM","Banca enterprise"]],
        en: [["5+","Years of experience"],["3","Startups co-founded"],["100+","Users in production"],["IBM","Enterprise banking"]],
      },
    },
    projects: {
      eyebrow: { es: "Trabajo seleccionado", en: "Selected work" },
      title: { es: ["Proyectos","destacados"], en: ["Featured","projects"] },
      lead: {
        es: "Plataformas reales que diseñé y desarrollé end-to-end. Desliza para recorrerlas — haz clic en cualquiera para ver el caso completo.",
        en: "Real platforms I designed and built end-to-end. Scroll to move through them — click any to open the full case study.",
      },
      hint: { es: "Desliza para explorar", en: "Scroll to explore" },
      open: { es: "Ver caso completo", en: "View full case" },
      openShort: { es: "Ver caso", en: "View case" },
      role: { es: "Mi rol", en: "My role" },
      stack: { es: "Stack", en: "Stack" },
      highlights: { es: "Lo más destacado", en: "Highlights" },
      visit: { es: "Visitar sitio", en: "Visit site" },
      media: { es: "Galería", en: "Gallery" },
      videoLabel: { es: "video walkthrough — coloca tu .mp4 aquí", en: "video walkthrough — drop your .mp4 here" },
      imgLabel: { es: "imagen del proyecto — coloca tu captura aquí", en: "project image — drop your screenshot here" },
    },
    experience: {
      eyebrow: { es: "Trayectoria", en: "Career" },
      title: { es: "Experiencia", en: "Experience" },
      lead: { es: "Cuatro años en IBM construyendo software de banca a escala enterprise.", en: "Four years at IBM building enterprise-scale banking software." },
    },
    skills: {
      eyebrow: { es: "Capacidades", en: "Capabilities" },
      title: { es: "Skills & Stack", en: "Skills & Stack" },
      lead: { es: "El conjunto de herramientas que uso para llevar productos de la idea a producción.", en: "The toolkit I use to take products from idea to production." },
      langs: { es: "Idiomas", en: "Languages" },
      langList: { es: [["Inglés","Avanzado"],["Español","Nativo"]], en: [["English","Advanced"],["Spanish","Native"]] },
    },
    education: {
      eyebrow: { es: "Formación", en: "Education" },
      title: { es: "Formación", en: "Education" },
      lead: { es: "Ingeniería en Sistemas Computacionales y aprendizaje continuo.", en: "Computer Systems Engineering and continuous learning." },
      certsLabel: { es: "Certificaciones", en: "Certifications" },
    },
    contact: {
      eyebrow: { es: "Contacto", en: "Get in touch" },
      title: { es: ["Hablemos de ","tu idea","."], en: ["Let's talk about ","your idea","."] },
      lead: {
        es: "¿Tienes un proyecto en mente o quieres saludar? Me encantaría escucharte. Creemos algo increíble juntos.",
        en: "Have a project in mind or just want to say hi? I'd love to hear from you. Let's create something amazing together.",
      },
    },
    footer: {
      tagline: { es: "Full-Stack Engineer construyendo experiencias digitales con propósito.", en: "Full-Stack Engineer building digital experiences with purpose." },
      rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    },
  },

  contact: {
    email: "tonnypradog@hotmail.com",
    phone: "+52 55 3398 8292",
    phoneRaw: "525533988292",
    linkedin: "linkedin.com/in/mapg15",
    linkedinUrl: "https://www.linkedin.com/in/mapg15",
  },

  skills: [
    { cat: { es: "Backend & Core", en: "Backend & Core" }, items: ["Java","Spring Boot","Spring Security","Hibernate","REST APIs","Kafka","Microservices","Python","FastAPI"] },
    { cat: { es: "Frontend", en: "Frontend" }, items: ["React","Next.js","JavaScript","Tailwind CSS","React Native","Expo"] },
    { cat: { es: "Bases de datos", en: "Databases" }, items: ["PostgreSQL","MongoDB","ChromaDB","Firebase","Redis"] },
    { cat: { es: "Cloud & DevOps", en: "Cloud & DevOps" }, items: ["AWS","Google Cloud","Red Hat OpenShift","Docker","GitLab CI/CD","Railway","Vercel"] },
    { cat: { es: "Tools & Observability", en: "Tools & Observability" }, items: ["Prometheus","Kibana","SonarQube","Swagger/OpenAPI","Postman","Jira","Git"] },
    { cat: { es: "Testing", en: "Testing" }, items: ["JUnit","Mockito","Integration Testing"] },
  ],

  experience: [
    {
      company: "IBM", short: "IBM",
      role: { es: "Application Developer", en: "Application Developer" },
      period: { es: "Jun 2021 — Jul 2025", en: "Jun 2021 — Jul 2025" },
      desc: {
        es: [
          "Desarrollé y mantuve microservicios Spring Boot sobre Red Hat OpenShift con Kafka para arquitectura event-driven, sirviendo transacciones bancarias de alto volumen",
          "Lideré la migración de un monolito legacy WebSphere a microservicios Spring Boot con patrón strangler fig — completada sin downtime en 6 meses",
          "Resolví un cuello de botella crítico de rendimiento (respuesta de API de 1s a 8s bajo carga). Analicé métricas de Prometheus y logs de Kibana, identifiqué problemas N+1",
          "Implementé pipelines CI/CD con GitLab y Docker, automatizando testing (JUnit, Mockito) y despliegues",
          "Gestioné calidad de código con SonarQube, manteniendo 80%+ de cobertura y resolviendo vulnerabilidades de seguridad",
          "Colaboré en equipos Agile (Scrum) con 6 desarrolladores y product managers",
        ],
        en: [
          "Developed and maintained Spring Boot microservices on Red Hat OpenShift with Kafka for event-driven architecture, serving high-volume banking transactions",
          "Led migration from a legacy WebSphere monolith to Spring Boot microservices using the strangler fig pattern — completed with zero downtime over a 6-month period",
          "Debugged a critical performance bottleneck (API response from 1s to 8s under load). Analyzed Prometheus metrics and Kibana logs, identified N+1 query issues",
          "Implemented CI/CD pipelines with GitLab and Docker, automating testing (JUnit, Mockito) and deployment workflows",
          "Managed code quality with SonarQube, maintaining 80%+ test coverage and resolving security vulnerabilities",
          "Collaborated in Agile teams (Scrum) with 6 developers and product managers",
        ],
      },
      tech: ["Java","Spring Boot","Kafka","PostgreSQL","OpenShift","Docker","GitLab CI/CD"],
    },
    {
      company: "IBM", short: "IBM",
      role: { es: "Application Developer Intern", en: "Application Developer Intern" },
      period: { es: "Dic 2020 — Jun 2021", en: "Dec 2020 — Jun 2021" },
      desc: {
        es: [
          "Apoyo en pruebas y corrección de errores de aplicaciones Java Spring Boot",
          "Práctica en gestión de dependencias con Gradle y control de versiones con Git",
          "Trabajo en equipo Agile usando Scrum, Jira y pipelines CI/CD",
        ],
        en: [
          "Support in testing and error correction of Java Spring Boot applications",
          "Practice in dependency management with Gradle and version control with Git",
          "Work in an Agile team using Scrum, Jira and CI/CD pipelines",
        ],
      },
      tech: ["Java","Spring Boot","Gradle","Git","Jira"],
    },
  ],

  education: [
    {
      inst: "Universidad de Colima",
      degree: { es: "Ingeniería en Sistemas Computacionales", en: "B.Sc. — Computer Systems Engineering" },
      period: { es: "2021", en: "2021" },
      desc: {
        es: "Experiencia práctica con Python y Java para backend. Conocimiento en algoritmos y estructuras de datos con C/C++ y Python. Habilidades en entornos Linux y línea de comandos.",
        en: "Hands-on experience with Python and Java for backend development. Knowledge in algorithms and data structures with C/C++ and Python. Practical skills in Linux environments and command line.",
      },
    },
    {
      inst: "Universidad de Colima",
      degree: { es: "Diplomado — TI para Desarrollo e Innovación", en: "Diploma — IT for Development and Innovation" },
      period: { es: "2022", en: "2022" },
      desc: {
        es: "Estudios avanzados en tecnologías de la información modernas y prácticas de desarrollo innovadoras.",
        en: "Advanced studies in modern information technologies and innovative development practices.",
      },
    },
    {
      inst: "Universidad de Colima",
      degree: { es: "Bachillerato — Programación", en: "High School Diploma — Programming" },
      period: { es: "2017", en: "2017" },
      desc: {
        es: "Bases en algoritmos y estructuras de datos resolviendo retos de programación en C/C++ y C#.",
        en: "Foundation in algorithms and data structures solving programming challenges in C/C++ and C#.",
      },
    },
  ],
  certs: [{ name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", link: "https://www.credly.com/badges/7aa058e9-54cf-4e6e-9a71-6524e1741250/public_url" }],

  /* ---------- PROJECTS ---------- */
  projectList: [
    {
      id: "marnee",
      name: "MARNEE",
      hasVideo: true,
      period: { es: "Ago 2025 — Presente", en: "Aug 2025 — Present" },
      roleTag: { es: "Co-Fundador & Full-Stack", en: "Co-Founder & Full-Stack" },
      tagline: {
        es: "Asistente de marketing con IA para fundadores, marketers y creadores de contenido.",
        en: "AI-powered marketing assistant for founders, marketers and content creators.",
      },
      lead: {
        es: "Plataforma de asistente de marketing impulsada por IA que ayuda a desarrollar estrategias inteligentes, crear contenido y gestionar campañas en redes sociales. Arquitectura de microservicios con dos backends (Auth en Spring Boot y AI en FastAPI) y RAG con ChromaDB que reduce costos de tokens 70–80%.",
        en: "AI-powered marketing assistant platform that helps develop smart strategies, create content and manage social media campaigns. Microservices architecture with two backends (Auth on Spring Boot and AI on FastAPI) and RAG with ChromaDB reducing token costs by 70–80%.",
      },
      highlights: {
        es: [
          "Chat con IA conversacional para estrategia de marketing y recomendaciones personalizadas",
          "Calendario de contenido visual con sugerencias de horarios óptimos y drag-and-drop",
          "Generador de contenido: brainstorming por pilares, scripts y editor de imágenes (Fabric.js)",
          "Dashboard de analytics con métricas de rendimiento e insights",
          "Integraciones con Instagram Business, Meta Ads, Google Analytics, TikTok y YouTube",
          "100+ creadores en lista de espera, actualmente en beta/acceso anticipado"
        ],
        en: [
          "Conversational AI chat for marketing strategy and personalized recommendations",
          "Visual content calendar with optimal timing suggestions and drag-and-drop",
          "Content generator: pillar-based brainstorming, scripts and image editor (Fabric.js)",
          "Analytics dashboard with performance metrics and insights",
          "Integrations with Instagram Business, Meta Ads, Google Analytics, TikTok and YouTube",
          "100+ creators on waitlist, currently in beta/early access"
        ],
      },
      tech: ["React 19","React Router 7","Material-UI","Tailwind CSS","Framer Motion","Spring Boot","FastAPI","PostgreSQL","ChromaDB"],
      link: "https://www.marnee-ia.com",
      media: {
        hero: "marnee/mainpage.png",
        video: null,
        gallery: ["marnee/login.png"],
      },
    },
    {
      id: "mendiola",
      name: "Mendiola's Logistics",
      hasVideo: true,
      period: { es: "Mar 2026 — Presente", en: "Mar 2026 — Present" },
      roleTag: { es: "Full-Stack Dev", en: "Full-Stack Dev" },
      tagline: {
        es: "Sistema de logística y tracking de envíos con ubicación de transportistas en tiempo real.",
        en: "Logistics & shipment tracking system with real-time carrier location updates.",
      },
      lead: {
        es: "Plataforma de logística y rastreo de envíos con actualización de ubicación de transportistas en tiempo real vía WebSocket. Diseñé un algoritmo ETL para transformar datos no estructurados de Excel en una base de datos PostgreSQL estructurada.",
        en: "Logistics and shipment-tracking platform with real-time carrier location via WebSocket. I designed an ETL algorithm to transform unstructured Excel data into a structured PostgreSQL database.",
      },
      highlights: {
        es: ["Arquitectura monolítica para un MVP más rápido, con migración a microservicios planificada","App móvil de un solo codebase con Expo (iOS/Android)","Integración con Google Maps API para mapeo de distribución"],
        en: ["Monolithic architecture for a faster MVP, with planned microservices migration","Single-codebase mobile app with Expo (iOS/Android)","Google Maps API integration for distribution mapping"],
      },
      tech: ["Spring Boot","React","PostgreSQL","Expo","Python","WebSocket"],
      link: null,
      media: {
        hero: "mendiola-platform/loginpage.png",
        video: "mendiola-platform/mendiola-demo.mp4",
        gallery: ["mendiola-platform/dashboard.png", "mendiola-platform/shipments.png", "mendiola-platform/tracking.png", "mendiola-platform/details.png", "mendiola-platform/mobile-app.png", "mendiola-platform/analytics.png"],
      },
    },
    {
      id: "belle",
      name: "Belle Pielle",
      hasVideo: true,
      period: { es: "May 2026 — Presente", en: "May 2026 — Present" },
      roleTag: { es: "Full-Stack Dev", en: "Full-Stack Dev" },
      tagline: {
        es: "Landing y sistema de reservas para un negocio de cosmetología, con dashboard de administración.",
        en: "Landing page and booking system for a cosmetology business, with an admin dashboard.",
      },
      lead: {
        es: "Landing page y sistema de reservación de citas para un negocio de cosmetología. Flujo de reserva multi-paso con calendario interactivo y un dashboard de administración completo para gestionar citas, horarios y tratamientos.",
        en: "Landing page and appointment-booking system for a cosmetology business. A multi-step reservation flow with an interactive calendar and a complete admin dashboard to manage appointments, schedules and treatments.",
      },
      highlights: {
        es: ["Flujo de reserva multi-paso con disponibilidad en tiempo real","Dashboard admin con calendario y CRUD de tratamientos","PWA-ready con integración de WhatsApp para recordatorios"],
        en: ["Multi-step booking flow with real-time availability","Admin dashboard with calendar and CRUD for treatments","PWA-ready with WhatsApp integration for reminders"],
      },
      tech: ["React","Vite","Tailwind CSS","Firebase","Framer Motion","FullCalendar"],
      link: null,
      media: {
        hero: "daniweb/belle-pielle-hero.png",
        video: "daniweb/belle-demo-1.mp4",
        gallery: ["daniweb/dani1.png", "daniweb/dani2.png", "daniweb/dani3.png", "daniweb/dani4.png", "daniweb/belle-demo-2.mp4"],
      },
    },
    {
      id: "sigapi",
      name: "SIGAPI",
      hasVideo: true,
      period: { es: "Dic 2025 — Abr 2026", en: "Dec 2025 — Apr 2026" },
      roleTag: { es: "Frontend Lead", en: "Frontend Lead" },
      tagline: {
        es: "Plataforma de modelado de diagramas en Roomie-IT, construida con React Flow en 3 semanas.",
        en: "Diagram-modeling platform at Roomie-IT, built with React Flow in 3 weeks.",
      },
      lead: {
        es: "Plataforma para modelado de diagramas en Roomie-IT. Aprendí React Flow de forma autodidacta e implementé un sistema complejo de diagramas con nodos personalizados y sincronización de estado en tiempo real en 3 semanas.",
        en: "Platform for diagram modeling at Roomie-IT. Self-taught React Flow and implemented a complex diagram system with custom nodes and real-time state sync within 3 weeks.",
      },
      highlights: {
        es: ["Migración de una plataforma legacy a un nuevo sistema en React","Nodos personalizados y manejo de edges","Sincronización de estado en tiempo real"],
        en: ["Migration from a legacy platform to a new React system","Custom nodes and edge handling","Real-time state synchronization"],
      },
      tech: ["React","React Flow","Spring Boot","PostgreSQL","JavaScript"],
      link: null,
      media: {
        hero: null,
        video: "sigapi/sigapi-demo-2.mov",
        gallery: ["sigapi/sigapi-screenshot-1.png", "sigapi/sigapi-screenshot-2.jpg", "sigapi/sigapi-demo.mov"],
      },
    },
    {
      id: "blundy",
      name: "Blundy",
      hasVideo: true,
      period: { es: "Jul 2025 — Nov 2025", en: "Jul 2025 — Nov 2025" },
      roleTag: { es: "Full-Stack Dev", en: "Full-Stack Dev" },
      tagline: {
        es: "Plataforma e-commerce a la medida con backend serverless y arquitectura event-driven.",
        en: "Custom e-commerce platform with serverless backend and event-driven architecture.",
      },
      lead: {
        es: "Plataforma de pedidos e-commerce a la medida con backend serverless. Arquitectura event-driven para procesamiento asíncrono de órdenes y manejo de pagos, integrando Stripe, PayPal y Shippo.",
        en: "Custom e-commerce ordering platform with a serverless backend. Event-driven architecture for async order processing and payment handling, integrating Stripe, PayPal and Shippo.",
      },
      highlights: {
        es: ["Integración de APIs de Stripe, PayPal y Shippo","Firebase Storage para gestión de medios escalable","Arquitectura serverless en Google Cloud"],
        en: ["Integrated Stripe, PayPal and Shippo APIs","Firebase Storage for scalable media management","Serverless architecture on Google Cloud"],
      },
      tech: ["React","Next.js","Google Cloud Functions","Stripe","PayPal","Firebase"],
      link: null,
      media: {
        hero: "blundy/blundy1.png",
        video: null,
        gallery: ["blundy/blundy-demo.mov", "blundy/blundy2.png", "blundy/blundy3.png"],
      },
    },
  ],
};

export default PORT;
