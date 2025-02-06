"use client";

import { ReactNode, Suspense } from 'react';
import Menu from './components/Menu';
import CanonicalURL from './components/CanonicalURL';
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from 'next/script';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import { SpeedInsights } from "@vercel/speed-insights/next"

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}

interface ArticleData {
  headline: string;
  description: string;
}

interface PageData {
  article?: ArticleData;
}

interface LayoutProps {
  children: ReactNode;
  pageData?: PageData;  // Especificamos o tipo correto para pageData
}

export default function RootLayout({ children, pageData }: LayoutProps) {
  const defaultSEO: SEOProps = {
    title: 'Studio Amendolla Noivas',
    description: 'Salão especializado em maquiagem, penteados e pacotes de dia da noiva.',
    image: 'https://www.studioamendollanoivas.com.br/images/favicon.ico',
    keywords: 'maquiagem para noivas, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, dia da noiva',
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Título dinâmico, baseado no conteúdo da página */}
        <title>{pageData?.article ? `${pageData.article.headline} | Studio Amendolla Noivas` : defaultSEO.title}</title>
        <meta name="description" content={pageData?.article ? pageData.article.description : defaultSEO.description} />
        <meta name="keywords" content={pageData?.article ? pageData.article.headline.replace(/,|\./g, '').split(' ').join(', ') : defaultSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={pageData?.article ? pageData.article.headline : defaultSEO.title} />
        <meta property="og:description" content={pageData?.article ? pageData.article.description : defaultSEO.description} />
        <meta property="og:image" content={defaultSEO.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio Amendolla Noivas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:see_also" content="https://www.instagram.com/studioamendolla/" />

        {/* Scripts */}
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
        <SpeedInsights/>
      </body>
    </html>
  );
}
