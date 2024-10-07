"use client";

import Head from 'next/head';
import Hero from './components/Hero';
import Services from './components/Services';
import CanonicalURL from './components/CanonicalURL';
import UnifiedSchemas from './schemas/UnifiedSchemas';
import { Suspense } from 'react';

export default function HomePage() {
  const pageTitle = 'Studio Amendolla - Serviços de Maquiagem e Penteados';
  const pageDescription = 'Confira nossos serviços de maquiagem, penteados, pacotes para dia da noiva, madrinhas e debutantes.';
  const pageKeywords = 'maquiagem social, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, maquiagem para noivas, studio de noivas';

  const pageData = {
    article: {
      headline: pageTitle,
      description: pageDescription,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
      image: 'https://www.studioamendollanoivas.com.br/images/hero-image.webp',
    },
    faq: [
      { question: 'Qual o preço da maquiagem?', answer: 'A partir de R$150.' },
      { question: 'Onde estamos localizados?', answer: 'Nosso salão fica na Avenida Julio Buono, 2386, São Paulo, Brasil.' },
    ],
    services: [
      {
        title: 'Maquiagem Social',
        description: 'Realce sua beleza natural com nossa maquiagem social.',
        image: '/images/maquiagem-social.webp',
      },
      {
        title: 'Penteado para Noivas',
        description: 'Penteados sofisticados e personalizados para noivas.',
        image: '/images/penteado-para-noivas.webp',
      },
    ],
    breadcrumb: [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
    ],
    image: {
      url: 'https://www.studioamendollanoivas.com.br/images/hero-image.webp',
      description: 'Imagem principal do Studio Amendolla Noivas.',
      width: 1200,
      height: 800,
    },
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Head>
      <Suspense fallback={null}>
        <CanonicalURL />
      </Suspense>
      <UnifiedSchemas pageData={pageData} />
      <Hero />
      <Services />
    </>
  );
}
