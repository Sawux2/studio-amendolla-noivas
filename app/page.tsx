"use client";

import Hero from './components/Hero';
import Services from './components/Services';
import Head from 'next/head';

export default function HomePage() {
  const pageTitle = 'Studio Amendolla - Serviços de Maquiagem e Penteados';
  const pageDescription = 'Confira nossos serviços de maquiagem, penteados, pacotes para dia da noiva, madrinhas e debutantes.';
  const pageKeywords = 'maquiagem social, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, maquiagem para noivas, studio de noivas';
  const pageUrl = 'https://www.studioamendollanoivas.com.br';


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <Hero />
      <Services />
    </>
  );
}
