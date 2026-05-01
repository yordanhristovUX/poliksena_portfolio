import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Lora } from 'next/font/google';
import { ThemeProvider } from '@/design-system/components/ThemeProvider';
import { Header } from '@/design-system/layouts/Header';
import { Footer } from '@/design-system/layouts/Footer';
import './globals.css';

// ---------------------------------------------------------------------------
// Fonts — loaded via next/font, injected as CSS variables
// Font families match tokens.json typography.fontFamily values
// ---------------------------------------------------------------------------

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    default: 'Your Name — Portfolio',
    template: '%s | Your Name',
  },
  description: 'Designer and developer. Building things on the web.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Name',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Suppress hydration warning — next-themes sets data-theme after mount
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-fg antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
