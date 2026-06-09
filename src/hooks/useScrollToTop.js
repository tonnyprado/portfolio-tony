import { useEffect } from 'react';

/**
 * Scrolls to top of page on mount
 * @param {Array} deps - optional dependency array
 */
export function useScrollToTop(deps = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, deps);
}

export default useScrollToTop;
