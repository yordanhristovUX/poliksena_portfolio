import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Archivo_Narrow, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/design-system/components/ThemeProvider';
import { Header } from '@/design-system/layouts/Header';
import { Footer } from '@/design-system/layouts/Footer';
import './globals.css';

// ---------------------------------------------------------------------------
// Fonts — match tokens.json typography.fontFamily values
// Bricolage Grotesque: display/headings
// Inter: body copy and UI
// Archivo Narrow: labels, tags, captions
// JetBrains Mono: code
// ---------------------------------------------------------------------------

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    default: 'Poliksena Christova — Portfolio',
    template: '%s | Poliksena Christova',
  },
  description: 'UI designer and fine artist. Portfolio 2026.',
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
      className={`${bricolageGrotesque.variable} ${inter.variable} ${archivoNarrow.variable} ${jetbrainsMono.variable}`}
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
