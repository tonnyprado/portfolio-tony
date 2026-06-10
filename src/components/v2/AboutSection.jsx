import { PORT } from '../../data';
import { useTransition } from '../../context/TransitionContext';
import tonyPhoto from '../../assets/IMG_0661.png';

const LABELS = {
  eyebrow: { es: 'Sobre mí', en: 'About me' },
  moreAbout: { es: 'Más sobre mí, mi experiencia y credenciales', en: 'More about me, my experience & credentials' }
};

function AboutSection({ lang }) {
  const { startTransition } = useTransition();
  const h = PORT.ui.hero;
  const t = (o) => o[lang];

  return (
    <section className="v2-about-section reveal" id="about">
      <div className="container">
        <div className="v2-about-grid">
          <div className="v2-about-photo-col">
            <div className="v2-about-oval">
              <img src={tonyPhoto} alt="Marco Antonio Prado García" />
            </div>
          </div>

          <div className="v2-about-text-col">
            <p className="v2-about-description">
              {t(h.desc)}
            </p>
            <ul className="v2-about-checks">
              {t(h.checks).map((check, i) => (
                <li key={i}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="v2-about-btn-wrap">
          <button
            className="btn btn-about-me"
            onClick={() => startTransition('/about', lang === 'es' ? 'SOBRE MÍ' : 'ABOUT', '#BFA8A3')}
          >
            {t(LABELS.moreAbout)}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
