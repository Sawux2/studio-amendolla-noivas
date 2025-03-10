"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Vila Nivi | Studio Amendolla",
    description: 
      "Studio Amendolla: referência em maquiagem profissional na Vila Nivi. Localizado na Avenida Julio Buono, 2386, atendendo toda região da Zona Norte de SP.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemVilaNiviPage = () => {
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
            alt="Maquiagem Profissional Vila Nivi"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Studio Referência na Vila Nivi</h2>
          <p>
            Localizado estrategicamente na Avenida Julio Buono, 2386, Vila Nivi, nosso studio atende 
            clientes de toda Zona Norte com excelência em maquiagem profissional.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20na%20Vila%20Nivi."
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
        <h2>Informações do Studio</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde fica o studio?</summary>
            <p>Avenida Julio Buono, 2386 - Vila Nivi, próximo ao Tucuruvi e Vila Gustavo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais regiões atendem?</summary>
            <p>Vila Nivi, Tucuruvi, Vila Gustavo, Jardim Brasil e toda Zona Norte.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como chegar?</summary>
            <p>Fácil acesso, próximo ao metrô Tucuruvi.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem atendimento em domicílio?</summary>
            <p>Sim, atendemos em toda região da Zona Norte.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemVilaNiviPage;
