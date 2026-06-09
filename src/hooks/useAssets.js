import { useCallback } from 'react';
import { getAsset, getAssets, isVideoPath, isImagePath, getMediaType } from '../utils/assets';

/**
 * Hook wrapper for asset utilities
 * Provides memoized asset loading functions
 */
export function useAssets() {
  const get = useCallback((path) => getAsset(path), []);
  const getMultiple = useCallback((paths) => getAssets(paths), []);
  const isVideo = useCallback((path) => isVideoPath(path), []);
  const isImage = useCallback((path) => isImagePath(path), []);
  const mediaType = useCallback((path) => getMediaType(path), []);

  return {
    getAsset: get,
    getAssets: getMultiple,
    isVideo,
    isImage,
    getMediaType: mediaType
  };
}

export default useAssets;
