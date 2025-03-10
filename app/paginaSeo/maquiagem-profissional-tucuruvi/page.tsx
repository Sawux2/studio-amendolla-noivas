"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Tucuruvi | Studio Amendolla",
    description: 
      "Serviços de maquiagem profissional no Tucuruvi, São Paulo. Atendimento especializado para eventos, festas e produções na Zona Norte.",
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
            alt="Maquiagem Profissional Tucuruvi"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza no Tucuruvi</h2>
          <p>
            Atendimento de alto padrão no Tucuruvi. Estrutura moderna e equipe 
            especializada para sua produção perfeita.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20no%20Tucuruvi."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Disponíveis</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Eventos</h3>
            <p>Looks para ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Noivas</h3>
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Social</h3>
            <p>Para festas e comemorações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Locais</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como chegar ao studio?</summary>
            <p>Fácil acesso próximo ao metrô Tucuruvi.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atende regiões próximas?</summary>
            <p>Sim, toda região do Tucuruvi e adjacências.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Dias de atendimento?</summary>
            <p>Todos os dias mediante agendamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Faz atendimento em casa?</summary>
            <p>Sim, disponível para toda região.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemTucuruviPage;
