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
    headline: "Maquiagem para Formaturas em São Paulo | Studio Amendolla",
    description:
      "Maquiagem profissional especializada para formaturas em São Paulo. Studio Amendolla oferece looks sofisticados e duradouros para sua colação de grau, com técnicas especiais para fotos e vídeos.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-formatura-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-formaturas-sao-paulo",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem para Formaturas", item: "/paginaSeo/maquiagem-para-formaturas-sao-paulo", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Como funciona o agendamento para formaturas?",
      answer: "Recomendamos agendar com antecedência, especialmente em época de formaturas. Oferecemos horários flexíveis e atendimento em domicílio.",
    },
    {
      question: "A maquiagem é adequada para fotos e vídeos?",
      answer: "Sim! Utilizamos técnicas específicas e produtos de alta definição que garantem um resultado impecável nas fotos e vídeos oficiais.",
    },
    {
      question: "Fazem pacotes para grupos de formandos?",
      answer: "Sim, temos pacotes especiais com descontos progressivos para grupos de formandos da mesma turma.",
    },
    {
      question: "Quanto tempo dura o serviço?",
      answer: "O serviço leva em média 1 hora, e a maquiagem tem duração garantida de mais de 12 horas.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-para-formaturas-sao-paulo",
  serviceType: "Maquiagem para Formaturas",
  offers: [
    {
      price: 350,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  ],
};

const organizationData = {
  name: "Studio Amendolla Noivas",
  url: "https://www.studioamendollanoivas.com.br",
  description: "Especialistas em maquiagem profissional em São Paulo",
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
  keywords: ["maquiagem formatura", "makeup graduation", "maquiadora SP"],
};

const MaquiagemFormaturaSPPage = () => {
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
          caption: "Maquiagem para Formatura São Paulo",
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
            alt="Maquiagem para Formatura São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Sua Formatura Merece uma Produção Especial</h2>
          <p className={styles.description}>
            A formatura é um momento único que marca o fim de uma importante etapa da sua vida. 
            No Studio Amendolla, criamos uma maquiagem sofisticada que combina com a grandiosidade 
            dessa ocasião. Nossa equipe especializada utiliza técnicas e produtos premium para 
            garantir que você esteja deslumbrante nas fotos oficiais, na colação de grau e 
            durante toda a festa.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços para Formandos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Colação</h3>
            <p>Look sofisticado e duradouro para a cerimônia oficial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Maquiagem para colação e festa com retoque entre os eventos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Turma</h3>
            <p>Descontos especiais para grupos de formandos.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Formatura
      </a>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemFormaturaSPPage;