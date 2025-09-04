import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskLinkr - Connect Locally, Earn Globally',
  description: 'A community-driven platform on Base for finding and completing local tasks',
  openGraph: {
    title: 'TaskLinkr - Connect Locally, Earn Globally',
    description: 'Find and complete local tasks, build your reputation, earn globally',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
