import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });
const BASE_URL = 'https://ecommerce-next-rafaels-projects-62f31870.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | DevStore',
    default: 'DevStore — E-commerce Moderno'
  },
  description: 'E-commerce com pagamentos Stripe, SSR Next.js e design responsivo. Loja virtual com catálogo de produtos e checkout integrado.',
  keywords: ['e-commerce', 'next.js', 'stripe', 'typescript', 'tailwind', 'devstore'],
  authors: [{ name: 'Rafael Zendron' }],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'DevStore — E-commerce Moderno',
    description: 'E-commerce com pagamentos Stripe, SSR Next.js e design responsivo.',
    url: BASE_URL,
    siteName: 'DevStore',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStore — E-commerce Moderno',
    description: 'E-commerce com pagamentos Stripe, SSR Next.js e design responsivo.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className}`} lang="pt-br" suppressHydrationWarning>
      <head>
        <meta name="author" content="Rafael Zendron" />
        <link rel="me" href="https://github.com/rafaumeu" />
        <link rel="me" href="https://portfoliodev-blush-pi.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'DevStore',
              description: 'E-commerce com pagamentos Stripe e design responsivo',
              url: 'https://ecommerce-next-rafaels-projects-62f31870.vercel.app',
            }),
          }}
        />
      </head>
      <body
        className="bg-zinc-950 text-zinc-50 antialiased"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="22668af5-0bdf-4cae-937b-83f9594dc79e"
          data-utcoffset="-3"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
