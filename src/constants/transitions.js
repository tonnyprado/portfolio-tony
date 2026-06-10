/**
 * Transition timing constants
 * Centralizes all hardcoded timing values for page transitions
 */
export const TRANSITION_TIMINGS = {
  wipe: {
    showDelay: 500,
    navigateDelay: 700,
    exitDelay: 900,
    completeDelay: 1400
  },
  slide: {
    navigateDelay: 400,
    exitDelay: 500,
    completeDelay: 900
  },
  svgDraw: {
    navigateDelay: 350,
    exitDelay: 400,
    completeDelay: 700,
    scrollDelay: 100
  }
};

export const TRANSITION_TYPES = {
  WIPE: 'wipe',
  SLIDE: 'slide',
  SVG_DRAW: 'svg-draw'
};

export const DEFAULT_TRANSITION_COLOR = '#1a2430';
export const SLIDE_TRANSITION_COLOR = '#1a2430';
export const SVG_DRAW_COLOR = '#E07A5F';
