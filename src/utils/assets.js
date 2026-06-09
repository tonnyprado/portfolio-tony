/**
 * Centralized asset loading utilities
 * Uses Vite's import.meta.glob for efficient asset bundling
 */

// Singleton: load all assets once
const assetModules = import.meta.glob(
  '../assets/**/*.{png,jpg,jpeg,mp4,mov,webp,svg}',
  { eager: true, import: 'default' }
);

/**
 * Get asset URL by relative path
 * @param {string} path - relative path from assets folder (e.g., 'marnee/hero.png')
 * @returns {string|null} - asset URL or null if not found
 */
export function getAsset(path) {
  if (!path) return null;
  const key = `../assets/${path}`;
  return assetModules[key] || null;
}

/**
 * Get multiple assets by paths
 * @param {string[]} paths - array of relative paths
 * @returns {string[]} - array of asset URLs (filtered for existing)
 */
export function getAssets(paths) {
  if (!paths || !Array.isArray(paths)) return [];
  return paths.map(getAsset).filter(Boolean);
}

/**
 * Check if path is a video file
 */
export function isVideoPath(path) {
  if (!path) return false;
  return /\.(mp4|mov|webm)$/i.test(path);
}

/**
 * Check if path is an image file
 */
export function isImagePath(path) {
  if (!path) return false;
  return /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(path);
}

/**
 * Get media type from path
 */
export function getMediaType(path) {
  if (isVideoPath(path)) return 'video';
  if (isImagePath(path)) return 'image';
  return 'unknown';
}
