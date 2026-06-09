import { useEffect } from 'react';

/**
 * Intersection Observer hook for scroll reveal animations
 * @param {Object} options - configuration options
 */
export function useScrollReveal(options = {}) {
  const {
    selector = '.reveal, .splash-reveal',
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    activeClass = 'in',
    resetOnExit = true,
    enabled = true
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
          } else if (resetOnExit) {
            entry.target.classList.remove(activeClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, activeClass, resetOnExit, enabled]);
}

/**
 * Hook to track visibility of specific elements
 * @param {Object} refs - object with ref names as keys
 * @param {Object} options - observer options
 */
export function useElementVisibility(refs, options = {}) {
  const { threshold = 0.1 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.visibilityId;
          if (id && refs[id]?.setVisible) {
            refs[id].setVisible(entry.isIntersecting);
          }
        });
      },
      { threshold }
    );

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.visibilityId = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs, threshold]);
}

export default useScrollReveal;
