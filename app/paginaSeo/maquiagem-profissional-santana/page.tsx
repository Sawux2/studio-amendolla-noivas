"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional em Tucuruvi SP | Studio Amendolla",
    description: 
      "Serviços de maquiagem profissional em Tucuruvi, São Paulo. Atendimento especializado para eventos, festas e ocasiões especiais na região.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemTucuruviPage = () => {
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
            alt="Maquiagem Profissional em Tucuruvi"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Excelência em Tucuruvi</h2>
          <p>
            Studio localizado em ponto privilegiado de Tucuruvi, com fácil acesso. 
            Atendimento personalizado e estrutura completa para sua produção.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20em%20Tucuruvi."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Social</h3>
            <p>Para eventos e ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Noivas</h3>
            <p>Especialistas em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Festas</h3>
            <p>Looks para todas as celebrações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Úteis</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde fica o studio?</summary>
            <p>Localizado no coração de Tucuruvi.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem estacionamento?</summary>
            <p>Sim, estacionamento fácil na região.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem aos domingos?</summary>
            <p>Sim, mediante agendamento prévio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem domicílio?</summary>
            <p>Sim, atendemos em toda região.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemTucuruviPage;
