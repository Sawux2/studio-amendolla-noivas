"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Social Zona Norte SP | Studio Amendolla",
    description: 
      "Serviços de maquiagem social na Zona Norte de São Paulo. Atendimento em domicílio e no studio para festas, eventos e ocasiões especiais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemSocialZonaNortePage = () => {
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
            alt="Maquiagem Social na Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Referência em Beleza na Zona Norte</h2>
          <p>
            Studio localizado na Vila Gustavo, com fácil acesso e atendimento 
            personalizado. Também realizamos atendimento em domicílio em toda região.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20social%20na%20Zona%20Norte."
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
            <h3>Make no Studio</h3>
            <p>Ambiente aconchegante e bem localizado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make em Casa</h3>
            <p>Atendimento em domicílio na Zona Norte.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes Especiais</h3>
            <p>Descontos para grupos e eventos.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Importantes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais regiões atendem?</summary>
            <p>Toda Zona Norte e bairros próximos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso agendar antes?</summary>
            <p>Sim, recomendamos agendamento prévio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem estacionamento?</summary>
            <p>Sim, estacionamento fácil na região.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual o tempo de atendimento?</summary>
            <p>Aproximadamente 1 hora por pessoa.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemSocialZonaNortePage;
