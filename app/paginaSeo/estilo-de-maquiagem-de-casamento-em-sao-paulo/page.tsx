"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "app/styles/BelezaNoivasSP.module.css";

import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import ContactForm from "app/components/ContactForm";

// Schemas
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";

const pageData = {
  article: {
    headline: "Estilo de Maquiagem de Casamento São Paulo | Studio Amendolla",
    description:
      "Escolher o estilo de maquiagem ideal para o seu casamento é essencial para garantir um visual deslumbrante no grande dia. No Studio Amendolla, oferecemos maquiagem de casamento personalizada para noivas em São Paulo, com produtos de alta qualidade.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-casamento-sao-paulo.webp"],
  },
  breadcrumb: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.studioamendollanoivas.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Serviços",
      item: "https://www.studioamendollanoivas.com.br/servicos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Maquiagem de Casamento",
      item: "https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-de-casamento-em-sao-paulo",
    },
  ],
  faq: [
    {
      question: "Quais estilos de maquiagem de casamento são oferecidos?",
      answer:
        "Oferecemos uma variedade de estilos, incluindo maquiagem clássica, natural e moderna, para atender a diferentes gostos e preferências da noiva.",
    },
    {
      question: "Como escolher o estilo de maquiagem para o casamento?",
      answer:
        "Durante uma consulta, nossa equipe ajudará a identificar o estilo de maquiagem que melhor combina com seu visual e tema de casamento.",
    },
    {
      question: "É possível fazer um teste de maquiagem?",
      answer:
        "Sim, oferecemos a opção de agendar um teste para que você possa experimentar o estilo de maquiagem antes do grande dia e garantir que fique perfeito.",
    },
  ],
  serviceSchema: {
    name: "Estilo de Maquiagem de Casamento em São Paulo",
    description:
      "Consultoria e aplicação de maquiagem para noivas em São Paulo, com estilos personalizados e produtos de alta qualidade.",
    provider: "Studio Amendolla Noivas",
    areaServed: "São Paulo",
    image: ["/images/maquiagem-casamento-sao-paulo.webp"],
    url: "/paginaSeo/estilo-de-maquiagem-de-casamento-em-sao-paulo",
    serviceType: "Maquiagem de Casamento",
  },
  organization: {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description: "Especialistas em maquiagem para noivas em São Paulo",
    logoUrl: "/images/logo.webp",
    telephone: "+55 11 97767-0498",
    contactType: "customer service",
    areaServed: "São Paulo",
  },
  website: {
    name: "Studio Amendolla Noivas",
    url: "https://www.studioamendollanoivas.com.br",
    description:
      "Escolher o estilo de maquiagem ideal para o seu casamento é essencial para garantir um visual deslumbrante no grande dia.",
    inLanguage: "pt-BR",
    keywords: ["maquiagem casamento SP", "maquiagem noiva", "estilo de maquiagem casamento"],
  },
  imageSchema: {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: "https://www.studioamendollanoivas.com.br/images/maquiagem-casamento-sao-paulo.webp",
    contentUrl: "https://www.studioamendollanoivas.com.br/images/maquiagem-casamento-sao-paulo.webp",
    description: "Maquiagem de casamento em São Paulo",
    width: 800,
    height: 600,
    name: "Maquiagem de Casamento",
    caption: "Estilo de Maquiagem de Casamento",
    creator: {
      "@type": "Organization",
      name: "Studio Amendolla Noivas",
    },
    datePublished: "2025-02-01",
    copyrightHolder: {
      "@type": "Organization",
      name: "Studio Amendolla Noivas",
    },
  },
};

const EstiloDeMaquiagemDeCasamentoSPPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-de-casamento-em-sao-paulo",
  };

  return (
    <>
      <Head>
        <title>{pageData.article.headline}</title>
        <meta name="description" content={pageData.article.description} />
        <meta property="og:title" content={pageData.article.headline} />
        <meta property="og:description" content={pageData.article.description} />
        <meta property="og:url" content="https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-de-casamento-em-sao-paulo" />
        <meta property="og:image" content={`https://www.studioamendollanoivas.com.br${pageData.article.image[0]}`} />
        <link rel="canonical" href="https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-de-casamento-em-sao-paulo" />
      </Head>

      {/* JSON-LD direto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageData.imageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: pageData.breadcrumb,
          }),
        }}
      />

      {/* Componentes Schema */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={{ items: pageData.breadcrumb }} />
      <FAQSchema data={{ items: pageData.faq }} />
      <ServiceSchema data={pageData.serviceSchema} />
      <OrganizationSchema data={pageData.organization} />
      <WebsiteSchema data={pageData.website} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{pageData.article.headline}</h1>
          <p className={styles.description}>{pageData.article.description}</p>
        </header>

        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={pageData.article.image[0]}
              alt="Estilo de Maquiagem de Casamento em São Paulo"
              width={500}
              height={333}
              loading="lazy"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>Escolha o Estilo Perfeito para Seu Casamento</h2>
            <p className={styles.description}>
              No Studio Amendolla, entendemos que cada noiva é única e merece uma maquiagem
              que reflita sua personalidade e estilo. Nossa equipe especializada oferece
              diferentes estilos de maquiagem, desde o mais clássico até o contemporâneo,
              sempre com produtos de alta qualidade e técnicas modernas.
            </p>
          </div>
        </div>

        <GaleriaDeFotos />

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Nossos Estilos de Maquiagem</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Clássica</h3>
              <p>Elegante e atemporal, perfeita para noivas tradicionais.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Natural</h3>
              <p>Realce suave e delicado da sua beleza natural.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Moderna</h3>
              <p>Visual contemporâneo com técnicas inovadoras.</p>
            </div>
          </div>
        </section>

        <ContactForm />
        
        <FeaturesCards />

        <a
          href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20estilos%20de%20maquiagem%20para%20casamento"
          className={styles.whatsappButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende seu Teste de Maquiagem
        </a>
      </div>
    </>
  );
};

export default EstiloDeMaquiagemDeCasamentoSPPage;
