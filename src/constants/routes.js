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
  { key: 'about', route: '/about', color: '#BFA8A3' },
  { key: 'services', route: '#services', color: '#A68380' },
  { key: 'projects', route: '/portfolio', color: '#91BDD9' },
  { key: 'contact', route: '#contact', color: '#E07A5F' }
];
