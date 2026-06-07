// Bilingual content + project data
export const PORT = {
  ui: {
    nav: {
      es: [["about","Sobre mí"],["services","Servicios"],["projects","Proyectos"],["experience","Experiencia"],["skills","Skills"],["contact","Contacto"]],
      en: [["about","About"],["services","Services"],["projects","Projects"],["experience","Experience"],["skills","Skills"],["contact","Contact"]],
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
        es: ["Soy ", "Marco Antonio Prado García", ", Full-Stack Engineer ", "basado en Ciudad de México", "."],
        en: ["I'm ", "Marco Antonio Prado García", ", a Full-Stack Engineer ", "based in Mexico City", "."],
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
    services: {
      title: { es: ["Lo que puedo", "hacer por ti"], en: ["What I can", "do for you"] },
      lead: {
        es: "Desarrollo soluciones digitales completas, desde la idea inicial hasta el producto funcionando en producción.",
        en: "I build complete digital solutions, from the initial idea to the product running in production.",
      },
      cta: { es: "Hablemos de tu proyecto", en: "Let's discuss your project" },
      items: [
        {
          icon: "web",
          title: { es: "Sitios Web", en: "Websites" },
          desc: {
            es: "Desde landing pages de alto impacto hasta sitios web completos con CMS. Diseño responsive, optimizado para SEO y velocidad.",
            en: "From high-impact landing pages to full websites with CMS. Responsive design, optimized for SEO and speed.",
          },
          tags: ["React", "Next.js", "Tailwind CSS"],
        },
        {
          icon: "mobile",
          title: { es: "Apps Móviles", en: "Mobile Apps" },
          desc: {
            es: "Aplicaciones nativas para iOS y Android con un solo código base. Experiencia fluida, notificaciones push y funcionamiento offline.",
            en: "Native apps for iOS and Android with a single codebase. Smooth experience, push notifications and offline support.",
          },
          tags: ["React Native", "Expo", "Firebase"],
        },
        {
          icon: "platform",
          title: { es: "Plataformas SaaS", en: "SaaS Platforms" },
          desc: {
            es: "Sistemas complejos con arquitectura de microservicios, APIs robustas, autenticación segura e integraciones con terceros.",
            en: "Complex systems with microservices architecture, robust APIs, secure authentication and third-party integrations.",
          },
          tags: ["Spring Boot", "FastAPI", "PostgreSQL"],
        },
        {
          icon: "cloud",
          title: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
          desc: {
            es: "Infraestructura escalable en la nube, CI/CD automatizado, contenedores y monitoreo. Tu app lista para crecer.",
            en: "Scalable cloud infrastructure, automated CI/CD, containers and monitoring. Your app ready to scale.",
          },
          tags: ["AWS", "Docker", "Railway"],
        },
      ],
    },
    projects: {
      eyebrow: { es: "Trabajo seleccionado", en: "Selected work" },
      title: { es: ["Proyectos","destacados"], en: ["Featured","projects"] },
      lead: {
        es: "Plataformas reales que diseñé y desarrollé end-to-end. Desliza para recorrerlas, haz clic en cualquiera para ver el caso completo.",
        en: "Real platforms I designed and built end-to-end. Scroll to explore, click any to open the full case study.",
      },
      hint: { es: "Desliza para explorar", en: "Scroll to explore" },
      open: { es: "Ver caso completo", en: "View full case" },
      openShort: { es: "Ver caso", en: "View case" },
      role: { es: "Mi rol", en: "My role" },
      stack: { es: "Stack", en: "Stack" },
      highlights: { es: "Lo más destacado", en: "Highlights" },
      visit: { es: "Visitar sitio", en: "Visit site" },
      media: { es: "Galería", en: "Gallery" },
      videoLabel: { es: "video walkthrough", en: "video walkthrough" },
      imgLabel: { es: "imagen del proyecto", en: "project image" },
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
        es: "¿Tienes un proyecto en mente? Me encantaría escucharte. Creemos algo increíble juntos.",
        en: "Have a project in mind? I'd love to hear from you. Let's create something amazing together.",
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
      period: { es: "Jun 2021 - Jul 2025", en: "Jun 2021 - Jul 2025" },
      desc: {
        es: [
          "Desarrollé y mantuve microservicios Spring Boot sobre Red Hat OpenShift con Kafka para arquitectura event-driven, sirviendo transacciones bancarias de alto volumen",
          "Lideré la migración de un monolito legacy WebSphere a microservicios Spring Boot con patrón strangler fig, completada sin downtime en 6 meses",
          "Resolví un cuello de botella crítico de rendimiento (respuesta de API de 1s a 8s bajo carga). Analicé métricas de Prometheus y logs de Kibana, identifiqué problemas N+1",
          "Implementé pipelines CI/CD con GitLab y Docker, automatizando testing (JUnit, Mockito) y despliegues",
          "Gestioné calidad de código con SonarQube, manteniendo 80%+ de cobertura y resolviendo vulnerabilidades de seguridad",
          "Colaboré en equipos Agile (Scrum) con 6 desarrolladores y product managers",
        ],
        en: [
          "Developed and maintained Spring Boot microservices on Red Hat OpenShift with Kafka for event-driven architecture, serving high-volume banking transactions",
          "Led migration from a legacy WebSphere monolith to Spring Boot microservices using the strangler fig pattern. Completed with zero downtime over 6 months",
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
      period: { es: "Dic 2020 - Jun 2021", en: "Dec 2020 - Jun 2021" },
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
      degree: { es: "Ingeniería en Sistemas Computacionales", en: "B.Sc. in Computer Systems Engineering" },
      period: { es: "2021", en: "2021" },
      desc: {
        es: "Experiencia práctica con Python y Java para backend. Conocimiento en algoritmos y estructuras de datos con C/C++ y Python. Habilidades en entornos Linux y línea de comandos.",
        en: "Hands-on experience with Python and Java for backend development. Knowledge in algorithms and data structures with C/C++ and Python. Practical skills in Linux environments and command line.",
      },
    },
    {
      inst: "Universidad de Colima",
      degree: { es: "Diplomado en TI para Desarrollo e Innovación", en: "Diploma in IT for Development and Innovation" },
      period: { es: "2022", en: "2022" },
      desc: {
        es: "Estudios avanzados en tecnologías de la información modernas y prácticas de desarrollo innovadoras.",
        en: "Advanced studies in modern information technologies and innovative development practices.",
      },
    },
    {
      inst: "Universidad de Colima",
      degree: { es: "Bachillerato en Programación", en: "High School Diploma in Programming" },
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
      period: { es: "Ago 2025 - Presente", en: "Aug 2025 - Present" },
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
      // Secciones detalladas del caso de estudio
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "Los emprendedores y creadores de contenido enfrentan un gran problema: no saben qué publicar, cuándo hacerlo, ni cómo hacer crecer sus redes sociales.\n\nContratar una agencia de marketing cuesta miles de dólares al mes, y hacerlo solo consume más de 15 horas semanales adivinando qué funcionará.\n\nMarnee es como tener un director de marketing personal impulsado por IA — te ayuda a planificar tu contenido, te sugiere ideas basadas en tendencias, y organiza tu calendario de publicaciones. Todo esto a una fracción del costo de una agencia.",
            en: "Entrepreneurs and content creators face a big problem: they don't know what to post, when to do it, or how to grow their social media.\n\nHiring a marketing agency costs thousands of dollars per month, and doing it yourself takes over 15 hours a week guessing what will work.\n\nMarnee is like having a personal marketing director powered by AI — it helps you plan your content, suggests ideas based on trends, and organizes your posting calendar. All at a fraction of the cost of an agency.",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de diseño", en: "My design process" },
          content: {
            es: "Empecé con una identidad visual \"amigable y tierna\" (una mascota tipo criatura púrpura con audífonos), pero al evolucionar el producto me di cuenta que necesitaba transmitir profesionalismo y confianza — después de todo, Marnee ayuda con decisiones de negocio.\n\nHice una transición hacia un diseño más corporativo y moderno: colores más refinados, tipografía sans-serif limpia, y una mascota que mantiene su personalidad pero se ve más seria. Documenté todo en un brief de marca para mantener consistencia.",
            en: "I started with a \"friendly and cute\" visual identity (a mascot-like purple creature with headphones), but as the product evolved I realized I needed to convey professionalism and trust — after all, Marnee helps with business decisions.\n\nI made a transition to a more corporate and modern design: more refined colors, clean sans-serif typography, and a mascot that keeps its personality but looks more serious. I documented everything in a brand brief to maintain consistency.",
          },
          images: ["marnee/login.png"],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "Dividí el backend en dos partes, cada una especializada en lo que hace mejor:\n\n• Spring Boot (Java): Maneja todo lo de seguridad — login, usuarios, sesiones. Java es muy maduro y robusto para esto.\n\n• FastAPI (Python): Maneja toda la inteligencia artificial — el chat, generación de contenido, análisis de imágenes. Python se integra nativamente con OpenAI y herramientas de AI.\n\n• RAG (Retrieval Augmented Generation): Es una técnica que permite que la IA \"recuerde\" información relevante sobre tu marca. Cuando le pides ayuda, busca en una base de conocimiento para darte respuestas personalizadas, no genéricas.",
            en: "I split the backend into two parts, each specialized in what it does best:\n\n• Spring Boot (Java): Handles all security — login, users, sessions. Java is very mature and robust for this.\n\n• FastAPI (Python): Handles all artificial intelligence — chat, content generation, image analysis. Python integrates natively with OpenAI and AI tools.\n\n• RAG (Retrieval Augmented Generation): A technique that allows AI to \"remember\" relevant information about your brand. When you ask for help, it searches a knowledge base to give you personalized answers, not generic ones.",
          },
          images: [],
        },
        {
          title: { es: "Desafíos y soluciones", en: "Challenges & solutions" },
          content: {
            es: "Componentes muy grandes: Tenía archivos de código con 700+ líneas que eran imposibles de mantener. Los dividí en piezas pequeñas y reutilizables, reduciendo el código un 81%.\n\nManejo de errores inconsistente: Creé un sistema centralizado que detecta qué tipo de error ocurrió y muestra mensajes amigables al usuario en su idioma.\n\nLímites de la API de OpenAI: Implementé un sistema que controla cuántas peticiones se hacen por minuto para evitar bloqueos y mejorar la experiencia del usuario.\n\nProcesamiento de imágenes: Los usuarios querían subir imágenes como referencia para que la IA las analizara. Integré GPT-4 Vision para que la IA pueda \"ver\" las imágenes y dar sugerencias basadas en ellas.",
            en: "Very large components: I had code files with 700+ lines that were impossible to maintain. I split them into small, reusable pieces, reducing code by 81%.\n\nInconsistent error handling: I created a centralized system that detects what type of error occurred and displays friendly messages to the user in their language.\n\nOpenAI API limits: I implemented a system that controls how many requests are made per minute to avoid blocks and improve user experience.\n\nImage processing: Users wanted to upload images as references for the AI to analyze. I integrated GPT-4 Vision so the AI can \"see\" images and give suggestions based on them.",
          },
          images: [],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "• 20+ emprendedores en lista de espera\n• Soporte en 3 idiomas: inglés, español y coreano\n• Producto funcional completo: chat con IA, calendario de contenido, dashboard de analytics, generador de imágenes con editor integrado\n• Integraciones: Instagram, TikTok, Meta Ads, Google Analytics y YouTube\n• Panel de administración con 13 módulos para gestionar usuarios, prompts, seguridad y más",
            en: "• 20+ entrepreneurs on the waitlist\n• Support in 3 languages: English, Spanish and Korean\n• Complete functional product: AI chat, content calendar, analytics dashboard, image generator with integrated editor\n• Integrations: Instagram, TikTok, Meta Ads, Google Analytics and YouTube\n• Admin panel with 13 modules to manage users, prompts, security and more",
          },
          images: [],
        },
      ],
    },
    {
      id: "mendiola",
      name: "Mendiola's Logistics",
      hasVideo: true,
      period: { es: "Mar 2026 - Presente", en: "Mar 2026 - Present" },
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
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "Trabajé con una empresa de distribución de productos de venta directa. Cada día, docenas de repartidores salen a entregar cientos de paquetes a consultoras en diferentes zonas de la ciudad.\n\nTodo se manejaba con Excel y WhatsApp. El administrador recibía un archivo de Excel con la lista de entregas del día, lo imprimía, lo repartía a cada chofer, y después esperaba a que regresaran para saber qué había pasado.\n\n\"¿Ya entregaste el paquete de la ruta 45?\" — Mensaje de WhatsApp\n\"Sí, pero no estaba la señora\" — Respuesta 2 horas después\n\"¿Y quién lo recibió?\" — Otro mensaje\n\"Un vecino creo\" — Sin foto, sin nombre, sin hora exacta\n\nEl resultado: paquetes perdidos, quejas de clientes, imposible saber dónde estaban los repartidores en tiempo real, y al final del día un caos de papeles y mensajes tratando de reconstruir qué había pasado.\n\nMi meta fue crear un sistema donde desde que llega la lista de entregas hasta que el último paquete se entrega, todo quede registrado, visible y en tiempo real. Pero también quise resolver algo más: los sistemas de logística suelen ser feos y complicados. Mi objetivo fue crear algo que la gente quisiera usar, no que tuviera que usar.",
            en: "I worked with a direct sales product distribution company. Every day, dozens of delivery drivers go out to deliver hundreds of packages to consultants in different areas of the city.\n\nEverything was managed with Excel and WhatsApp. The administrator received an Excel file with the day's delivery list, printed it, distributed it to each driver, and then waited for them to return to know what had happened.\n\n\"Did you deliver the package for route 45?\" — WhatsApp message\n\"Yes, but the lady wasn't there\" — Response 2 hours later\n\"Who received it?\" — Another message\n\"A neighbor I think\" — No photo, no name, no exact time\n\nThe result: lost packages, customer complaints, impossible to know where drivers were in real time, and at the end of the day chaos of papers and messages trying to reconstruct what had happened.\n\nMy goal was to create a system where from the moment the delivery list arrives until the last package is delivered, everything is recorded, visible and in real time. But I also wanted to solve something else: logistics systems are usually ugly and complicated. My goal was to create something people would want to use, not have to use.",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de diseño", en: "My design process" },
          content: {
            es: "Antes de escribir una sola línea de código, pasé tiempo entendiendo el flujo real. Vi cómo el administrador abría el Excel, cómo buscaba información, qué preguntas le hacían los repartidores por WhatsApp, qué reportes necesitaba al final del día.\n\nMe di cuenta de algo importante: estas personas pasan 6-8 horas al día frente al sistema. Si la experiencia es mala, su día entero es malo.\n\nDiseñé pensando en dos tipos de usuarios muy diferentes:\n\n• El administrador — Está en oficina, con computadora grande, necesita ver mucha información a la vez, generar reportes, tomar decisiones rápidas.\n\n• El repartidor — Está en la calle, con el celular en una mano, bajo el sol, con prisa. Necesita tocar un botón grande que diga \"Entregado\" y seguir con su ruta.\n\nElegí colores vivos (violeta y naranja en vez de grises corporativos), esquinas redondeadas, animaciones sutiles que hacen que la interfaz se sienta viva. Cuando el repartidor marca una entrega exitosa, hay una pequeña animación de celebración. Parece un detalle menor, pero después de 50 entregas al día, esos pequeños momentos positivos importan.",
            en: "Before writing a single line of code, I spent time understanding the real flow. I watched how the administrator opened Excel, how they searched for information, what questions drivers asked via WhatsApp, what reports were needed at the end of the day.\n\nI realized something important: these people spend 6-8 hours a day in front of the system. If the experience is bad, their entire day is bad.\n\nI designed thinking about two very different types of users:\n\n• The administrator — In the office, with a large computer, needs to see a lot of information at once, generate reports, make quick decisions.\n\n• The delivery driver — On the street, phone in one hand, under the sun, in a hurry. Needs to tap a big button that says \"Delivered\" and continue with their route.\n\nI chose vivid colors (purple and orange instead of corporate grays), rounded corners, subtle animations that make the interface feel alive. When a driver marks a successful delivery, there's a small celebration animation. It seems like a minor detail, but after 50 deliveries a day, those small positive moments matter.",
          },
          images: ["mendiola-platform/dashboard.png", "mendiola-platform/mobile-app.png"],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "La decisión principal: un sistema unificado en vez de muchas piezas separadas. Opté por construir un solo sistema robusto porque estaba trabajando solo y necesitaba algo que pudiera mantener y mejorar sin volverme loco.\n\nComunicación en tiempo real: Cuando un repartidor marca un paquete como entregado en su celular, el administrador ve el cambio instantáneamente en su pantalla. Cuando el administrador envía un mensaje, le llega al repartidor de inmediato. No hay que estar preguntando \"¿ya llegó?\", simplemente llega.\n\nReportes automatizados: El sistema anterior requería que alguien tomara los datos y manualmente los pasara a Excel. Yo automaticé ese proceso completamente. El sistema toma la información, la procesa, y genera reportes profesionales con un solo clic — con colores, totales, gráficas, todo listo para imprimir.\n\nConstruí tres piezas que funcionan como una sola:\n1. El cerebro (servidor) — Procesa toda la lógica, guarda la información, genera reportes\n2. El panel de control (web) — Donde el administrador ve todo y toma decisiones\n3. La herramienta de campo (app móvil) — Lo que usa el repartidor en la calle",
            en: "The main decision: a unified system instead of many separate pieces. I chose to build a single robust system because I was working alone and needed something I could maintain and improve without going crazy.\n\nReal-time communication: When a driver marks a package as delivered on their phone, the administrator sees the change instantly on their screen. When the administrator sends a message, it reaches the driver immediately. No need to keep asking \"did it arrive?\", it just arrives.\n\nAutomated reports: The previous system required someone to take the data and manually transfer it to Excel. I automated that process completely. The system takes the information, processes it, and generates professional reports with a single click — with colors, totals, charts, all ready to print.\n\nI built three pieces that work as one:\n1. The brain (server) — Processes all logic, stores information, generates reports\n2. The control panel (web) — Where the administrator sees everything and makes decisions\n3. The field tool (mobile app) — What the driver uses on the street",
          },
          images: ["mendiola-platform/tracking.png"],
        },
        {
          title: { es: "Desafíos y soluciones", en: "Challenges & solutions" },
          content: {
            es: "El reto de mostrar mucha información sin abrumar: Una empresa de logística maneja cientos de datos. Mi solución fue usar códigos de colores consistentes:\n🟡 Amarillo = Pendiente\n🔵 Azul = En camino\n🟢 Verde = Entregado\n🔴 Rojo = Problema\n\nAsí, aunque tengas 200 pedidos en pantalla, puedes escanear visualmente y saber el estado general en segundos.\n\nEl mapa de la bodega: La empresa tiene un almacén con más de 80 rutas diferentes. Creé un plano interactivo donde puedes arrastrar y soltar las rutas, ver qué repartidor tiene asignada cada zona, y encontrar cualquier ruta con un buscador instantáneo.\n\nLa app del repartidor en condiciones reales: Un repartidor usa su celular bajo el sol, con una mano, mientras sostiene un paquete con la otra. Diseñé la app con botones grandes, colores de alto contraste, y la menor cantidad de pasos posible. También resolví qué pasa cuando no hay internet: la app guarda la información localmente y la sincroniza cuando vuelve la conexión.",
            en: "The challenge of showing a lot of information without overwhelming: A logistics company handles hundreds of data points. My solution was to use consistent color codes:\n🟡 Yellow = Pending\n🔵 Blue = On the way\n🟢 Green = Delivered\n🔴 Red = Problem\n\nSo even with 200 orders on screen, you can visually scan and know the general status in seconds.\n\nThe warehouse map: The company has a warehouse with over 80 different routes. I created an interactive floor plan where you can drag and drop routes, see which driver is assigned to each zone, and find any route with instant search.\n\nThe driver app in real conditions: A driver uses their phone under the sun, with one hand, while holding a package with the other. I designed the app with large buttons, high contrast colors, and the fewest steps possible. I also solved what happens when there's no internet: the app saves information locally and syncs when connection returns.",
          },
          images: ["mendiola-platform/shipments.png", "mendiola-platform/details.png"],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "Lo que el sistema hace hoy:\n\n• Importación automática: El administrador sube el Excel y el sistema automáticamente genera todos los pedidos, los asigna a repartidores, y crea los reportes de concentrado.\n\n• Rastreo en vivo: En un mapa se puede ver exactamente dónde está cada repartidor, cuántos paquetes ha entregado, y cuántos le faltan.\n\n• Evidencia de entrega: Cada paquete tiene foto, nombre de quién recibió, ubicación GPS exacta, y hora. No más \"creo que se lo di a un vecino\".\n\n• Comunicación integrada: Chat directo entre administrador y repartidores, sin necesidad de WhatsApp externo.\n\n• Reportes instantáneos: Con un clic se genera un reporte profesional en Excel listo para enviar a gerencia.\n\nEl resultado de diseño que más me enorgullece: Logré que un sistema de logística — algo que típicamente es gris, denso y difícil de usar — se sintiera moderno y agradable. La gente que lo usa no siente que está \"trabajando en un sistema\", siente que está usando una herramienta que le facilita la vida.",
            en: "What the system does today:\n\n• Automatic import: The administrator uploads the Excel and the system automatically generates all orders, assigns them to drivers, and creates summary reports.\n\n• Live tracking: On a map you can see exactly where each driver is, how many packages they've delivered, and how many are left.\n\n• Delivery evidence: Each package has a photo, name of who received it, exact GPS location, and time. No more \"I think I gave it to a neighbor\".\n\n• Integrated communication: Direct chat between administrator and drivers, no need for external WhatsApp.\n\n• Instant reports: With one click a professional Excel report is generated ready to send to management.\n\nThe design result I'm most proud of: I made a logistics system — something that's typically gray, dense and hard to use — feel modern and pleasant. The people who use it don't feel like they're \"working in a system\", they feel like they're using a tool that makes their life easier.",
          },
          images: ["mendiola-platform/analytics.png"],
        },
      ],
    },
    {
      id: "belle",
      name: "Belle Pielle",
      hasVideo: true,
      period: { es: "May 2026 - Presente", en: "May 2026 - Present" },
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
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "Daniela, la cosmetóloga, manejaba todo su negocio en hojas de Excel: citas, clientes, servicios, horarios... Todo manual. Esto le generaba varios dolores de cabeza:\n\n• Perdía tiempo organizando citas por teléfono y anotándolas a mano\n• No tenía presencia online profesional para atraer nuevos clientes\n• Los clientes no podían ver sus servicios, precios ni disponibilidad fácilmente\n• El marketing era difícil porque no tenía dónde mostrar sus certificaciones, casos de éxito o promociones\n\nBelle Pielle resuelve todo esto en un solo lugar: una página web profesional donde los clientes pueden ver los servicios, agendar citas directamente y contactar por WhatsApp. Daniela ahora tiene un panel donde ve todas sus citas del día, gestiona sus horarios y promociones sin tocar Excel.",
            en: "Daniela, the cosmetologist, managed her entire business in Excel sheets: appointments, clients, services, schedules... All manual. This caused her several headaches:\n\n• She wasted time organizing appointments by phone and writing them down by hand\n• She had no professional online presence to attract new clients\n• Clients couldn't easily see her services, prices or availability\n• Marketing was difficult because she had nowhere to showcase her certifications, success cases or promotions\n\nBelle Pielle solves all this in one place: a professional website where clients can see services, book appointments directly and contact via WhatsApp. Daniela now has a panel where she sees all her day's appointments, manages her schedules and promotions without touching Excel.",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de diseño", en: "My design process" },
          content: {
            es: "Empecé entendiendo el negocio y sus necesidades. Identifiqué dos usuarios principales:\n\nPara los clientes:\n• Necesitan ver qué servicios ofrece, con precios claros\n• Quieren agendar cita sin tener que llamar\n• Les importa ver resultados reales (fotos antes/después)\n• Quieren contacto directo si tienen dudas\n\nPara Daniela (administradora):\n• Necesita ver sus citas del día de un vistazo\n• Quiere poder bloquear días de vacaciones\n• Necesita agregar o modificar sus servicios\n• Quiere promocionar ofertas especiales\n\nCon esto diseñé dos experiencias separadas: la página pública (elegante y profesional) y el panel de administración (simple y funcional).\n\nEl estilo visual lo elegí pensando en su marca: colores rosas y crema que transmiten calidez y feminidad, tipografías elegantes, y un diseño limpio que se ve bien tanto en celular como en computadora.",
            en: "I started by understanding the business and its needs. I identified two main users:\n\nFor clients:\n• They need to see what services she offers, with clear prices\n• They want to book without having to call\n• They care about seeing real results (before/after photos)\n• They want direct contact if they have questions\n\nFor Daniela (administrator):\n• She needs to see her day's appointments at a glance\n• She wants to be able to block vacation days\n• She needs to add or modify her services\n• She wants to promote special offers\n\nWith this I designed two separate experiences: the public page (elegant and professional) and the admin panel (simple and functional).\n\nI chose the visual style thinking about her brand: pink and cream colors that convey warmth and femininity, elegant typography, and a clean design that looks good on both phone and computer.",
          },
          images: ["daniweb/dani1.png", "daniweb/dani2.png"],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "Necesitaba algo que cumpliera con tres requisitos:\n\n1. Rápido de desarrollar — Es un proyecto para una persona, no una empresa grande\n2. Fácil de mantener — Daniela no es técnica, así que todo debe funcionar solo\n3. Económico — Sin servidores costosos ni mantenimiento complicado\n\nPor eso elegí:\n\n• React para la interfaz — Me permite crear componentes reutilizables. Diseñé un botón una vez y lo uso en toda la aplicación\n• Firebase para los datos — Guarda las citas, los tratamientos y la información de clientes en la nube. No necesito mantener un servidor\n• Google Calendar para sincronización — Las citas se sincronizan automáticamente con el calendario de Daniela\n\nEsta combinación me permite tener una aplicación profesional que funciona 24/7, se puede instalar en el celular como si fuera una app, y no requiere mantenimiento técnico constante.",
            en: "I needed something that met three requirements:\n\n1. Fast to develop — It's a project for one person, not a large company\n2. Easy to maintain — Daniela is not technical, so everything must work on its own\n3. Affordable — No expensive servers or complicated maintenance\n\nThat's why I chose:\n\n• React for the interface — Allows me to create reusable components. I designed a button once and use it throughout the application\n• Firebase for data — Stores appointments, treatments and client information in the cloud. No need to maintain a server\n• Google Calendar for sync — Appointments automatically sync with Daniela's calendar\n\nThis combination allows me to have a professional application that works 24/7, can be installed on the phone like an app, and doesn't require constant technical maintenance.",
          },
          images: [],
        },
        {
          title: { es: "Desafíos y soluciones", en: "Challenges & solutions" },
          content: {
            es: "El sistema de horarios fue lo más complejo. Daniela no trabaja horario corrido: atiende en la mañana, descansa, y vuelve en la tarde. Además tiene días donde solo trabaja medio día. Tuve que diseñar un sistema flexible donde ella puede:\n\n• Configurar múltiples bloques de horario por día (9am-1pm y 4pm-8pm, por ejemplo)\n• Bloquear días específicos para vacaciones o compromisos personales\n• Ajustar la duración de cada cita según el tratamiento\n\nOtro reto fue proteger contra reservas falsas. Puse un límite: máximo 5 reservas por hora desde el mismo dispositivo. Así evitamos que alguien llene la agenda con citas falsas.\n\nTambién tuve que pensar en la experiencia móvil. La mayoría de sus clientes agendan desde el celular, así que el sistema de reservas tenía que ser súper intuitivo en pantallas pequeñas. Lo dividí en 3 pasos simples: elegir servicio → elegir fecha y hora → confirmar datos.",
            en: "The schedule system was the most complex. Daniela doesn't work continuous hours: she works in the morning, rests, and returns in the afternoon. Plus she has days where she only works half a day. I had to design a flexible system where she can:\n\n• Configure multiple time blocks per day (9am-1pm and 4pm-8pm, for example)\n• Block specific days for vacation or personal commitments\n• Adjust the duration of each appointment based on the treatment\n\nAnother challenge was protecting against fake bookings. I set a limit: maximum 5 bookings per hour from the same device. This prevents someone from filling the calendar with fake appointments.\n\nI also had to think about the mobile experience. Most of her clients book from their phone, so the booking system had to be super intuitive on small screens. I divided it into 3 simple steps: choose service → choose date and time → confirm details.",
          },
          images: ["daniweb/dani3.png"],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "Una plataforma completa y funcional:\n\n• Página profesional que muestra todos los servicios con fotos, precios y duración\n• Sistema de reservas donde los clientes agendan en menos de 2 minutos\n• Galería de casos de éxito con fotos antes/después que generan confianza\n• Sección de certificaciones que validan su experiencia profesional\n• Contacto directo por WhatsApp con un solo clic\n• Calendario sincronizado para que Daniela vea todo en Google Calendar\n• Panel de administración donde gestiona citas, horarios, servicios y promociones\n• Funciona como app — Los clientes pueden \"instalarla\" en su celular\n\nEl resultado es que Daniela pasó de manejar su negocio en Excel a tener un sistema profesional que trabaja por ella: los clientes agendan solos, ella recibe las notificaciones, y todo queda organizado automáticamente.",
            en: "A complete and functional platform:\n\n• Professional page showing all services with photos, prices and duration\n• Booking system where clients schedule in less than 2 minutes\n• Success case gallery with before/after photos that build trust\n• Certifications section that validates her professional experience\n• Direct WhatsApp contact with a single click\n• Synced calendar so Daniela sees everything in Google Calendar\n• Admin panel where she manages appointments, schedules, services and promotions\n• Works as an app — Clients can \"install\" it on their phone\n\nThe result is that Daniela went from managing her business in Excel to having a professional system that works for her: clients book on their own, she receives notifications, and everything is organized automatically.",
          },
          images: ["daniweb/dani4.png"],
        },
      ],
    },
    {
      id: "sigapi",
      name: "SIGAPI",
      hasVideo: true,
      period: { es: "Dic 2025 - Abr 2026", en: "Dec 2025 - Apr 2026" },
      roleTag: { es: "Tech Lead", en: "Tech Lead" },
      tagline: {
        es: "Plataforma de diagramas de flujo para el corporativo del SAT, reemplazando un sistema legacy.",
        en: "Flowchart platform for SAT's corporate offices, replacing a legacy system.",
      },
      lead: {
        es: "Plataforma de diagramas de flujo y procesos para el corporativo del SAT. Lideré el desarrollo frontend con React Flow, creando un editor moderno con nodos personalizados que reemplaza al sistema legacy anterior.",
        en: "Flowchart and process diagram platform for SAT's corporate offices. I led frontend development with React Flow, creating a modern editor with custom nodes that replaces the previous legacy system.",
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
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "El SAT (Servicio de Administración Tributaria) necesitaba modernizar su herramienta para crear diagramas de flujo y procesos. Los empleados del corporativo usaban un sistema antiguo que ya no cumplía con las necesidades actuales: era visualmente obsoleto, difícil de usar, y no se integraba bien con sus otras herramientas.\n\nMi rol fue liderar el desarrollo del frontend de SIGAPI, una plataforma completamente nueva que reemplazaría al sistema legacy. El objetivo era crear una experiencia moderna donde los empleados pudieran diseñar diagramas de procesos de manera intuitiva y visualmente atractiva.",
            en: "The SAT (Mexico's Tax Administration Service) needed to modernize their tool for creating flowcharts and process diagrams. Corporate employees were using an outdated system that no longer met current needs: it was visually obsolete, difficult to use, and didn't integrate well with their other tools.\n\nMy role was to lead the frontend development of SIGAPI, a completely new platform that would replace the legacy system. The goal was to create a modern experience where employees could design process diagrams intuitively and visually appealing.",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de desarrollo", en: "My development process" },
          content: {
            es: "Empecé por entender cómo funcionaba el sistema anterior y qué necesitaban realmente los usuarios. A partir de ahí:\n\n1. Diseñé la arquitectura del nuevo sistema de diagramas, definiendo cómo se estructurarían los componentes y cómo fluiría la información.\n\n2. Elegí React Flow como base tecnológica — una librería especializada en crear editores de diagramas interactivos. Me volví experto en ella de forma autodidacta.\n\n3. Construí toda la pantalla de edición/creación de diagramas, donde los usuarios pueden arrastrar elementos, conectarlos, y personalizar cada nodo.\n\n4. Trabajé de cerca con el equipo de backend (Spring Boot) y base de datos (PostgreSQL) para asegurar que todo se guardara y sincronizara correctamente.",
            en: "I started by understanding how the previous system worked and what users really needed. From there:\n\n1. I designed the architecture of the new diagram system, defining how components would be structured and how information would flow.\n\n2. I chose React Flow as the technological base — a library specialized in creating interactive diagram editors. I became an expert in it through self-teaching.\n\n3. I built the entire diagram editing/creation screen, where users can drag elements, connect them, and customize each node.\n\n4. I worked closely with the backend team (Spring Boot) and database team (PostgreSQL) to ensure everything was saved and synced correctly.",
          },
          images: ["sigapi/sigapi-screenshot-1.png"],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "El proyecto requirió coordinar múltiples capas técnicas:\n\n• Frontend (React + React Flow): Construí componentes personalizados que extendían las capacidades de React Flow. Cada tipo de nodo del diagrama tiene su propio diseño y comportamiento.\n\n• Backend (Spring Boot): Trabajé con el equipo de Java para diseñar los endpoints REST que procesan y almacenan los datos de los diagramas.\n\n• Base de datos (PostgreSQL): Colaboré en la migración de datos del sistema antiguo al nuevo, y en el diseño de nuevas tablas que soportaran tanto las necesidades del cliente como los requerimientos técnicos de React Flow.\n\nEl resultado es una plataforma que se integra con el ecosistema existente de SIGAPI (planes de trabajo, documentación, etc.) mientras ofrece una experiencia de edición de diagramas completamente renovada.",
            en: "The project required coordinating multiple technical layers:\n\n• Frontend (React + React Flow): I built custom components that extended React Flow's capabilities. Each diagram node type has its own design and behavior.\n\n• Backend (Spring Boot): I worked with the Java team to design REST endpoints that process and store diagram data.\n\n• Database (PostgreSQL): I collaborated on migrating data from the old system to the new one, and on designing new tables that would support both client needs and React Flow's technical requirements.\n\nThe result is a platform that integrates with SIGAPI's existing ecosystem (work plans, documentation, etc.) while offering a completely renewed diagram editing experience.",
          },
          images: [],
        },
        {
          title: { es: "Desafíos y soluciones", en: "Challenges & solutions" },
          content: {
            es: "Aprender una tecnología nueva bajo presión: Nunca había usado React Flow antes. Tuve que aprenderlo de forma autodidacta mientras desarrollaba el proyecto, entendiendo sus APIs, limitaciones y mejores prácticas en tiempo récord.\n\nPersonalización profunda de componentes: Los nodos y conexiones por defecto de React Flow no cumplían con los requisitos visuales y funcionales del SAT. Tuve que sumergirme en el código fuente de la librería para entender cómo customizar cada elemento.\n\nMigración de datos legacy: La base de datos antigua tenía una estructura muy diferente. Trabajé con el equipo de BDD para mapear los datos antiguos a la nueva estructura sin perder información crítica.\n\nIntegración con un equipo multidisciplinario: Coordiné constantemente con desarrolladores de backend, DBAs, y el equipo de UX para asegurar que todas las piezas encajaran correctamente.",
            en: "Learning a new technology under pressure: I had never used React Flow before. I had to teach myself while developing the project, understanding its APIs, limitations and best practices in record time.\n\nDeep component customization: React Flow's default nodes and connections didn't meet SAT's visual and functional requirements. I had to dive into the library's source code to understand how to customize each element.\n\nLegacy data migration: The old database had a very different structure. I worked with the DB team to map old data to the new structure without losing critical information.\n\nIntegration with a multidisciplinary team: I constantly coordinated with backend developers, DBAs, and the UX team to ensure all pieces fit together correctly.",
          },
          images: ["sigapi/sigapi-screenshot-2.jpg"],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "• Plataforma completamente nueva que reemplaza un sistema legacy obsoleto\n• Editor de diagramas moderno, intuitivo y visualmente atractivo\n• Nodos y conexiones personalizados que cumplen con los estándares del SAT\n• Integración completa con el ecosistema existente de SIGAPI\n• Migración exitosa de datos históricos sin pérdida de información\n• Sistema escalable construido con tecnologías modernas (React, Spring Boot, PostgreSQL)\n\nEste proyecto demostró mi capacidad para aprender tecnologías nuevas rápidamente, liderar el desarrollo frontend de un proyecto complejo, y colaborar efectivamente con equipos de backend y base de datos en un entorno enterprise.",
            en: "• Completely new platform replacing an obsolete legacy system\n• Modern, intuitive and visually appealing diagram editor\n• Custom nodes and connections that meet SAT standards\n• Full integration with the existing SIGAPI ecosystem\n• Successful migration of historical data without information loss\n• Scalable system built with modern technologies (React, Spring Boot, PostgreSQL)\n\nThis project demonstrated my ability to learn new technologies quickly, lead frontend development of a complex project, and collaborate effectively with backend and database teams in an enterprise environment.",
          },
          images: [],
        },
      ],
    },
    {
      id: "blundy",
      name: "Blundy",
      hasVideo: true,
      period: { es: "Jul 2025 - Nov 2025", en: "Jul 2025 - Nov 2025" },
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
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "Mi clienta tenía una idea de negocio: convertir dibujos de niños en peluches personalizados. Pero necesitaba una plataforma digital para poder operar.\n\nEl problema que resolví fue crear un sistema e-commerce completo que le permitiera recibir pedidos, procesar pagos, y gestionar la producción de cada peluche. Antes de esto, ella no tenía forma de escalar su negocio más allá de pedidos por WhatsApp o redes sociales.\n\nLa solución: Una plataforma donde sus clientes pueden subir el dibujo, personalizarlo, pagar de forma segura, y recibir actualizaciones automáticas hasta que el peluche llega a su casa.",
            en: "My client had a business idea: turning children's drawings into personalized stuffed toys. But she needed a digital platform to operate.\n\nThe problem I solved was creating a complete e-commerce system that would allow her to receive orders, process payments, and manage the production of each plush toy. Before this, she had no way to scale her business beyond orders via WhatsApp or social media.\n\nThe solution: A platform where her customers can upload a drawing, customize it, pay securely, and receive automatic updates until the plush toy arrives at their home.",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de diseño", en: "My design process" },
          content: {
            es: "Empecé pensando en el usuario final: un papá o mamá con poco tiempo que quiere hacer algo especial para su hijo.\n\nLo que hice:\n\n1. Simplifiqué al máximo el proceso de compra — El usuario sube una foto, agrega algunos detalles, y paga. Sin pasos innecesarios, sin obligar a crear cuenta.\n\n2. Diseñé un sistema de aprobación — Antes de cobrar, un diseñador revisa el dibujo para asegurar que se puede fabricar correctamente. Esto protege tanto al cliente como al negocio.\n\n3. Automaticé las notificaciones — El cliente recibe emails automáticos en cada etapa: confirmación de compra, inicio de producción, y cuando su pedido va en camino con número de rastreo.\n\n4. Creé roles distintos — Clientes, diseñadores y administradores tienen acceso a diferentes partes de la plataforma según lo que necesitan hacer.",
            en: "I started thinking about the end user: a busy mom or dad who wants to do something special for their child.\n\nWhat I did:\n\n1. Simplified the purchase process as much as possible — The user uploads a photo, adds some details, and pays. No unnecessary steps, no forcing account creation.\n\n2. Designed an approval system — Before charging, a designer reviews the drawing to ensure it can be manufactured correctly. This protects both the customer and the business.\n\n3. Automated notifications — The customer receives automatic emails at each stage: purchase confirmation, production start, and when their order is on its way with tracking number.\n\n4. Created distinct roles — Customers, designers and administrators have access to different parts of the platform based on what they need to do.",
          },
          images: ["blundy/blundy2.png"],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "Elegí serverless por tres razones principales:\n\nCostos controlados — Al ser un proyecto que empieza, no tenía sentido pagar un servidor corriendo 24/7. Con serverless solo pago cuando alguien realmente usa la plataforma.\n\nEscalabilidad automática — Si mañana Blundy se vuelve viral y llegan miles de usuarios, la infraestructura escala sola sin que yo tenga que hacer nada.\n\nMenos mantenimiento — No tengo que preocuparme por actualizar servidores, parches de seguridad, o caídas a las 3am. Me puedo enfocar en mejorar el producto.",
            en: "I chose serverless for three main reasons:\n\nControlled costs — Being a starting project, it didn't make sense to pay for a server running 24/7. With serverless I only pay when someone actually uses the platform.\n\nAutomatic scalability — If tomorrow Blundy goes viral and thousands of users arrive, the infrastructure scales on its own without me having to do anything.\n\nLess maintenance — I don't have to worry about updating servers, security patches, or crashes at 3am. I can focus on improving the product.",
          },
          images: [],
        },
        {
          title: { es: "Desafíos y soluciones", en: "Challenges & solutions" },
          content: {
            es: "El dilema del cobro: ¿Cómo cobrar a un cliente si no sabemos si su dibujo se puede fabricar? Implementé un sistema donde el pago se \"reserva\" pero no se cobra hasta que un diseñador aprueba el dibujo. Si el dibujo no es viable, el cliente no pierde su dinero.\n\nCompras sin fricción: Obligar a crear cuenta ahuyenta compradores. Permití compras como invitado. El cliente puede rastrear su pedido con un código único sin necesidad de crear cuenta.\n\nFotos pesadas desde celulares: Los usuarios subían fotos de 10MB que tardaban mucho y fallaban. Antes de subir, la foto se comprime automáticamente en el navegador sin perder calidad visible. El usuario ni lo nota.\n\nEmails que sí lleguen: Los emails de confirmación son críticos. Si no llegan, el cliente piensa que su compra falló. Configuré dos proveedores de email. Si uno falla, automáticamente usa el otro como respaldo.",
            en: "The charging dilemma: How to charge a customer if we don't know if their drawing can be manufactured? I implemented a system where payment is \"reserved\" but not charged until a designer approves the drawing. If the drawing isn't viable, the customer doesn't lose their money.\n\nFrictionless purchases: Forcing account creation scares away buyers. I allowed guest purchases. The customer can track their order with a unique code without needing to create an account.\n\nHeavy photos from phones: Users were uploading 10MB photos that took too long and failed. Before uploading, the photo is automatically compressed in the browser without losing visible quality. The user doesn't even notice.\n\nEmails that actually arrive: Confirmation emails are critical. If they don't arrive, the customer thinks their purchase failed. I configured two email providers. If one fails, it automatically uses the other as backup.",
          },
          images: ["blundy/blundy3.png"],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "• Plataforma funcionando en producción — Blundy está en línea y procesando pedidos reales\n• Proceso de compra en menos de 5 minutos — Desde que subes el dibujo hasta que pagas\n• Cero costos fijos de servidor — Solo pago por uso real\n• Automatización completa — Desde que el cliente paga hasta que recibe su tracking, todo sucede sin intervención manual\n• Sistema flexible — Puedo agregar nuevos tipos de productos o cambiar precios sin tocar código",
            en: "• Platform running in production — Blundy is online and processing real orders\n• Purchase process in less than 5 minutes — From uploading the drawing to paying\n• Zero fixed server costs — Only pay for actual use\n• Complete automation — From when the customer pays until they receive their tracking, everything happens without manual intervention\n• Flexible system — I can add new product types or change prices without touching code",
          },
          images: [],
        },
      ],
    },
    {
      id: "dnhub",
      name: "DnHub",
      hasVideo: true,
      period: { es: "2026", en: "2026" },
      roleTag: { es: "Full-Stack Dev", en: "Full-Stack Dev" },
      tagline: {
        es: "Landing page para estudio de marketing especializado en marcas de K-Beauty.",
        en: "Landing page for a growth & marketing studio specializing in K-Beauty brands.",
      },
      lead: {
        es: "Sitio web moderno para DnHub, un estudio de marketing que ayuda a marcas de K-Beauty a expandirse globalmente. Diseño bold con tipografía impactante, sistema de design tokens, soporte bilingüe (inglés/coreano) y animaciones de scroll reveal.",
        en: "Modern website for DnHub, a marketing studio helping K-Beauty brands expand globally. Bold design with impactful typography, design token system, bilingual support (English/Korean) and scroll reveal animations.",
      },
      highlights: {
        es: [
          "Soporte bilingüe completo (inglés y coreano) con persistencia de preferencia",
          "Sistema de design tokens con paleta de colores y tipografía consistente",
          "Animaciones scroll-reveal con IntersectionObserver",
          "Diseño responsive optimizado para móviles y desktop",
          "Componentes reutilizables: Ribbon marquee, ServiceCard, TeamCard, FAQ accordion",
        ],
        en: [
          "Full bilingual support (English and Korean) with preference persistence",
          "Design token system with consistent color palette and typography",
          "Scroll-reveal animations with IntersectionObserver",
          "Responsive design optimized for mobile and desktop",
          "Reusable components: Ribbon marquee, ServiceCard, TeamCard, FAQ accordion",
        ],
      },
      tech: ["React 19", "Vite", "CSS", "JavaScript"],
      link: null,
      media: {
        hero: "dnhub/dnhub-hero.png",
        video: "dnhub/dnhub-demo.mov",
        gallery: ["dnhub/dnhub-hero.png"],
      },
      caseSections: [
        {
          title: { es: "El problema", en: "The problem" },
          content: {
            es: "DnHub necesitaba una presencia digital que reflejara su enfoque innovador en el marketing de K-Beauty. Querían un sitio que:\n\n• Comunicara su propuesta de valor de forma clara e impactante\n• Funcionara perfectamente tanto en inglés como en coreano para sus clientes internacionales\n• Transmitiera profesionalismo con un diseño moderno y memorable\n• Mostrara sus servicios, equipo y casos de éxito de manera atractiva",
            en: "DnHub needed a digital presence that reflected their innovative approach to K-Beauty marketing. They wanted a site that:\n\n• Communicated their value proposition clearly and impactfully\n• Worked perfectly in both English and Korean for their international clients\n• Conveyed professionalism with a modern, memorable design\n• Showcased their services, team and success cases attractively",
          },
          images: [],
        },
        {
          title: { es: "Mi proceso de diseño", en: "My design process" },
          content: {
            es: "Diseñé un sistema visual bold y distintivo:\n\n• Tipografía impactante — Uso de Anton y Archivo Black para headlines que capturan atención instantáneamente\n• Paleta vibrante — Colores acentos en amarillo, púrpura y naranja que destacan sobre fondos neutros\n• Estética \"sticker\" — Bordes sólidos de 2px y sombras offset que crean profundidad visual\n• Componentes modulares — Cada sección tiene su propio componente con estilos encapsulados\n\nPara el soporte bilingüe, implementé un sistema de internacionalización con Context API que permite cambiar de idioma instantáneamente, con fuentes coreanas (Black Han Sans, Noto Sans KR) que se aplican automáticamente.",
            en: "I designed a bold and distinctive visual system:\n\n• Impactful typography — Using Anton and Archivo Black for headlines that capture attention instantly\n• Vibrant palette — Accent colors in yellow, purple and orange that stand out against neutral backgrounds\n• \"Sticker\" aesthetic — Solid 2px borders and offset shadows that create visual depth\n• Modular components — Each section has its own component with encapsulated styles\n\nFor bilingual support, I implemented an internationalization system with Context API that allows instant language switching, with Korean fonts (Black Han Sans, Noto Sans KR) that are applied automatically.",
          },
          images: [],
        },
        {
          title: { es: "Arquitectura técnica", en: "Technical architecture" },
          content: {
            es: "Elegí una arquitectura simple pero robusta:\n\n• React 19 — Para componentes declarativos y manejo de estado eficiente\n• Vite — Build tool moderno con HMR ultra-rápido para desarrollo ágil\n• CSS puro con design tokens — Variables CSS centralizadas para colores, tipografía y espaciado, sin dependencias adicionales\n• Arquitectura por secciones — Cada parte de la landing (Hero, Services, Team, FAQ) es un componente independiente\n\nEsta combinación permite un sitio rápido, fácil de mantener y listo para deploy estático en cualquier CDN.",
            en: "I chose a simple but robust architecture:\n\n• React 19 — For declarative components and efficient state management\n• Vite — Modern build tool with ultra-fast HMR for agile development\n• Pure CSS with design tokens — Centralized CSS variables for colors, typography and spacing, no additional dependencies\n• Section-based architecture — Each part of the landing (Hero, Services, Team, FAQ) is an independent component\n\nThis combination allows for a fast site, easy to maintain and ready for static deployment on any CDN.",
          },
          images: [],
        },
        {
          title: { es: "Resultado e impacto", en: "Result & impact" },
          content: {
            es: "• Landing page completa con 8+ secciones: Hero, Statement, Stats, Services, Portfolio, Mascot, Team, FAQ y CTA\n• Experiencia bilingüe fluida con cambio de idioma instantáneo\n• Animaciones scroll-reveal que hacen la navegación más dinámica\n• Diseño 100% responsive que se ve impecable en cualquier dispositivo\n• Carga rápida gracias a la arquitectura ligera sin frameworks CSS pesados\n• Código limpio y organizado, listo para futuras expansiones",
            en: "• Complete landing page with 8+ sections: Hero, Statement, Stats, Services, Portfolio, Mascot, Team, FAQ and CTA\n• Fluid bilingual experience with instant language switching\n• Scroll-reveal animations that make navigation more dynamic\n• 100% responsive design that looks impeccable on any device\n• Fast loading thanks to lightweight architecture without heavy CSS frameworks\n• Clean and organized code, ready for future expansions",
          },
          images: [],
        },
      ],
    },
  ],
};

export default PORT;
