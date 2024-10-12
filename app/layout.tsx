"use client";

import { ReactNode, Suspense } from 'react';
import Menu from './components/Menu';
import CanonicalURL from './components/CanonicalURL';
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from 'next/script';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

interface LayoutProps {
  children: ReactNode;
  seo: SEOProps; // Recebemos o SEO dinamicamente de cada página
}

export default function RootLayout({ children, seo }: LayoutProps) {
  const defaultSEO: SEOProps = {
    title: 'Studio Amendolla Noivas',
    description: 'Salão especializado em maquiagem, penteados e pacotes de dia da noiva.',
    image: 'https://www.studioamendollanoivas.com.br/images/favicon.ico',
    keywords: 'maquiagem para noivas, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, dia da noiva',
  };

  const seoData = seo || defaultSEO;

  return (
    <html lang="pt-BR">
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio Amendolla Noivas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:see_also" content="https://www.instagram.com/studioamendolla/" />

        {/* Google Tag Manager */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3T09H7NL4T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3T09H7NL4T');
          `}
        </Script>
      </head>
      <body>
        <Menu />
        <ContactWidget />
        <Suspense fallback={null}>
          <CanonicalURL />
        </Suspense>
        {children}
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
