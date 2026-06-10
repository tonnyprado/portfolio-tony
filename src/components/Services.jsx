import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORT } from '../data';

// Icon imports for stickers
const TECH_ICONS = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Railway': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg',
};

// Card colors matching the design
const CARD_COLORS = [
  { bg: '#4A7C59', text: '#fff' },      // Green (Websites)
  { bg: '#91BDD9', text: '#1a1a1a' },   // Blue (Mobile)
  { bg: '#E07A5F', text: '#1a1a1a' },   // Orange (SaaS)
  { bg: '#8B4A5E', text: '#fff' },      // Burgundy (Cloud)
];

// Sticker positions for each card (relative to card)
const STICKER_POSITIONS = [
  { top: '-30px', left: '-20px', rotate: -15 },
  { top: '-35px', left: '60%', rotate: 12 },
  { top: '-30px', left: '50%', rotate: 5 },
  { top: '-35px', right: '-15px', rotate: -10 },
];

// Card layout positions - fan/cascade effect like the reference image
// Pattern: spread across container with staggered heights
const CARD_LAYOUT = [
  { x: -380, y: -50, rotate: -10, zIndex: 4 },  // Websites - far left, high
  { x: -130, y: 30, rotate: -4, zIndex: 3 },    // Mobile - left-center, lower
  { x: 130, y: 70, rotate: 5, zIndex: 2 },      // SaaS - right-center, lowest
  { x: 380, y: 0, rotate: 12, zIndex: 1 },      // Cloud - far right, mid
];

function Services({ lang }) {
  const s = PORT.ui.services;
  const t = (o) => o[lang];
  const [hoveredCard, setHoveredCard] = useState(null);

  // Service items with their bullet points based on description
  const serviceItems = s.items.map((item, index) => ({
    ...item,
    color: CARD_COLORS[index],
    // Convert description to bullet points
    bullets: t(item.desc).split('. ').filter(b => b.length > 0).map(b => b.replace(/\.$/, '')),
  }));

  return (
    <section className="services-cards-section" id="services">
      {/* Header */}
      <div className="services-cards-header">
        <h2 className="services-title reveal-slide">
          <span className="line1">{t(s.title)[0]}</span>
          <br />
          <span className="line2">{t(s.title)[1]}</span>
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="services-cards-container">
        <div className="services-cards-stack">
          {serviceItems.map((item, index) => {
            const isHovered = hoveredCard === index;
            const layout = CARD_LAYOUT[index];

            return (
              <motion.div
                key={index}
                className={`service-card ${isHovered ? 'hovered' : ''}`}
                style={{
                  '--card-bg': item.color.bg,
                  '--card-text': item.color.text,
                  zIndex: isHovered ? 50 : layout.zIndex,
                  willChange: 'transform',
                }}
                initial={false}
                animate={{
                  x: layout.x,
                  y: isHovered ? layout.y - 25 : layout.y,
                  rotate: isHovered ? 0 : layout.rotate,
                  scale: isHovered ? 1.05 : 1,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                transition={{
                  type: 'tween',
                  duration: 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Sticker */}
                <div
                  className="service-card-sticker"
                  style={{
                    ...STICKER_POSITIONS[index % STICKER_POSITIONS.length],
                    transform: `rotate(${STICKER_POSITIONS[index % STICKER_POSITIONS.length].rotate}deg)`,
                  }}
                >
                  <img src={TECH_ICONS[item.tags[0]]} alt={item.tags[0]} />
                </div>

                {/* Card Content */}
                <div className="service-card-content">
                  <h3 className="service-card-title">{t(item.title)}</h3>
                  <div className="service-card-divider"></div>
                  <ul className="service-card-list">
                    {item.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <span className="bullet">✦</span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

/* =============================================
   ORIGINAL CODE (COMMENTED FOR BACKUP)
   =============================================

import { useState } from 'react';
import { PORT } from '../data';

function Services({ lang }) {
  const s = PORT.ui.services;
  const t = (o) => o[lang];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section services splash-reveal" id="services">
      <div className="services-card">
        <div className="services-left">
          <h2 className="services-title reveal d2">
            <span className="line1">{t(s.title)[0]}</span><br />
            <span className="line2">{t(s.title)[1]}</span>
          </h2>
        </div>

        <div className="services-right reveal d3">
          {s.items.map((item, i) => (
            <div
              className={`service-item${openIndex === i ? ' open' : ''}`}
              key={i}
            >
              <button
                className="service-header"
                onClick={() => toggleItem(i)}
                aria-expanded={openIndex === i}
              >
                <span className="service-name">{t(item.title)}</span>
                <span className="service-toggle">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="service-content">
                <p>{t(item.desc)}</p>
                <div className="service-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

============================================= */
