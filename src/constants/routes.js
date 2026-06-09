/**
 * Application routes
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  PROJECT: (id) => `/project/${id}`
};

export const NAV_SECTIONS = {
  SERVICES: '#services',
  CONTACT: '#contact'
};

/**
 * Navigation items with their routes and transition colors
 */
export const NAV_CONFIG = [
  { key: 'about', route: '/about', color: '#00102A' },
  { key: 'services', route: '#services', color: '#0A2A55' },
  { key: 'projects', route: '/portfolio', color: '#001D44' },
  { key: 'contact', route: '#contact', color: '#E8B400' }
];
