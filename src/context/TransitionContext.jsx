import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [transition, setTransition] = useState({
    active: false,
    name: '',
    color: '#000',
    type: 'wipe', // 'wipe', 'slide', or 'svg-draw'
    direction: 'right'
  });
  const [phase, setPhase] = useState('idle');
  const pendingRouteRef = useRef(null);

  // Original wipe transition (for main navigation)
  const startTransition = useCallback((route, displayName, color) => {
    pendingRouteRef.current = route;
    setTransition({ active: true, name: displayName, color, type: 'wipe', direction: 'right' });
    setPhase('entering');

    setTimeout(() => setPhase('showing'), 500);

    setTimeout(() => {
      const route = pendingRouteRef.current;
      if (route) {
        if (route.startsWith('#')) {
          const element = document.getElementById(route.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'instant' });
          }
        } else {
          navigate(route);
        }
      }
    }, 700);

    setTimeout(() => setPhase('exiting'), 900);

    setTimeout(() => {
      setPhase('idle');
      setTransition(prev => ({ ...prev, active: false }));
      pendingRouteRef.current = null;
    }, 1400);
  }, [navigate]);

  // Slide transition (for project navigation)
  const startSlideTransition = useCallback((route, direction = 'right') => {
    pendingRouteRef.current = route;
    setTransition({ active: true, name: '', color: '#1a2430', type: 'slide', direction });
    setPhase('entering');

    setTimeout(() => {
      const route = pendingRouteRef.current;
      if (route) {
        navigate(route);
      }
    }, 400);

    setTimeout(() => setPhase('exiting'), 500);

    setTimeout(() => {
      setPhase('idle');
      setTransition(prev => ({ ...prev, active: false }));
      pendingRouteRef.current = null;
    }, 900);
  }, [navigate]);

  // SVG Draw transition (for back to home) - marker scribble
  const startSvgDrawTransition = useCallback((route, scrollTarget = null) => {
    pendingRouteRef.current = route;
    setTransition({ active: true, name: '', color: '#E07A5F', type: 'svg-draw', direction: 'right' });
    setPhase('entering');

    // Timeline:
    // 0ms: Scribble starts drawing
    // 350ms: Scribble complete, navigate
    // 400ms: start fading out
    // 700ms: done

    setTimeout(() => {
      const route = pendingRouteRef.current;
      if (route) {
        navigate(route);
        if (scrollTarget) {
          setTimeout(() => {
            const element = document.getElementById(scrollTarget);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, 350);

    setTimeout(() => setPhase('exiting'), 400);

    setTimeout(() => {
      setPhase('idle');
      setTransition(prev => ({ ...prev, active: false }));
      pendingRouteRef.current = null;
    }, 700);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ transition, phase, startTransition, startSlideTransition, startSvgDrawTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within TransitionProvider');
  }
  return context;
}
