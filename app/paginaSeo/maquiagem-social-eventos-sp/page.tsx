"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Social para Eventos SP | Studio Amendolla",
    description: 
      "Maquiagem profissional para eventos sociais em São Paulo. Looks perfeitos para aniversários, chás de bebê, formaturas e festas especiais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemSocialEventosPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem Social para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza para Todos os Momentos</h2>
          <p>
            Looks personalizados para cada tipo de evento. Do mais natural ao mais 
            elaborado, criamos a maquiagem perfeita para sua ocasião especial.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20social%20para%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Make
      </a>

      <section className={styles.servicesSection}>
        <h2>Tipos de Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Aniversários</h3>
            <p>Make especial para sua festa de aniversário.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Chá de Bebê</h3>
            <p>Looks delicados para futuras mamães.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Formaturas</h3>
            <p>Maquiagem marcante para sua conquista.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Fazem atendimento em domicílio?</summary>
            <p>Sim, atendemos em toda São Paulo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o serviço?</summary>
            <p>Em média 1 hora para maquiagem completa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso levar referências?</summary>
            <p>Recomendamos, mas temos um portfólio variado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem grupos?</summary>
            <p>Sim, temos pacotes especiais para grupos.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemSocialEventosPage;
