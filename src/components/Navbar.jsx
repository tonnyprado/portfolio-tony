import { useState, useEffect } from 'react';
import { PORT } from '../data';

function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = (o) => o[lang];
  const navLinks = PORT.ui.nav[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="logo">Tony<span className="dot">.</span></a>

          <div className="nav-links">
            {navLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>

          <div className="nav-right">
            <div className="lang-toggle">
              <button
                className={lang === 'es' ? 'active' : ''}
                onClick={() => setLang('es')}
              >
                ES
              </button>
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <a href="#contact" className="btn btn-dark">
              {t(PORT.ui.letsTalk)}
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <button className="nav-burger" onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mm-close" onClick={closeMenu}>CLOSE</button>
        {navLinks.map(([id, label], i) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            <span className="mn">{String(i + 1).padStart(2, '0')}</span>{label}
          </a>
        ))}
        <div className="mobile-lang">
          <button
            className={lang === 'es' ? 'active' : ''}
            onClick={() => { setLang('es'); closeMenu(); }}
          >
            ES
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => { setLang('en'); closeMenu(); }}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
