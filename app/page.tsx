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
      { question: 'Qual o preço da maquiagem?', answer: 'consulte nossos com uma base , em nossa calculadora.' },
      { question: 'Onde estamos localizados?', answer: 'Nosso salão fica na Avenida Julio Buono, 2386, São Paulo, Brasil.' },
    ],
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
