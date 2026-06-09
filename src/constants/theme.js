/**
 * Theme constants - mirrors CSS variables
 * Used for JS-based styling when needed
 */
export const COLORS = {
  navy: {
    900: '#00102A',
    800: '#001634',
    700: '#001D44',
    600: '#0A2A55',
    tint: '#5B6E8C'
  },
  accent: '#E8B400',
  accentDeep: '#C2920A',
  bg: '#F4F1E9',
  bg2: '#ECE8DD',
  surface: '#FFFFFF',
  ink: '#15140F',
  ink2: '#56524A',
  ink3: '#8C887D',
  black: '#141310'
};

export const FONTS = {
  display: '"Space Grotesk", "Hanken Grotesk", sans-serif',
  body: '"Hanken Grotesk", system-ui, sans-serif',
  mono: '"Space Mono", ui-monospace, monospace'
};

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1320
};

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  reveal: 400
};

export const EASING = {
  default: 'cubic-bezier(0.22, 1, 0.36, 1)',
  soft: 'cubic-bezier(0.4, 0, 0.1, 1)'
};
