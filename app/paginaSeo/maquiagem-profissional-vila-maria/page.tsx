"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Vila Maria | Studio Amendolla",
    description: 
      "Serviços especializados de maquiagem na Vila Maria, São Paulo. Atendimento premium para eventos sociais e produções na Zona Norte.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemVilaMariaPage = () => {
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
            alt="Maquiagem Profissional Vila Maria"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Excelência na Vila Maria</h2>
          <p>
            Studio completo com atendimento personalizado na Vila Nivi proximo a vila maria. 
            Profissionais experientes e produtos premium para sua produção.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20na%20Vila%20Maria."
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
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Festas</h3>
            <p>Produções para celebrações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Úteis</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde fica o studio?</summary>
            <p>Localização privilegiada na Vila Nivi , proximo a vila maria.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atende outras regiões?</summary>
            <p>Sim, toda a Zona Norte de SP.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Horários disponíveis?</summary>
            <p>Atendimento flexível todos os dias.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Faz make em domicílio?</summary>
            <p>Sim, disponível para toda região.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemVilaMariaPage;
