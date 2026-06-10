import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORT } from '../../data';

// Local images
import jiraLogo from '../../assets/jiralogo.png';
import junitLogo from '../../assets/junit-logo.jpeg';
import mockitoLogo from '../../assets/mockito.png';
import postmanLogo from '../../assets/postmanlogo.webp';
import prometheusLogo from '../../assets/prometheuslogo.png';

const SKILL_ICONS = {
  // Backend & Core
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Spring Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
  'Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',

  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',

  // Databases
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',

  // Cloud & DevOps
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  'Red Hat OpenShift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'GitLab CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',

  // Tools & Observability
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Kibana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg',
  'Swagger/OpenAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
  'SonarQube': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg',
  'Jira': jiraLogo,
  'Postman': postmanLogo,
  'Prometheus': prometheusLogo,

  // Testing
  'JUnit': junitLogo,
  'Mockito': mockitoLogo,
};

// Card colors matching the palette
const CARD_COLORS = [
  { bg: '#91BDD9', text: '#1a1a1a' },  // Blue
  { bg: '#81B29A', text: '#1a1a1a' },  // Green
  { bg: '#F2CC8F', text: '#1a1a1a' },  // Yellow
  { bg: '#E07A5F', text: '#fff' },     // Coral
  { bg: '#BFA8A3', text: '#1a1a1a' },  // Pink/Beige
  { bg: '#A68380', text: '#fff' },     // Brown
];

function SkillsCarousel({ lang }) {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const skills = PORT.skills;
  const t = (o) => o[lang];

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  // Generate random positions for stickers explosion - closer to card
  const generateStickerPositions = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const distance = 120 + Math.random() * 80;
      positions.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotation: (Math.random() - 0.5) * 20,
      });
    }
    return positions;
  };

  return (
    <section className="skills-carousel-section" id="skills">
      <div className="skills-carousel-header">
        <h2 className="skills-carousel-title reveal-slide">
          {lang === 'es' ? 'Skills & Stack' : 'Skills & Stack'}
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="skills-cards-container">
        <div className="skills-cards-stack">
          {skills.map((category, index) => {
            const color = CARD_COLORS[index % CARD_COLORS.length];
            const isActive = activeCard === index;
            const isHovered = hoveredCard === index;
            const baseRotation = (index - (skills.length - 1) / 2) * 10;
            const baseOffsetX = (index - (skills.length - 1) / 2) * 100;
            const stickerPositions = generateStickerPositions(category.items.length);

            // When a card is hovered, spread the others out more
            let finalOffsetX = baseOffsetX;
            let finalRotation = baseRotation;

            if (hoveredCard !== null && !isHovered && !isActive) {
              const spreadMultiplier = 1.8;
              finalOffsetX = baseOffsetX * spreadMultiplier;
              finalRotation = baseRotation * 1.3;
            }

            return (
              <motion.div
                key={index}
                className={`skills-card ${isActive ? 'active' : ''}`}
                style={{
                  '--card-bg': color.bg,
                  '--card-text': color.text,
                  zIndex: isActive ? 100 : isHovered ? 50 : skills.length - index,
                }}
                initial={false}
                animate={{
                  x: isActive ? 0 : finalOffsetX,
                  y: isHovered && !isActive ? -30 : 0,
                  rotate: isActive ? 0 : finalRotation,
                  scale: isHovered && !isActive ? 1.05 : 1,
                }}
                onHoverStart={() => !isActive && setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={() => handleCardClick(index)}
              >
                <div className="skills-card-content">
                  <span className="skills-card-name">{t(category.cat)}</span>
                </div>

                {/* Stickers explosion */}
                <AnimatePresence>
                  {isActive && category.items.map((skill, skillIndex) => {
                    const hasIcon = SKILL_ICONS[skill];
                    const pos = stickerPositions[skillIndex];

                    return (
                      <motion.div
                        key={skill}
                        className="skills-card-sticker"
                        initial={{
                          x: 0,
                          y: 0,
                          scale: 0,
                          opacity: 0,
                          rotate: 0
                        }}
                        animate={{
                          x: pos.x,
                          y: pos.y,
                          scale: 1,
                          opacity: 1,
                          rotate: pos.rotation
                        }}
                        exit={{
                          x: 0,
                          y: 0,
                          scale: 0,
                          opacity: 0,
                          rotate: 0
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 20,
                          delay: skillIndex * 0.03,
                        }}
                      >
                        {hasIcon ? (
                          <img src={hasIcon} alt={skill} />
                        ) : (
                          <span className="sticker-text">{skill}</span>
                        )}
                        <span className="sticker-label">{skill}</span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Click outside to close */}
        <AnimatePresence>
          {activeCard !== null && (
            <motion.div
              className="skills-cards-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Hint */}
      <p className="skills-hint reveal-slide">
        {lang === 'es' ? 'Click en una carta para ver las tecnologías' : 'Click a card to see technologies'}
      </p>

      {/* Languages Marquee */}
      <div className="skills-languages-marquee reveal-slide">
        <h3 className="skills-languages-title">LANGUAGES</h3>
        <div className="skills-languages-list">
          <span className="skills-language-item">
            <span className="language-name">ENGLISH</span>
            <span className="language-level">ADVANCED</span>
          </span>
          <span className="skills-language-item">
            <span className="language-name">SPANISH</span>
            <span className="language-level">NATIVE</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;
