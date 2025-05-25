"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
import ServiceSimulator from "@/components/calculadora";
import FeaturesCards from "@/components/FeaturesCards";
import GaleriaDeFotos from "@/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";

const pageData = {
  article: {
    headline: "Beleza para Noivas em São Paulo | Maquiagem e Penteado Studio Amendolla",
    description: "Noiva deslumbrante, com maquiagem e penteado exclusivos para o grande dia. No Studio Amendolla, oferecemos serviços personalizados para garantir que você se sinta única em sua cerimônia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-noivas-sao-paulo.webp",
  },
  faq: [
    {
      question: "Quais estilos de maquiagem e penteado estão disponíveis para noivas?",
      answer: "Temos opções de maquiagem sofisticada, romântica e glamourosa, além de penteados clássicos, modernos e exclusivos para cada tipo de noiva."
    },
    {
      question: "Como funciona o teste de maquiagem e penteado?",
      answer: "Recomendamos que você agende uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para o seu casamento."
    },
    {
      question: "Posso agendar os serviços diretamente para o meu casamento?",
      answer: "Sim! Você pode agendar sua maquiagem e penteado de noiva diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site."
    }
  ]
};

const BelezaParaNoivasSPPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-noivas-em-sao-paulo"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Beleza para Noivas", item: "/paginaSeo/beleza-para-noivas-em-sao-paulo", position: 3 }
    ]
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/beleza-para-noivas-em-sao-paulo",
    serviceType: "Maquiagem e Penteado",
    offers: [{
      price: 500,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-17"
    }]
  };

  const organizationData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
    sameAs: [
      "https://www.instagram.com/studioamendolla",
      "https://www.facebook.com/studioamendolla"
    ],
    address: {
      streetAddress: "Avenida Julio Buono 2386",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02201-002",
      addressCountry: "BR"
    }
  };

  const websiteData = {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: pageData.article.description,
    inLanguage: "pt-BR",
    keywords: [
      "maquiagem noiva SP",
      "penteado noiva São Paulo",
      "beleza noivas",
      "make noiva",
      "studio amendolla noivas",
      "produção noiva SP"
    ]
  };

  return (
    <div className={styles.container}>
      {/* SEO Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={{ items: pageData.faq }} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      <ImageObjectSchema data={{
        url: pageData.article.image,
        contentUrl: `https://www.studioamendollanoivas.com.br${pageData.article.image}`,
        description: pageData.article.description,
        width: 500,
        height: 333,
        name: pageData.article.headline,
        caption: "Beleza para Noivas em São Paulo"
      }} />

      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image} // URL da imagem
            alt="Beleza para Noivas em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            A Beleza Perfeita para o Seu Grande Dia
          </h2>
          <p className={styles.description}>
            No Studio Amendolla, cuidamos de cada detalhe da sua maquiagem e penteado para que você seja a noiva dos seus sonhos. Com serviços exclusivos para noivas em São Paulo, nossa equipe dedica-se a criar o visual perfeito para o seu casamento, seja com um look clássico, romântico ou moderno. Além disso, realizamos ensaios de maquiagem e penteado para que você esteja tranquila no grande dia, sabendo que estará deslumbrante.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20o%20meu%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza de Noiva no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Impecável</h3>
            <p>Crie um visual radiante com uma maquiagem que destaque sua beleza natural e combine perfeitamente com o estilo do seu casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva</h3>
            <p>De coques elegantes a cabelos soltos e ondulados, nossos penteados são pensados para cada noiva e estilo de casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Noiva</h3>
            <p>Oferecemos pacotes completos de beleza, combinando maquiagem e penteado para garantir que você esteja perfeita para o seu grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais estilos de maquiagem e penteado estão disponíveis para noivas?</summary>
            <p>Temos opções de maquiagem sofisticada, romântica e glamourosa, além de penteados clássicos, modernos e exclusivos para cada tipo de noiva.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como funciona o teste de maquiagem e penteado?</summary>
            <p>Recomendamos que você agende uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para o seu casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços diretamente para o meu casamento?</summary>
            <p>Sim! Você pode agendar sua maquiagem e penteado de noiva diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />
    </div>
  );
};

export default BelezaParaNoivasSPPage;
