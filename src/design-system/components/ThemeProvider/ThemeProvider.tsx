'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Wraps next-themes ThemeProvider with project defaults.
 * - attribute="data-theme" matches the CSS selector in tokens.css
 * - defaultTheme="system" respects OS preference on first visit
 * - enableSystem allows automatic OS-level switching
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
