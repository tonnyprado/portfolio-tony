import { useState, useEffect, useRef } from 'react';
import { useTransition } from '../context/TransitionContext';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Components
import AboutIntro from '../components/v2/AboutIntro';
import Experience from '../components/Experience';
import SkillsCarousel from '../components/v2/SkillsCarousel';
import Education from '../components/Education';
import Footer from '../components/Footer';
import { BackButton } from '../components/common/BackButton';
import { GetInTouchButton } from '../components/common/GetInTouchButton';

// Assets
import tonyPhoto from '../assets/IMG_0656.png';

const INTRO_TEXT = {
  es: "Estoy aquí para ayudarte a construir tu próxima gran idea.",
  en: "I'm here to help you build your next big idea."
};

function AboutPage() {
  const { startSvgDrawTransition } = useTransition();
  const { lang, t } = useTranslation();
  const [heroVisible, setHeroVisible] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const heroRef = useRef(null);

  useScrollToTop();
  useScrollReveal({ threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  // Hero text animation observer
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
          } else {
            setHeroVisible(false);
            setShowScrollHint(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Show scroll hint after animation
  useEffect(() => {
    if (heroVisible) {
      const timer = setTimeout(() => setShowScrollHint(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [heroVisible]);

  const handleBackClick = (e) => {
    e.preventDefault();
    startSvgDrawTransition('/');
  };

  const handleGetInTouch = () => {
    startSvgDrawTransition('/', 'contact');
  };

  const handleNavigateToPortfolio = () => {
    startSvgDrawTransition('/portfolio');
  };

  const introText = INTRO_TEXT[lang];
  const words = introText.split(' ');

  return (
    <div className="v2-page v2-about-page">
      <GetInTouchButton visible onClick={handleGetInTouch} />
      <BackButton onClick={handleBackClick} />

      <section className="about-hero-section" ref={heroRef}>
        <div className="about-hero-content">
          <div className={`about-hero-photo-wrap ${heroVisible ? 'visible' : ''}`}>
            <img
              src={tonyPhoto}
              alt="Marco Antonio Prado Garcia"
              className="about-hero-photo"
            />
          </div>
          <h1 className={`about-hero-text ${heroVisible ? 'visible' : ''}`}>
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="about-hero-word">
                {word.split('').map((letter, letterIndex) => {
                  const totalIndex = words.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0) + letterIndex;
                  return (
                    <span
                      key={letterIndex}
                      className="about-hero-letter"
                      style={{ animationDelay: `${totalIndex * 0.03}s` }}
                    >
                      {letter}
                    </span>
                  );
                })}
                {wordIndex < words.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </h1>
        </div>

        <div className={`about-scroll-hint ${showScrollHint ? 'visible' : ''}`}>
          <span>{t({ es: 'Scroll', en: 'Scroll down' })}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <main className="about-main-content">
        <AboutIntro lang={lang} />
        <Experience lang={lang} onNavigateToPortfolio={handleNavigateToPortfolio} />
        <SkillsCarousel lang={lang} />
        <Education lang={lang} />
        <Footer lang={lang} />
      </main>
    </div>
  );
}

export default AboutPage;
