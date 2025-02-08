"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Estilo de Maquiagem de Casamento São Paulo | Studio Amendolla",
    description:
      "Escolher o estilo de maquiagem ideal para o seu casamento é essencial para garantir um visual deslumbrante no grande dia. No Studio Amendolla, oferecemos maquiagem de casamento personalizada para noivas em São Paulo, com produtos de alta qualidade.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-sao-paulo.webp",
  },
  services: [
    {
      title: "Estilo de Maquiagem de Casamento em São Paulo",
      description:
        "No Studio Amendolla, oferecemos diversos estilos de maquiagem para casamento, personalizando cada detalhe para que você se sinta maravilhosa no seu grande dia. Seja clássica, moderna ou natural, temos a opção perfeita para você.",
      image: "/images/maquiagem-casamento-sao-paulo.webp",
    },
  ],
  faq: [
    {
      question: "Quais estilos de maquiagem de casamento são oferecidos?",
      answer: "Oferecemos uma variedade de estilos, incluindo maquiagem clássica, natural e moderna, para atender a diferentes gostos e preferências da noiva.",
    },
    {
      question: "Como escolher o estilo de maquiagem para o casamento?",
      answer: "Durante uma consulta, nossa equipe ajudará a identificar o estilo de maquiagem que melhor combina com seu visual e tema de casamento.",
    },
    {
      question: "É possível fazer um teste de maquiagem?",
      answer: "Sim, oferecemos a opção de agendar um teste para que você possa experimentar o estilo de maquiagem antes do grande dia e garantir que fique perfeito.",
    },
  ],
  images: [
    {
      url: "/images/maquiagem-casamento-sao-paulo.webp",
      description: "Maquiagem de casamento em São Paulo",
      width: 800,
      height: 600,
      name: "Maquiagem de Casamento",
      datePublished: "2025-02-01",
    },
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://www.studioamendollanoivas.com.br",
    },
    {
      name: "Serviços",
      url: "https://www.studioamendollanoivas.com.br/servicos",
    },
    {
      name: "Maquiagem de Casamento",
      url: "https://www.studioamendollanoivas.com.br/servicos/maquiagem-casamento",
    },
  ],
  localBusiness: {
    name: "Studio Amendolla Noivas",
    address: {
      streetAddress: "Rua Exemplo, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01234-567",
      addressCountry: "BR",
    },
    telephone: "+5511999999999",
    email: "contato@studioamendollanoivas.com.br",
    url: "https://www.studioamendollanoivas.com.br",
    openingHours: "Mo-Fr 09:00-18:00",
    image: "/images/logo.webp",
    priceRange: "$$$",
  },
};

const EstiloDeMaquiagemDeCasamentoSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Estilo de Maquiagem de Casamento em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos maquiagens de casamento que realçam sua beleza única. Seja para um look clássico e atemporal ou algo mais moderno e ousado, nossa equipe vai garantir que você se sinta confiante e radiante no seu casamento.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20de%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Casamento no WhatsApp
      </a>

      {/* Seção de Estilos de Maquiagem */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Estilos de Maquiagem para Casamento em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clássica</h3>
            <p>
              A maquiagem clássica para casamento é sofisticada e atemporal, perfeita para noivas que buscam um visual elegante e tradicional.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para noivas que desejam um look mais leve e fresco, a maquiagem natural realça a beleza de forma suave e delicada.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Moderna</h3>
            <p>
              A maquiagem moderna oferece um visual contemporâneo e ousado, com produtos de alta performance para um acabamento perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Estilos de Maquiagem de Casamento</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de maquiagem de casamento são oferecidos?</h3>
            <p>
              Oferecemos uma variedade de estilos, incluindo maquiagem clássica, natural e moderna, para atender a diferentes gostos e preferências da noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como escolher o estilo de maquiagem para o casamento?</h3>
            <p>
              Durante uma consulta, nossa equipe ajudará a identificar o estilo de maquiagem que melhor combina com seu visual e tema de casamento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>É possível fazer um teste de maquiagem?</h3>
            <p>
              Sim, oferecemos a opção de agendar um teste para que você possa experimentar o estilo de maquiagem antes do grande dia e garantir que fique perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default EstiloDeMaquiagemDeCasamentoSPPage;