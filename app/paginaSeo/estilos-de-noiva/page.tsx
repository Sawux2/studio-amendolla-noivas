"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";
import ContactForm from "@/components/ContactForm";

const pageData = {
  article: {
    headline: "Estilos de Noiva | Studio Amendolla",
    description: "Descubra os diferentes estilos de noiva e como escolher o visual perfeito para o seu grande dia, com vestidos, penteados e maquiagem que combinam com sua personalidade.",
    author: "Priscila Helena",
    datePublished: "2025-01-18",
    image: ["/images/estilos-de-noiva.webp"],
    imagesGallery: [
      "/images/estilos-de-noiva-1.webp",
      "/images/estilos-de-noiva-2.webp"
    ]
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/estilos-de-noiva",
};

const breadcrumbData = {
  items: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.studioamendollanoivas.com.br"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.studioamendollanoivas.com.br/blog"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Estilos de Noiva",
      item: "https://www.studioamendollanoivas.com.br/paginaSeo/estilos-de-noiva"
    }
  ]
};

const faqData = {
  items: [
    {
      question: "Qual o estilo de vestido mais adequado para o meu corpo?",
      answer: "O estilo ideal depende do seu tipo de corpo. Para ampulheta, vestidos justos com saia volumosa; para quadris largos, evasê ou A-line. Experimente vários modelos para encontrar o melhor.",
    },
    {
      question: "Como escolher o penteado ideal?",
      answer: "Combine com o estilo do vestido: coques para noivas clássicas, cabelos soltos com ondas para boho. Faça uma prova de cabelo para testar.",
    },
    {
      question: "Posso misturar estilos de noiva?",
      answer: "Sim! Muitas noivas combinam elementos, como vestido romântico com penteado boho. O importante é se sentir confortável.",
    },
    {
      question: "Qual maquiagem combina com meu estilo?",
      answer: "Noivas clássicas: maquiagem suave; modernas: olhos marcantes; boho: natural e iluminada. Reflita sua personalidade.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/estilos-de-noiva",
  serviceType: "Consultoria de Estilo para Noivas",
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem e estilo para noivas em São Paulo",
  logoUrl: "/images/logo.webp",
  telephone: "+55 11 97767-0498",
  contactType: "customer service",
  areaServed: "São Paulo",
};

const websiteData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: pageData.article.description,
  inLanguage: "pt-BR",
  keywords: ["estilos de noiva", "vestido de noiva", "look para casamento"],
};

const imageSchemaData = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: `https://www.studioamendollanoivas.com.br${pageData.article.image[0]}`,
  contentUrl: `https://www.studioamendollanoivas.com.br${pageData.article.image[0]}`,
  description: pageData.article.description,
  width: 1200,
  height: 630,
  name: pageData.article.headline,
  caption: "Estilos de Noiva",
  creator: {
    "@type": "Organization",
    name: "Studio Amendolla Noivas"
  },
  datePublished: pageData.article.datePublished,
  copyrightHolder: {
    "@type": "Organization",
    name: "Studio Amendolla Noivas"
  }
};

const EstilosDeNoivaPage = () => {
  return (
    <>
      <Head>
        <title>{pageData.article.headline}</title>
        <meta name="description" content={pageData.article.description} />
        <meta property="og:image" content={`https://www.studioamendollanoivas.com.br${pageData.article.image[0]}`} />
        <meta property="og:title" content={pageData.article.headline} />
        <meta property="og:description" content={pageData.article.description} />
        <meta property="og:url" content="https://www.studioamendollanoivas.com.br/paginaSeo/estilos-de-noiva" />
        <link rel="canonical" href="https://www.studioamendollanoivas.com.br/paginaSeo/estilos-de-noiva" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageSchemaData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />

      {/* Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={faqData} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />

      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image[0]}
            alt="Estilos de Noiva"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Principais Estilos de Noiva</h2>
          
          <section className={styles.tipSection}>
            <h3>1. Noiva Clássica</h3>
            <p>
              Elegância atemporal com vestidos princesa ou sereia, rendas e silhuetas sofisticadas. 
              Maquiagem suave e penteados como coque ou semi-preso.
            </p>
          </section>

          <section className={styles.tipSection}>
            <h3>2. Noiva Boho</h3>
            <p>
              Look leve e descontraído com vestidos fluidos, detalhes em renda e bordados. 
              Cabelo solto com ondas naturais e maquiagem em tons terrosos.
            </p>
          </section>

          <section className={styles.tipSection}>
            <h3>3. Noiva Moderninha</h3>
            <p>
              Minimalismo com cortes retos e tecidos inovadores. Cabelo liso ou preso de forma 
              descomplicada e maquiagem ousada com batons fortes.
            </p>
          </section>

          <section className={styles.tipSection}>
            <h3>4. Noiva Romântica</h3>
            <p>
              Delicadeza com vestidos volumosos, decotes em V e tecidos como tule. 
              Maquiagem suave em tons de rosa e cabelo com flores naturais.
            </p>
          </section>
        </div>
      </div>

      <GaleriaDeFotos />
      <ContactForm />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços Relacionados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Teste de Noiva</h3>
            <p>Experimente diferentes estilos de maquiagem e penteado antes do grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consultoria de Visual</h3>
            <p>Planejamento completo do seu look, do vestido aos acessórios.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Realce sua beleza com técnicas adaptadas ao seu estilo de noiva.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20ajuda%20para%20escolher%20meu%20estilo%20de%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consultoria
      </a>

      <FeaturesCards />
    </>
  );
};

export default EstilosDeNoivaPage;