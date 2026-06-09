import { useState, useEffect } from 'react';

function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState('visible'); // visible -> fadeOut -> done
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = ['HOLA', 'HELLO', '안녕', 'HI'];

  useEffect(() => {
    // Cycle through greetings
    const greetingTimer = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % greetings.length);
    }, 500);

    // Start fade out after cycling
    const timer1 = setTimeout(() => {
      setPhase('fadeOut');
      clearInterval(greetingTimer);
    }, 1800);

    // After fade animation, call onComplete
    const timer2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2200);

    return () => {
      clearInterval(greetingTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  const currentGreeting = greetings[greetingIndex];

  return (
    <div className={`intro-loader ${phase === 'fadeOut' ? 'fade-out' : ''}`}>
      {/* Main greeting text */}
      <span className="intro-loader-text" key={greetingIndex}>
        {currentGreeting.split('').map((letter, i) => (
          <span key={i} className="intro-letter" style={{ animationDelay: `${i * 0.03}s` }}>
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}

export default IntroLoader;
