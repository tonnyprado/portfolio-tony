import { useState, useEffect, useCallback, useRef } from 'react';
import { useTransition } from '../context/TransitionContext';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Components
import IntroLoader from '../components/v2/IntroLoader';
import TestHero from '../components/v2/TestHero';
import Statement from '../components/v2/Statement';
import RecentWork from '../components/v2/RecentWork';
import AboutSection from '../components/v2/AboutSection';
import Services from '../components/Services';
import HowIWork from '../components/v2/HowIWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { GetInTouchButton } from '../components/common/GetInTouchButton';

function TestPage() {
  const { startTransition } = useTransition();
  const { lang, setLang, t } = useTranslation();

  // Intro state
  const hasSeenIntro = sessionStorage.getItem('home_intro_shown') === 'true';
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);
  const [contentVisible, setContentVisible] = useState(hasSeenIntro);

  // Get in touch button visibility
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to top when returning from other pages
  useScrollToTop(hasSeenIntro ? [] : [false]);

  // Scroll reveal animations
  useScrollReveal({ enabled: contentVisible });

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('home_intro_shown', 'true');
    setShowIntro(false);
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  const handleNavigate = useCallback((route, displayName, color) => {
    startTransition(route, displayName, color);
  }, [startTransition]);

  // Get in touch button observer
  useEffect(() => {
    if (!contentVisible) return;

    const heroEl = heroRef.current;
    const contactEl = contactRef.current;
    if (!heroEl || !contactEl) return;

    let heroVisible = true;
    let contactVisible = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroEl) heroVisible = entry.isIntersecting;
        else if (entry.target === contactEl) contactVisible = entry.isIntersecting;
      });
      setShowGetInTouch(!heroVisible && !contactVisible);
    }, { threshold: 0.1 });

    observer.observe(heroEl);
    observer.observe(contactEl);
    return () => observer.disconnect();
  }, [contentVisible]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="v2-page">
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      <GetInTouchButton visible={showGetInTouch} onClick={scrollToContact} />

      <div className={`v2-page-content ${contentVisible ? 'visible' : ''}`}>
        <div ref={heroRef}>
          <TestHero lang={lang} setLang={setLang} onNavigate={handleNavigate} />
        </div>

        <main className="v2-main-content">
          <Statement lang={lang} />
          <RecentWork lang={lang} />
          <AboutSection lang={lang} />
          <Services lang={lang} />
          <HowIWork lang={lang} />
        </main>

        <div className="v2-contact-sticky" ref={contactRef} id="contact">
          <Contact lang={lang} />
          <Footer lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default TestPage;
