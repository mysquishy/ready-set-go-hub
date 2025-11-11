import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ready Set Go - Ship Production Apps 10x Faster',
  description: 'Production-ready boilerplates for mobile and web. Choose your stack and start shipping.',
  openGraph: {
    title: 'Ready Set Go - Ship Production Apps 10x Faster',
    description: 'Production-ready boilerplates for mobile and web',
    url: 'https://readysetgosaas.com',
    siteName: 'Ready Set Go',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready Set Go - Ship Production Apps 10x Faster',
    description: 'Production-ready boilerplates for mobile and web',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
