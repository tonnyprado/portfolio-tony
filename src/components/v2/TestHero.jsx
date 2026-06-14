import mePhoto from '../../assets/meee2.png';

function TestHero({ lang, setLang, onNavigate }) {

  const navLinks = [
    { text: lang === 'es' ? 'TRABAJO' : 'WORK', route: '/portfolio', displayName: lang === 'es' ? 'TRABAJO' : 'WORK', color: '#91BDD9' },
    { text: lang === 'es' ? 'SERVICIOS' : 'SERVICES', route: '#services', displayName: lang === 'es' ? 'SERVICIOS' : 'SERVICES', color: '#A68380' },
    { text: lang === 'es' ? 'SOBRE MÍ' : 'ABOUT', route: '/about', displayName: lang === 'es' ? 'SOBRE MÍ' : 'ABOUT', color: '#BFA8A3' },
    { text: lang === 'es' ? 'CONTÁCTAME' : 'CONTACT ME', route: '#contact', displayName: lang === 'es' ? 'CONTACTO' : 'CONTACT', color: '#E07A5F' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link.route, link.displayName, link.color);
    }
  };

  return (
    <section className="hero-dark">
      {/* Language Switcher */}
      <div className="hero-dark-lang">
        <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>

      {/* Main Content - Split Layout */}
      <div className="hero-dark-split">
        {/* Photo - center */}
        <div className="hero-dark-photo-wrapper">
          <img src={mePhoto} alt="Marco Prado" className="hero-dark-photo" />
        </div>

        {/* Name row: MARCO [photo] PRADO */}
        <div className="hero-dark-text-row hero-dark-name-row">
          <span className="hero-dark-text-left">MARCO</span>
          <span className="hero-dark-text-right">PRADO</span>
        </div>

        {/* Role row: FULLSTACK [photo] ENGINEER */}
        <div className="hero-dark-text-row hero-dark-role-row">
          <span className="hero-dark-text-left">FULLSTACK</span>
          <span className="hero-dark-text-right">ENGINEER</span>
        </div>
      </div>

      {/* Info */}
      <div className="hero-dark-info">
        <div className="hero-dark-info-item">
          <span className="hero-dark-info-label">{lang === 'es' ? 'Ubicado en' : 'Based in'}</span>
          <span className="hero-dark-info-value">Mexico City</span>
        </div>
        <div className="hero-dark-info-item">
          <span className="hero-dark-info-label">{lang === 'es' ? 'Experiencia' : 'Experience'}</span>
          <span className="hero-dark-info-value">5+ {lang === 'es' ? 'años' : 'years'}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hero-dark-nav">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.route}
            onClick={(e) => handleNavClick(e, link)}
            className="hero-dark-nav-link"
            style={{ backgroundColor: link.color }}
          >
            {link.text}
          </a>
        ))}
      </nav>

    </section>
  );
}

export default TestHero;
