"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Fotos e Vídeos | Studio Amendolla SP",
    description: 
      "Maquiagem profissional especializada para ensaios fotográficos e gravações em São Paulo. Técnicas avançadas para resultados perfeitos em câmera.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemFotosVideosPage = () => {
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
            alt="Maquiagem para Fotos e Vídeos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Perfeição em Cada Frame</h2>
          <p>
            Técnicas especializadas para fotogenia e videografia. Make que garante 
            resultados impecáveis em qualquer tipo de iluminação.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20maquiagem%20para%20ensaio%20fotográfico."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Ensaio
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especializados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Ensaios Fotográficos</h3>
            <p>Make perfeita para fotos profissionais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Gravações</h3>
            <p>Técnicas específicas para vídeo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Campanhas</h3>
            <p>Maquiagem para publicidade.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Técnicas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual iluminação funciona melhor?</summary>
            <p>A make é adaptada para qualquer lighting setup.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Funciona em 4K?</summary>
            <p>Sim, utilizamos produtos específicos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo de produção?</summary>
            <p>Em média 1h30 para make completa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem caracterização?</summary>
            <p>Não, maquiagem artística sob consulta, pois podemos indicar maquiadores mais especializados para esse tipo de maquiagem.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemFotosVideosPage;
