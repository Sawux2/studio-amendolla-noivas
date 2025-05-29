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
    headline: "Maquiagem para Festas e Eventos em São Paulo | Studio Amendolla",
    description:
      "Maquiagem clean e sofisticada para festas e eventos sociais em São Paulo. Realce sua beleza natural com técnicas modernas e produtos de alta performance que valorizam sua elegância.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: ["/images/maquiagem-festas-sp.webp"],
  },
};

const articleData = {
  headline: pageData.article.headline,
  description: pageData.article.description,
  author: pageData.article.author,
  datePublished: pageData.article.datePublished,
  image: pageData.article.image.map((img) => `https://www.studioamendollanoivas.com.br${img}`),
  url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-festas-eventos-sp",
};

const breadcrumbData = {
  items: [
    { name: "Início", item: "/", position: 1 },
    { name: "Serviços", item: "/servicos", position: 2 },
    { name: "Maquiagem para Festas", item: "/paginaSeo/maquiagem-para-festas-eventos-sp", position: 3 },
  ],
};

const faqData = {
  items: [
    {
      question: "Como é o processo de agendamento?",
      answer: "Basta entrar em contato via WhatsApp ou formulário do site. Recomendamos agendar com antecedência para garantir disponibilidade na data desejada.",
    },
    {
      question: "Quanto tempo dura a maquiagem?",
      answer: "Nossa maquiagem tem duração média de 12 horas, utilizando produtos de alta performance que mantêm o visual impecável durante todo o evento.",
    },
    {
      question: "Fazem atendimento em domicílio?",
      answer: "Sim, oferecemos serviço de maquiagem a domicílio em toda região de São Paulo para seu maior conforto.",
    },
    {
      question: "Qual é o diferencial da maquiagem clean?",
      answer: "Nossa maquiagem clean realça sua beleza natural de forma elegante, criando um visual sofisticado e atemporal, perfeito para fotos e eventos sociais.",
    }
  ],
};

const serviceSchemaData = {
  name: pageData.article.headline,
  description: pageData.article.description,
  provider: "Studio Amendolla",
  areaServed: "São Paulo",
  image: pageData.article.image,
  url: "/paginaSeo/maquiagem-para-festas-eventos-sp",
  serviceType: "Maquiagem para Eventos",
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
  keywords: ["maquiagem festa SP", "maquiagem evento", "make eventos"],
};

const MaquiagemFestasEventosSPPage = () => {
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
          caption: "Maquiagem para Festas e Eventos São Paulo",
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
            alt="Maquiagem para Festas e Eventos São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Sofisticada para Eventos Especiais</h2>
          <p className={styles.description}>
            No Studio Amendolla, cada maquiagem é uma expressão única de elegância e sofisticação. 
            Nossa equipe especializada cria looks personalizados que realçam sua beleza natural, 
            utilizando produtos premium e técnicas avançadas que garantem durabilidade e perfeição 
            durante todo o evento. Seja para uma festa de gala, evento social ou celebração especial, 
            você terá um visual deslumbrante que combina com sua personalidade.
          </p>
        </div>
      </div>

      <ContactForm />
      <GaleriaDeFotos />

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços para Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festas</h3>
            <p>Visual elegante e sofisticado para celebrações especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Convidadas</h3>
            <p>Looks personalizados que harmonizam com o evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes para Grupos</h3>
            <p>Atendimento especial para grupos com condições exclusivas.</p>
          </div>
        </div>
      </section>

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20festas%20e%20eventos."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Evento
      </a>

      <FeaturesCards />
    </div>
  );
};

export default MaquiagemFestasEventosSPPage;
