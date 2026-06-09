import { useEffect, useState, useRef } from 'react';

/**
 * Page Transition Component - Wipe Effect
 * Shows a colored screen with section name that slides in/out
 */
function PageTransition({ isActive, sectionName, color, onComplete }) {
  const [phase, setPhase] = useState('idle'); // idle | entering | showing | exiting | done
  const onCompleteRef = useRef(onComplete);
  const hasStarted = useRef(false);

  // Keep onComplete ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Handle transition phases
  useEffect(() => {
    if (isActive && !hasStarted.current) {
      hasStarted.current = true;
      setPhase('entering');

      // Timeline: enter (0-500ms) -> show (500-900ms) -> exit (900-1400ms)
      const showTimer = setTimeout(() => setPhase('showing'), 500);
      const exitTimer = setTimeout(() => setPhase('exiting'), 900);
      const completeTimer = setTimeout(() => {
        setPhase('done');
        onCompleteRef.current?.();
      }, 1400);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }

    // Reset when deactivated
    if (!isActive && hasStarted.current) {
      hasStarted.current = false;
      setPhase('idle');
    }
  }, [isActive]);

  if (phase === 'idle') return null;

  return (
    <div
      className={`page-transition ${phase}`}
      style={{ '--transition-color': color }}
    >
      <div className="page-transition-screen">
        <span className="page-transition-name">{sectionName}</span>
      </div>
    </div>
  );
}

export default PageTransition;
