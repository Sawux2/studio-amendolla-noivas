import { ReactNode } from 'react';
import Menu from './components/Menu'; // Importando o Menu
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from 'next/script'; // Importa o componente Script do Next.js
import Footer from './components/Footer'; // Importe o Footer

// Definindo as propriedades de SEO
interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

interface LayoutProps {
  children: ReactNode;
}

// Layout da aplicação, incluindo valores padrão de SEO
export default function RootLayout({ children }: LayoutProps) {
  // Valores globais padrão para SEO e metas
  const defaultSEO: SEOProps = {
    title: 'Studio Amendolla Noivas',
    description: 'Salão especializado em maquiagem, penteados e pacotes de dia da noiva.',
    url: 'https://www.studioamendollanoivas.com.br',
    image: 'https://www.studioamendollanoivas.com.br/images/logo.png',
    keywords: 'maquiagem para noivas, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, dia da noiva',
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* SEO Dinâmico */}
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta name="keywords" content={defaultSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={defaultSEO.url} />

        {/* Open Graph / Redes sociais Dinâmico */}
        <meta property="og:title" content={defaultSEO.title} />
        <meta property="og:description" content={defaultSEO.description} />
        <meta property="og:image" content={defaultSEO.image} />
        <meta property="og:url" content={defaultSEO.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio Amendolla Noivas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:see_also" content="https://www.instagram.com/studioamendolla/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics com next/script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3T09H7NL4T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3T09H7NL4T');
          `}
        </Script>

        {/* Schemas Dinâmicos */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Studio Amendolla Noivas",
              url: "https://www.studioamendollanoivas.com.br",
              logo: "https://www.studioamendollanoivas.com.br/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5511977670498",
                contactType: "Customer Service",
                areaServed: "São Paulo, Brasil",
              },
              description: defaultSEO.description,
            }),
          }}
        />
      </head>
      <body>
        <Menu /> {/* Certifique-se de que o Menu está sendo chamado aqui */}
        {children}
        <Footer />
        <VercelAnalytics /> {/* Esse é o Analytics da Vercel */}
      </body>
    </html>
  );
}
