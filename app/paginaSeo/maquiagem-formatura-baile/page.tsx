"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Formatura e Baile | Studio Amendolla",
    description: 
      "Maquiagem profissional para formatura em São Paulo. Looks glamourosos para formandas, mães e convidadas. Especialistas em maquiagem para colação e baile.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemFormaturaPage = () => {
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
            alt="Maquiagem para Formatura"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Glamour para sua Conquista</h2>
          <p>
            Looks sofisticados que combinam com a importância do momento. 
            Maquiagem de alta durabilidade para colação e baile.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20maquiagem%20para%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Formatura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make para Colação</h3>
            <p>Look elegante para a cerimônia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make para Baile</h3>
            <p>Glamour e durabilidade para a festa.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make para Familiares</h3>
            <p>Looks coordenados para toda família.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Importantes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo agendar?</summary>
            <p>Recomendamos 2-3 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste prévio?</summary>
            <p>Sim, oferecemos teste para formandas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A make aguenta a festa toda?</summary>
            <p>Sim, utilizamos técnicas de longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem pacotes para grupos?</summary>
            <p>Sim, descontos especiais para turmas.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemFormaturaPage;
