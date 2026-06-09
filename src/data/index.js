// Re-export original PORT for backwards compatibility during migration
export { PORT, default } from '../data.js';

// New modular exports
export { contact } from './contact';
export { skills } from './skills';
export { experience } from './experience';
export { education, certs } from './education';
