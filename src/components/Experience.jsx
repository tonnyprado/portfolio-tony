import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORT } from '../data';

// Card colors for the stacked effect
const CARD_COLORS = [
  { bg: '#91BDD9', text: '#1a1a1a' },  // Blue
  { bg: '#E07A5F', text: '#fff' },     // Coral
];

function Experience({ lang, onNavigateToPortfolio }) {
  const x = PORT.ui.experience;
  const t = (o) => o[lang];
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onNavigateToPortfolio) {
      onNavigateToPortfolio();
    }
  };

  return (
    <section className="section experience-v2" id="experience">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title reveal-slide">{t(x.title)}</h2>
          <p className="lead reveal-slide" style={{ transitionDelay: '0.1s' }}>{t(x.lead)}</p>
        </div>

        <div className="xp-cards-vertical reveal-slide" style={{ transitionDelay: '0.2s' }}>
          {PORT.experience.map((exp, index) => {
            const color = CARD_COLORS[index % CARD_COLORS.length];
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                className={`xp-card-v ${isExpanded ? 'expanded' : ''}`}
                style={{
                  '--card-bg': color.bg,
                  '--card-text': color.text,
                }}
                initial={false}
                animate={{
                  scale: isExpanded ? 1.02 : 1,
                }}
                whileHover={{ scale: isExpanded ? 1.02 : 1.01, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={() => handleCardClick(index)}
              >
                <div className="xp-card-v-header">
                  <div className="xp-card-v-left">
                    <span className="xp-card-v-company">{exp.company}</span>
                    <h3 className="xp-card-v-role">{t(exp.role)}</h3>
                  </div>
                  <span className="xp-card-v-period">{t(exp.period)}</span>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="xp-card-v-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="xp-card-v-desc">
                        {t(exp.desc).map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                      <div className="xp-card-v-tags">
                        {exp.tech.map((tech) => (
                          <span className="xp-card-v-tag" key={tech}>{tech}</span>
                        ))}
                      </div>
                      {exp.link && (
                        <a href={exp.link} className="xp-card-v-link" onClick={handlePortfolioClick}>
                          {lang === 'es' ? 'Ver proyectos →' : 'View projects →'}
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <p className="xp-card-v-hint">
                    {lang === 'es' ? 'Click para ver detalles' : 'Click to see details'}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
