import { useState } from 'react';

const STAGES = [
  {
    id: 1,
    title: { es: 'DESCUBRIMIENTO', en: 'DISCOVERY' },
    description: {
      es: 'Comenzamos con una conversación profunda para entender tu visión, objetivos de negocio y los problemas que necesitas resolver. Analizo tu mercado, usuarios y competencia para definir el alcance del proyecto.',
      en: 'We start with a deep conversation to understand your vision, business goals, and the problems you need to solve. I analyze your market, users, and competition to define the project scope.'
    }
  },
  {
    id: 2,
    title: { es: 'ESTRATEGIA', en: 'STRATEGY' },
    description: {
      es: 'Defino la arquitectura técnica, selecciono las tecnologías óptimas y creo un roadmap claro. Establezco milestones medibles y un plan de ejecución que maximiza el valor entregado en cada fase.',
      en: 'I define the technical architecture, select optimal technologies, and create a clear roadmap. I establish measurable milestones and an execution plan that maximizes value delivered in each phase.'
    }
  },
  {
    id: 3,
    title: { es: 'DISEÑO', en: 'DESIGN' },
    description: {
      es: 'Construyo la interfaz completa con código real para que puedas verla e interactuar con ella. Uso datos de prueba para simular el funcionamiento y validar cada detalle antes de avanzar. Así puedes aprobar exactamente lo que verás en producción.',
      en: 'I build the complete interface with real code so you can see it and interact with it. I use test data to simulate functionality and validate every detail before moving forward. This way you approve exactly what you\'ll see in production.'
    }
  },
  {
    id: 4,
    title: { es: 'DESARROLLO', en: 'DEVELOPMENT' },
    description: {
      es: 'Con el diseño aprobado, conecto la funcionalidad real: bases de datos, APIs, autenticación y toda la lógica de negocio. Desarrollo frontend y backend con código limpio y escalable, manteniendo comunicación constante sobre el progreso.',
      en: 'With the design approved, I connect the real functionality: databases, APIs, authentication, and all business logic. I develop frontend and backend with clean, scalable code, maintaining constant communication about progress.'
    }
  },
  {
    id: 5,
    title: { es: 'LANZAMIENTO', en: 'LAUNCH' },
    description: {
      es: 'Despliego tu producto en producción con configuración optimizada para rendimiento y seguridad. Proporciono documentación completa, capacitación y soporte post-lanzamiento para asegurar una transición exitosa.',
      en: 'I deploy your product to production with optimized configuration for performance and security. I provide complete documentation, training, and post-launch support to ensure a successful transition.'
    }
  }
];

function HowIWork({ lang }) {
  const [activeStage, setActiveStage] = useState(null);
  const t = (obj) => obj[lang];

  const handleStageClick = (id) => {
    setActiveStage(activeStage === id ? null : id);
  };

  return (
    <section className="how-i-work">
      <div className="container">
        <h2 className="how-i-work-title reveal">
          {lang === 'es' ? 'CÓMO TRABAJO' : 'HOW I WORK'}
        </h2>

        <div className="how-i-work-stages">
          {STAGES.map((stage, index) => (
            <div
              key={stage.id}
              className={`how-i-work-stage reveal ${activeStage === stage.id ? 'active' : ''}`}
              onClick={() => handleStageClick(stage.id)}
            >
              <div className="how-i-work-stage-header">
                <span className="how-i-work-stage-number">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <h3 className="how-i-work-stage-title">
                  {t(stage.title)}
                </h3>
                <div className="how-i-work-stage-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" className="how-i-work-plus" />
                  </svg>
                </div>
              </div>
              <div className="how-i-work-stage-content">
                <p>{t(stage.description)}</p>
              </div>
              <div className="how-i-work-stage-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
