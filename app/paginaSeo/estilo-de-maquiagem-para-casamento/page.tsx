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
    headline: "Estilo de Maquiagem para Casamento | Studio Amendolla",
    description:
      "Escolha o estilo de maquiagem perfeito para o seu grande dia. No Studio Amendolla, criamos maquiagens personalizadas para noivas, com acabamentos sofisticados e duradouros.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-para-casamento.webp"],
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
      name: "Estilo de Maquiagem para Casamento",
      item: "https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-para-casamento",
    },
  ],
  faq: [
    {
      question: "Quais estilos de maquiagem para casamento são oferecidos?",
      answer:
        "Oferecemos estilos variados, como maquiagem clássica, natural e moderna. Todos os looks são personalizados conforme o estilo da noiva.",
    },
    {
      question: "Como funciona o teste de maquiagem para casamento?",
      answer:
        "Recomendamos agendar um teste de maquiagem para garantir que o estilo escolhido se encaixe perfeitamente com o tema e a personalidade da noiva.",
    },
    {
      question: "Posso agendar a maquiagem para casamento diretamente?",
      answer:
        "Sim, você pode agendar a sua maquiagem diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.",
    },
  ],
  serviceSchema: {
    name: "Maquiagem para Casamento em São Paulo",
    description:
      "Maquiagem profissional e personalizada para noivas, com diversos estilos e acabamentos para o grande dia.",
    provider: "Studio Amendolla Noivas",
    areaServed: "São Paulo",
    image: ["/images/maquiagem-para-casamento.webp"],
    url: "/paginaSeo/estilo-de-maquiagem-para-casamento",
    serviceType: "Maquiagem para Casamento",
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
      "Escolha o estilo de maquiagem perfeito para o seu grande dia. No Studio Amendolla, criamos maquiagens personalizadas para noivas, com acabamentos sofisticados e duradouros.",
    inLanguage: "pt-BR",
    keywords: ["maquiagem noiva", "maquiagem casamento SP", "estilo maquiagem casamento"],
  },
  imageSchema: {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: "https://www.studioamendollanoivas.com.br/images/maquiagem-para-casamento.webp",
    contentUrl: "https://www.studioamendollanoivas.com.br/images/maquiagem-para-casamento.webp",
    description: "Maquiagem personalizada para casamento em São Paulo",
    width: 800,
    height: 600,
    name: "Maquiagem para Casamento",
    caption: "Estilo de maquiagem para noivas",
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

const EstiloDeMaquiagemParaCasamentoPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/estilo-de-maquiagem-para-casamento",
  };

  return (
    <>
      <Head>
        <title>{pageData.article.headline}</title>
        <meta name="description" content={pageData.article.description} />
        <meta property="og:title" content={pageData.article.headline} />
        <meta property="og:description" content={pageData.article.description} />
        <meta property="og:url" content={articleData.url} />
        <meta property="og:image" content={articleData.image[0]} />
        <link rel="canonical" href={articleData.url} />
      </Head>

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
              alt="Estilo de Maquiagem para Casamento"
              width={500}
              height={333}
              loading="lazy"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>Seu Estilo, Sua Beleza</h2>
            <p className={styles.description}>
              Cada noiva tem um estilo único. Nossa missão no Studio Amendolla é valorizar sua beleza natural com um toque de elegância e sofisticação, criando o visual ideal para o dia do seu casamento.
            </p>
          </div>
        </div>

        <GaleriaDeFotos />

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Opções de Estilos</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Clássica</h3>
              <p>Ideal para noivas que buscam um visual atemporal e elegante.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Natural</h3>
              <p>Realce discreto que valoriza os traços com leveza e sofisticação.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Maquiagem Moderna</h3>
              <p>Looks atuais com técnicas e acabamentos inovadores.</p>
            </div>
          </div>
        </section>

        <ContactForm />

        <FeaturesCards />

        <a
          href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20casamento"
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

export default EstiloDeMaquiagemParaCasamentoPage;
