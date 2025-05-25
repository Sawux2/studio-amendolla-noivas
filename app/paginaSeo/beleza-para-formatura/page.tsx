"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/BelezaNoivasSP.module.css";
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
    headline: "Beleza para Formatura | Maquiagem e Penteado | Studio Amendolla",
    description: 
      "Pacotes completos de beleza para formatura em São Paulo. Maquiagem e penteado profissional para você brilhar no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
  faq: [
    {
      question: "Quando devo agendar?",
      answer: "Recomendamos agendar com 3 meses de antecedência."
    },
    {
      question: "Oferecem pacotes para turmas?",
      answer: "Sim, temos condições especiais para grupos de formandas."
    },
    {
      question: "Atendem no local da formatura?",
      answer: "Sim, nos deslocamos até o local do evento."
    },
    {
      question: "A prova de maquiagem é obrigatória?",
      answer: "Recomendamos fortemente para garantir o resultado perfeito."
    }
  ],
  services: [
    {
      title: "Pacote Completo",
      description: "Maquiagem + penteado com teste prévio incluso"
    },
    {
      title: "Maquiagem Premium",
      description: "Maquiagem profissional de longa duração"
    },
    {
      title: "Penteado Exclusivo",
      description: "Penteados personalizados para seu estilo"
    }
  ]
};

const BelezaFormaturaPage = () => {
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-formatura"
  };

  const breadcrumbData = {
    items: [
      { name: "Início", item: "/", position: 1 },
      { name: "Serviços", item: "/servicos", position: 2 },
      { name: "Beleza para Formatura", item: "/paginaSeo/beleza-para-formatura", position: 3 }
    ]
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/beleza-para-formatura",
    serviceType: "Maquiagem e Penteado",
    offers: [{
      price: 250,
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
      "maquiagem formatura",
      "penteado formatura",
      "beleza formanda",
      "make formatura SP",
      "pacote formanda",
      "studio amendolla"
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
        contentUrl: pageData.article.image,
        description: pageData.article.description,
        width: 500,
        height: 333,
        name: pageData.article.headline,
        caption: "Beleza para Formatura"
      }} />

      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Beleza para Formatura"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Produções Especiais para Formandas</h2>
          <p>
            Celebre sua conquista com uma produção impecável. Nossa equipe especializada 
            criará um visual deslumbrante que combina com seu estilo e permanece perfeito 
            durante toda a cerimônia e festa.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20beleza%20de%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção de Formatura
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacotes para Formanda</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Maquiagem + penteado com teste prévio incluso.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Premium</h3>
            <p>Maquiagem profissional de longa duração.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Exclusivo</h3>
            <p>Penteados personalizados para seu estilo.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Beleza para Formatura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quando devo agendar?</summary>
            <p>Recomendamos agendar com 3 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Oferecem pacotes para turmas?</summary>
            <p>Sim, temos condições especiais para grupos de formandas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem no local da formatura?</summary>
            <p>Sim, nos deslocamos até o local do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A prova de maquiagem é obrigatória?</summary>
            <p>Recomendamos fortemente para garantir o resultado perfeito.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
    </div>
  );
};

export default BelezaFormaturaPage;
