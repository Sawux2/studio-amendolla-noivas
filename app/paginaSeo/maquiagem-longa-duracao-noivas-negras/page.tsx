"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem de Longa Duração para Noivas Negras | Studio Amendolla",
    description: 
      "Técnicas avançadas de maquiagem de longa duração para noivas negras em São Paulo. Produtos específicos e métodos exclusivos para uma make à prova de festa.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemLongaDuracaoNoivasNegrasPage = () => {
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
            alt="Maquiagem Longa Duração para Noivas Negras"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Tecnologia em Maquiagem</h2>
          <p>
            Combinamos produtos de última geração com técnicas avançadas para garantir 
            uma maquiagem impecável que dura todo o evento, resistente ao calor e emoção.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20de%20longa%20duração."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Make
      </a>

      <section className={styles.servicesSection}>
        <h2>Técnicas Exclusivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Preparação Especial</h3>
            <p>Skincare específico para maior durabilidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Produtos Waterproof</h3>
            <p>Maquiagem à prova d´água e suor.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fixação Profissional</h3>
            <p>Técnicas avançadas de fixação para pele negra.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Durabilidade</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a make?</summary>
            <p>Em média 12-16 horas com a preparação adequada.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Resiste ao calor?</summary>
            <p>Sim, utilizamos produtos específicos para alta temperatura.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É à prova d´água?</summary>
            <p>Sim, resistente a lágrimas e umidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Precisa de retoques?</summary>
            <p>Geralmente não, mas fornecemos kit para emergências.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemLongaDuracaoNoivasNegrasPage;
