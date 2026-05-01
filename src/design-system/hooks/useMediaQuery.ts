'use client';

import { useSyncExternalStore } from 'react';

function subscribe(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', callback);
    return () => mql.removeEventListener('change', callback);
  };
}

/**
 * Returns true when the given CSS media query matches.
 * SSR-safe: returns `defaultValue` (false) on the server.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 640px)');
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  return useSyncExternalStore(
    subscribe(query),
    () => window.matchMedia(query).matches,
    () => defaultValue,
  );
}

// Convenience hooks for common breakpoints (matches Tailwind defaults)
export const useIsMobile = () => useMediaQuery('(max-width: 639px)');
export const useIsTablet = () => useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');
