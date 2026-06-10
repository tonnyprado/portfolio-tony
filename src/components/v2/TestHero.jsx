import { useState, useEffect } from 'react';
import tonyPhoto from '../../assets/tony-photo.jpg';

function TestHero({ lang, setLang, onNavigate }) {
  const [stickersReady, setStickersReady] = useState(false);

  useEffect(() => {
    // After splash animations complete, enable wobble
    const timer = setTimeout(() => {
      setStickersReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navStickers = [
    { text: lang === 'es' ? 'TRABAJO' : 'WORK', route: '/portfolio', displayName: lang === 'es' ? 'TRABAJO' : 'WORK', color: '#91BDD9', rotate: -8, top: '10%', left: '5%' },
    { text: lang === 'es' ? 'SOBRE MÍ' : 'ABOUT', route: '/about', displayName: lang === 'es' ? 'SOBRE MÍ' : 'ABOUT', color: '#BFA8A3', rotate: 6, top: '45%', left: '-10%' },
    { text: lang === 'es' ? 'CONTÁCTAME' : 'CONTACT ME', route: '#contact', displayName: lang === 'es' ? 'CONTACTO' : 'CONTACT', color: '#E07A5F', rotate: -5, top: '80%', left: '0%' },
    { text: lang === 'es' ? 'SERVICIOS' : 'SERVICES', route: '#services', displayName: lang === 'es' ? 'SERVICIOS' : 'SERVICES', color: '#A68380', rotate: 8, top: '25%', right: '-8%' },
  ];

  const handleStickerClick = (e, sticker) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sticker.route, sticker.displayName, sticker.color);
    }
  };

  const skills = ['REACT', 'SPRING BOOT', 'MICROSERVICES', 'CLOUD', 'AI / RAG', 'POSTGRESQL', 'FULL-STACK', 'JAVA', 'AWS'];

  return (
    <section className="v2-hero-new splash-reveal">
      {/* Background Skills Marquee */}
      <div className="v2-hero-bg-skills">
        <div className="v2-skill-row row-1">
          <div className="v2-skill-track">
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="v2-hero-bg-skill">{skill}</span>
            ))}
          </div>
        </div>
        <div className="v2-skill-row row-2">
          <div className="v2-skill-track reverse">
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="v2-hero-bg-skill">{skill}</span>
            ))}
          </div>
        </div>
        <div className="v2-skill-row row-3">
          <div className="v2-skill-track">
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="v2-hero-bg-skill">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="v2-hero-header">
        <div className="v2-hero-lang-corner">
          <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      {/* Main content - 3 columns */}
      <div className="v2-hero-content-center">
        {/* Left - Title */}
        <div className="v2-hero-left">
          <h2 className="v2-hero-role">
            FULL-STACK<br/>ENGINEER
          </h2>
          {/* Location */}
          <div className="v2-hero-location">
            <div className="v2-hero-location-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <div className="v2-hero-location-pulse"></div>
            </div>
            <span>{lang === 'es' ? 'Ciudad de México' : 'Mexico City'}</span>
          </div>
        </div>

        {/* Center - Photo with stickers */}
        <div className="v2-hero-center">
          <div className="v2-hero-photo-wrap">
            <img src={tonyPhoto} alt="Marco Prado" className="v2-hero-photo" />
            {/* Years badge */}
            <div className="v2-hero-badge">
              <span className="yr">5+</span>
              {lang === 'es' ? 'años creando' : 'years building'}
            </div>
            {/* Navigation Stickers */}
            {navStickers.map((sticker, i) => (
              <a
                key={i}
                href={sticker.route}
                onClick={(e) => handleStickerClick(e, sticker)}
                className={`v2-hero-sticker ${stickersReady ? 'animated' : ''}`}
                style={{
                  '--sticker-color': sticker.color,
                  '--rotate': `${sticker.rotate}deg`,
                  '--wobble-delay': `${i * 0.2}s`,
                  top: sticker.top,
                  left: sticker.left,
                  right: sticker.right,
                }}
              >
                {sticker.text}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Name */}
        <div className="v2-hero-right">
          <h1 className="v2-hero-name">
            <span className="highlight">Marco</span><br/>
            Prado
          </h1>
        </div>
      </div>
    </section>
  );
}

export default TestHero;
