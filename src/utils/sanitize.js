/**
 * Security utilities for XSS prevention
 */

const ALLOWED_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];

/**
 * Validates and sanitizes URLs
 * Blocks javascript:, data:, and other potentially unsafe protocols
 */
export function sanitizeUrl(url) {
  if (!url) return '';

  try {
    const parsed = new URL(url, window.location.origin);
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) {
      console.warn(`Blocked potentially unsafe URL: ${url}`);
      return '';
    }
    return url;
  } catch {
    // If URL parsing fails, check if it's a valid relative path
    if (url.startsWith('/') || url.startsWith('#')) {
      return url;
    }
    return '';
  }
}

/**
 * Returns safe link props for external links
 * Adds target="_blank" and rel="noopener noreferrer" for external URLs
 */
export function getSafeLinkProps(url) {
  const sanitized = sanitizeUrl(url);

  if (!sanitized) {
    return { href: '#', safe: false };
  }

  const isExternal = sanitized.startsWith('http://') ||
                     sanitized.startsWith('https://') ||
                     sanitized.startsWith('mailto:') ||
                     sanitized.startsWith('tel:');

  const isNewTab = isExternal &&
                   !sanitized.startsWith('mailto:') &&
                   !sanitized.startsWith('tel:');

  return {
    href: sanitized,
    safe: true,
    ...(isNewTab && {
      target: '_blank',
      rel: 'noopener noreferrer'
    })
  };
}

/**
 * Validates project IDs to prevent injection
 */
export function isValidProjectId(id) {
  if (!id || typeof id !== 'string') return false;
  return /^[a-z0-9-]+$/i.test(id) && id.length <= 50;
}

/**
 * Escapes HTML entities for safe text rendering
 * Note: React already escapes JSX, but useful for edge cases
 */
export function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
