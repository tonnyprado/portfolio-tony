import { PORT } from '../data';
import tonyPhoto from '../assets/tony-photo.jpg';

function Hero({ lang }) {
  const h = PORT.ui.hero;
  const t = (o) => o[lang];

  const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-hi">
            {t(h.hi)}
          </p>
          <h1 className="hero-title">
            Marco<br />
            <span className="mark-block">Prado</span>
          </h1>
          <div className="hero-role-row">
            <span className="ln"></span>
            <span className="hero-role">{t(h.role)}</span>
          </div>
          <p className="hero-desc">{t(h.desc)}</p>
          <ul className="hero-checks">
            {t(h.checks).map((check, i) => (
              <li key={i}>
                <span className="tick"><CheckIcon /></span>
                {check}
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-dark">
              {t(h.viewWork)}
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t(h.contact)}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-blob"></div>
            <img
              src={tonyPhoto}
              alt="Marco Antonio Prado García"
              className="hero-photo"
            />
            <div className="hero-badge">
              <span className="yr">5+</span>
              {t(h.badge)[0]}<br />{t(h.badge)[1]}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scrollcue">
        <span>{t(h.scroll)}</span>
        <div className="bar"></div>
      </div>
    </section>
  );
}

export default Hero;
