/**
 * Theme constants - mirrors CSS variables
 * Used for JS-based styling when needed
 */
export const COLORS = {
  navy: {
    900: '#243040',
    800: '#1e2a38',
    700: '#2d3c4c',
    600: '#3a4d5e',
    tint: '#91BDD9'
  },
  accent: '#E07A5F',
  accentDeep: '#C95D4F',
  mauve: '#BFA8A3',
  mauveDeep: '#A68380',
  blueLight: '#B6DBF2',
  blueMid: '#91BDD9',
  bg: '#F5F9FC',
  bg2: '#E8F1F7',
  surface: '#FFFFFF',
  ink: '#243040',
  ink2: '#4a5a6a',
  ink3: '#7a8a9a',
  black: '#1a2430'
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
