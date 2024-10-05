// app/page.tsx
"use client";

import Hero from './components/Hero';
import Services from './components/Services';
import { useEffect, useMemo } from 'react';
import Head from 'next/head';
import { generateOrganizationSchema } from './schemas/organizationSchema';
import { generateBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generateFAQSchema } from './schemas/FAQSchema';
import { generateImageObjectSchema } from './schemas/ImageObjectSchema';
import { generateArticleSchema } from './schemas/ArticleSchema';
import { generateServiceSchema } from './schemas/ServiceSchema';

export default function HomePage() {
  const pageTitle = 'Studio Amendolla - Serviços de Maquiagem e Penteados';
  const pageDescription = 'Confira nossos serviços de maquiagem, penteados, pacotes para dia da noiva, madrinhas e debutantes.';
  const pageKeywords = 'maquiagem social, penteados para noivas, maquiagem para madrinhas, maquiagem debutantes, maquiagem para noivas, studio de noivas';
  const pageUrl = 'https://www.studioamendollanoivas.com.br';

  // Usando useMemo para memorizar o servicesData
  const servicesData = useMemo(() => [
    {
      title: 'Maquiagem Social',
      description: 'Realce sua beleza natural com nossa maquiagem social.',
      image: 'https://www.studioamendollanoivas.com.br/images/maquiagem-social.webp',
    },
    {
      title: 'Penteado para Noivas',
      description: 'Criamos penteados personalizados para o seu grande dia.',
      image: 'https://www.studioamendollanoivas.com.br/images/penteado-para-noivas.webp',
    },
    {
      title: 'Maquiagem para Madrinhas',
      description: 'Maquiagem especial para madrinhas, garantindo que todas brilhem.',
      image: 'https://www.studioamendollanoivas.com.br/images/maquiagem-para-madrinhas.webp',
    },
    {
      title: 'Maquiagem para Debutantes',
      description: 'Estilo e elegância para sua festa de 15 anos.',
      image: 'https://www.studioamendollanoivas.com.br/images/maquiagem-debutantes.webp',
    },
    {
      title: 'Dia da Noiva',
      description: 'Pacote completo para noivas, incluindo maquiagem, penteado e muito mais para o grande dia.',
      image: 'https://www.studioamendollanoivas.com.br/images/dia-da-noiva.webp',
    },
    {
      title: 'Massagem Relaxante',
      description: 'Relaxe e prepare-se para o grande dia com nossa massagem relaxante.',
      image: 'https://www.studioamendollanoivas.com.br/images/massagem-relaxante.webp',
    },
  ], []);

  // Usando useMemo para memorizar o faqData
  const faqData = useMemo(() => [
    { question: 'Qual o preço da maquiagem?', answer: 'A partir de R$150.' },
    { question: 'Onde estamos localizados?', answer: 'São Paulo, Brasil.' },
  ], []);

  // Cria os schemas para todas as imagens da página
  const imageSchemas = useMemo(() => servicesData.map((service) => {
    return generateImageObjectSchema({
      url: service.image,
      description: service.description,
      width: 800, // Insira as dimensões corretas das suas imagens
      height: 600,
    });
  }), [servicesData]);

  // Usando useMemo para memorizar o articleData
  const articleData = useMemo(() => ({
    headline: 'Melhores Dicas de Maquiagem para Noivas',
    description: 'Confira nossas melhores dicas de maquiagem para o grande dia.',
    author: 'Priscila Helena',
    datePublished: '2024-10-04',
    image: 'https://www.studioamendollanoivas.com.br/images/makeup-article.webp',
  }), []);

  useEffect(() => {
    const organizationSchema = generateOrganizationSchema({
      name: 'Studio Amendolla Noivas',
      url: pageUrl,
      description: 'Salão de noivas especializado em maquiagem, penteados e dia da noiva.',
      logoUrl: 'https://www.studioamendollanoivas.com.br/logo.webp',
      telephone: '+5511977670498',
      contactType: 'Customer Service',
      areaServed: 'São Paulo, Brasil',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
    ]);

    const serviceSchema = generateServiceSchema(servicesData);
    const faqSchema = generateFAQSchema(faqData); 
    const articleSchema = generateArticleSchema(articleData);

    // Adiciona todos os schemas, inclusive os de imagem
    const schemas = [organizationSchema, breadcrumbSchema, serviceSchema, faqSchema, articleSchema, ...imageSchemas];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Remove os scripts ao desmontar o componente, com verificação de existência
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [servicesData, faqData, articleData, imageSchemas]);

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
