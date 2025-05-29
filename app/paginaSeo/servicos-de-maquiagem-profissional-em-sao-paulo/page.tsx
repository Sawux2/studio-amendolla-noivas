"use client";

import React from "react";
import Image from "next/image";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";
import ArticleSchema from "@/schemas/ArticleSchema";
import BreadcrumbSchema from "@/schemas/BreadcrumbSchema";
import FAQSchema from "@/schemas/FAQSchema";
import ImageObjectSchema from "@/schemas/ImageObjectSchema";
import ServiceSchema from "@/schemas/ServiceSchema";
import OrganizationSchema from "@/schemas/organizationSchema";
import WebsiteSchema from "@/schemas/WebsiteSchema";
import ContactForm from "@/components/ContactForm";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Zona Norte SP | Studio Amendolla",
    description:
      "O melhor serviço de maquiagem profissional na Zona Norte de São Paulo. Studio Amendolla oferece maquiagem para noivas, festas e eventos com qualidade e sofisticação.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-profissional-zona-norte.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-profissional-zona-norte",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem Profissional Zona Norte", item: "/paginaSeo/maquiagem-profissional-zona-norte", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Quais são os principais serviços de maquiagem oferecidos?",
      answer: "Oferecemos maquiagem para noivas, madrinhas, debutantes, formaturas e eventos especiais. Cada maquiagem é personalizada para realçar sua beleza natural.",
    },
    {
      question: "Onde está localizado o Studio Amendolla?",
      answer: "Estamos localizados na Zona Norte de São Paulo, com fácil acesso e estacionamento. Também oferecemos atendimento a domicílio.",
    },
    {
      question: "Quais são os horários de atendimento?",
      answer: "Atendemos de segunda a sábado, das 9h às 20h, com horários especiais para noivas e eventos.",
    },
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-profissional-zona-norte",
  serviceType: "Maquiagem Profissional",
  offers: [
    {
      price: 450,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem e penteados para noivas em São Paulo",
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
  keywords: ["maquiagem zona norte", "maquiadora profissional SP", "makeup artist SP"],
};

const MaquiagemProfissionalZonaNortePage = () => {
  return (
    <div className={styles.container}>
      {/* Schemas */}
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema data={breadcrumbData} />
      <FAQSchema data={faqData} />
      <ServiceSchema data={serviceSchemaData} />
      <OrganizationSchema data={organizationData} />
      <WebsiteSchema data={websiteData} />
      <ImageObjectSchema
        data={{
          url: pageData.article.image[0],
          contentUrl: pageData.article.image[0],
          description: pageData.article.description,
          width: 500,
          height: 333,
          name: pageData.article.headline,
          caption: "Maquiagem Profissional Zona Norte SP",
        }}
      />

      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image[0]}
            alt="Maquiagem Profissional Zona Norte SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Excelência em Maquiagem na Zona Norte</h2>
          <p className={styles.description}>
            O Studio Amendolla é referência em maquiagem profissional na Zona Norte de São Paulo. 
            Com mais de 10 anos de experiência, nossa equipe especializada trabalha com as melhores 
            técnicas e produtos do mercado para garantir um resultado impecável em cada atendimento. 
            Seja para seu casamento, formatura ou evento especial, oferecemos um serviço personalizado 
            que realça sua beleza natural e garante que você esteja deslumbrante em todos os momentos.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Maquiagem</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Técnicas especiais para garantir durabilidade e perfeição nas fotos do seu grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Looks sofisticados para formaturas, festas e ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Social</h3>
            <p>Valorize sua beleza natural com uma maquiagem elegante para qualquer ocasião.</p>
          </div>
        </div>
      </section>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemProfissionalZonaNortePage;