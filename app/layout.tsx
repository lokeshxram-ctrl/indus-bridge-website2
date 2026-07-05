import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://indusbridge.com'),
  title: 'IndUS Bridge | Source from India with Confidence',
  description:
    'IndUS Bridge helps U.S. businesses source products from verified Indian manufacturers. We manage supplier sourcing, factory audits, quality inspections, and end-to-end logistics.',
  keywords: [
    'India sourcing',
    'manufacturing',
    'supplier verification',
    'quality inspection',
    'factory audits',
    'logistics',
    'B2B',
    'import from India',
  ],
  authors: [{ name: 'IndUS Bridge' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://indusbridge.com',
    siteName: 'IndUS Bridge',
    title: 'IndUS Bridge | Source from India with Confidence',
    description:
      'Verified manufacturers, factory audits, quality inspections, and end-to-end logistics—all through one trusted partner.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndUS Bridge | Source from India with Confidence',
    description:
      'Verified manufacturers, factory audits, quality inspections, and end-to-end logistics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
