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
    headline: "Maquiagem para Noivas em São Paulo | Studio Amendolla",
    description:
      "Realize o sonho do seu casamento perfeito com nossa maquiagem profissional para noivas. Studio Amendolla oferece expertise em técnicas de maquiagem para fotos e vídeos que duram o dia todo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-noivas-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noivas-sao-paulo",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem para Noivas", item: "/paginaSeo/maquiagem-para-noivas-sao-paulo", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Como funciona o teste de maquiagem para noivas?",
      answer: "Realizamos um teste completo onde definimos o look ideal para seu grande dia, considerando seu estilo, tom de pele e preferências pessoais.",
    },
    {
      question: "Quanto tempo antes devo agendar a maquiagem?",
      answer: "Recomendamos agendar com 6 meses de antecedência para garantir disponibilidade na data do seu casamento.",
    },
    {
      question: "A maquiagem dura o dia todo?",
      answer: "Sim! Utilizamos produtos específicos para noivas que garantem durabilidade por mais de 12 horas, resistentes a lágrimas e calor.",
    },
    {
      question: "Vocês também atendem as madrinhas?",
      answer: "Sim, oferecemos pacotes especiais para noiva e madrinhas, garantindo uma harmonia visual perfeita para as fotos.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-para-noivas-sao-paulo",
  serviceType: "Maquiagem para Noivas",
  offers: [
    {
      price: 800,
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
  keywords: ["maquiagem noiva SP", "makeup bride", "maquiadora noivas"],
};

const MaquiagemNoivasSPPage = () => {
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
          caption: "Maquiagem para Noivas São Paulo",
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
            alt="Maquiagem para Noivas São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Profissional para Noivas</h2>
          <p className={styles.description}>
            No dia mais especial da sua vida, você merece uma maquiagem que realce sua beleza natural 
            e permaneça perfeita do início ao fim da celebração. No Studio Amendolla, nossa expertise 
            em maquiagem para noivas garante um visual deslumbrante que resiste às emoções, fotos e 
            toda a duração do seu casamento. Utilizamos produtos premium e técnicas específicas para 
            garantir que você esteja radiante em cada momento deste dia único.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo Noiva</h3>
            <p>Teste + Dia do Casamento com técnicas especiais para fotos e vídeos profissionais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Noiva e Madrinhas</h3>
            <p>Harmonia visual perfeita para todo o grupo do casamento com preços especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem</h3>
            <p>Sessão personalizada para definir o look ideal para seu grande dia.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20noivas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Teste de Noiva
      </a>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemNoivasSPPage;