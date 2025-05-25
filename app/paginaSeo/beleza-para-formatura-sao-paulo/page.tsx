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
    headline: "Beleza para Formatura em São Paulo - Seu Momento Único | Studio Amendolla",
    description: "Celebre sua conquista com uma produção impecável. Maquiagem e penteados profissionais que destacam sua beleza e personalidade no dia da formatura.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quanto tempo dura a maquiagem e penteado?",
      answer: "Garantimos uma produção duradoura que resiste a fotos, festa e emoções do dia da formatura."
    },
    {
      question: "Fazem teste de maquiagem e penteado?",
      answer: "Sim, oferecemos sessão de teste completa para definir o look perfeito com antecedência."
    },
    {
      question: "Atendem grupos de formandas?",
      answer: "Sim, temos pacotes especiais para grupos, garantindo uniformidade e desconto especial."
    },
    {
      question: "Qual o tempo de duração do serviço?",
      answer: "Cada produção leva em média 1-2 horas, dependendo da complexidade do visual escolhido."
    }
  ],
  services: [
    {
      title: "Maquiagem para Formatura",
      description: "Maquiagem profissional que realça sua beleza natural e garante um visual fotogênico",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Penteado Formatura",
      description: "Penteados exclusivos que complementam seu vestido e estilo pessoal",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Beleza para Formatura",
      url: "https://studioamendollanoivas.com.br/beleza-para-formatura-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Beleza para Formatura São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem e Penteado Formatura SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function BelezaParaFormaturaSPPage() {
  // Schema data
  const articleData = {
    headline: pageData.article.headline,
    description: pageData.article.description,
    author: pageData.article.author,
    datePublished: pageData.article.datePublished,
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "https://www.studioamendollanoivas.com.br/paginaSeo/beleza-para-formatura-sao-paulo"
  };

  const breadcrumbData = {
    items: pageData.breadcrumb.map((item, index) => ({
      name: item.name,
      item: item.url,
      position: index + 1
    }))
  };

  const serviceSchemaData = {
    name: pageData.article.headline,
    description: pageData.article.description,
    provider: "Studio Amendolla",
    areaServed: "São Paulo",
    image: [`https://www.studioamendollanoivas.com.br${pageData.article.image}`],
    url: "/paginaSeo/beleza-para-formatura-sao-paulo",
    serviceType: "Maquiagem e Penteado",
    offers: pageData.services.map(() => ({
      price: 300,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-17"
    }))
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
      'maquiagem formatura São Paulo',
      'penteado formatura zona norte',
      'make up para formandas SP',
      'penteado para evento de formatura',
      'beauty look personalizado',
      'maquiagem e penteado profissional'
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
      {pageData.images.map((imgData, index) => (
        <ImageObjectSchema 
          key={index} 
          data={{
            ...imgData,
            url: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            contentUrl: `https://www.studioamendollanoivas.com.br${imgData.url}`,
            caption: imgData.description
          }} 
        />
      ))}

      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Beleza para Formatura São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Seu Momento, Sua Beleza Única</h2>
          <p>
            No Studio Amendolla, localizado na Avenida Julio Buono, 2386 - Vila Nivi, 
            transformamos seu dia de formatura em uma experiência inesquecível. 
            Cada detalhe é pensado para realçar sua personalidade e confiança.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20e%20penteado%20para%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção de Formatura
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços para Formatura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Personalizada</h3>
            <p>Técnicas exclusivas que destacam sua beleza natural e garantem um visual impecável.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Exclusivos</h3>
            <p>Criações que complementam seu vestido e estilo, desde o clássico ao contemporâneo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Maquiagem e penteado em um único serviço, garantindo harmonia e elegância total.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Formatura</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturesCards />
    </div>
  );
}