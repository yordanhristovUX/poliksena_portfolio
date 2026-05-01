'use client';

import { useCallback, useSyncExternalStore } from 'react';

function getSnapshot<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue;
  try {
    const item = window.localStorage.getItem(key);
    return item !== null ? (JSON.parse(item) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

function subscribe(key: string) {
  return (callback: () => void) => {
    const handler = (e: StorageEvent) => {
      if (e.key === key) callback();
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  };
}

/**
 * Persists state to localStorage, synced across tabs via the storage event.
 * SSR-safe: returns initialValue on the server.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'system');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const storedValue = useSyncExternalStore(
    subscribe(key),
    () => getSnapshot(key, initialValue),
    () => initialValue,
  );

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const next =
          typeof value === 'function'
            ? (value as (prev: T) => T)(getSnapshot(key, initialValue))
            : value;
        window.localStorage.setItem(key, JSON.stringify(next));
        // Dispatch storage event so other tabs and useSyncExternalStore pick it up
        window.dispatchEvent(new StorageEvent('storage', { key }));
      } catch {
        // localStorage may be unavailable (private browsing, quota exceeded)
      }
    },
    [key, initialValue],
  );

  return [storedValue, setValue];
}
