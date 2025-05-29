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
    headline: "Dia da Noiva Maquiagem São Paulo | Studio Amendolla",
    description:
      "Pacote completo de beleza para o dia da noiva em São Paulo. Maquiagem profissional que realça sua beleza natural e garante fotos perfeitas no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/dia-da-noiva-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva-maquiagem-sao-paulo",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Dia da Noiva", item: "/paginaSeo/dia-da-noiva-maquiagem-sao-paulo", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "O que inclui o pacote Dia da Noiva?",
      answer: "Nosso pacote inclui teste prévio de maquiagem, maquiagem no dia do casamento com produtos premium, técnicas especiais para fotos/vídeos e atendimento exclusivo.",
    },
    {
      question: "Quanto tempo antes devo agendar?",
      answer: "Recomendamos agendar com 6-8 meses de antecedência para garantir disponibilidade na sua data.",
    },
    {
      question: "A maquiagem dura o dia todo?",
      answer: "Sim! Utilizamos produtos específicos para noivas que garantem durabilidade por mais de 12 horas, resistentes a lágrimas e calor.",
    },
    {
      question: "Fazem atendimento em domicílio?",
      answer: "Sim, podemos realizar o serviço no local de sua preferência para maior conforto no dia do casamento.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/dia-da-noiva-maquiagem-sao-paulo",
  serviceType: "Dia da Noiva",
  offers: [
    {
      price: 950,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem para noivas em São Paulo",
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
  keywords: ["dia da noiva SP", "pacote noiva", "maquiagem casamento"],
};

const DiaDaNoivaSPPage = () => {
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
          caption: "Dia da Noiva São Paulo",
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
            alt="Dia da Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Experiência Única para seu Dia Especial</h2>
          <p className={styles.description}>
            O Dia da Noiva é um momento único que merece toda atenção aos detalhes. 
            No Studio Amendolla, oferecemos um serviço exclusivo com técnicas avançadas 
            de maquiagem que garantem um visual deslumbrante e duradouro. Nossa equipe 
            especializada em noivas criará um look personalizado que realça sua beleza 
            natural e permanece impecável durante todo o evento, das fotos às lágrimas 
            de emoção, até o último convidado ir embora.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Pacotes Dia da Noiva</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Essencial</h3>
            <p>Teste + Maquiagem no dia com produtos premium e técnicas especiais para foto e vídeo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Premium</h3>
            <p>Inclui teste, dia do casamento e sessão pré-wedding com suporte exclusivo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Luxo</h3>
            <p>Serviço VIP completo com horário exclusivo e atendimento personalizado.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20o%20pacote%20Dia%20da%20Noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Pacote Dia da Noiva
      </a>

      <FeaturesCards />
    </div>
  );
};

export default DiaDaNoivaSPPage;