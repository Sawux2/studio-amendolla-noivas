"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem com Contorno para Noivas Negras | Studio Amendolla",
    description: 
      "Técnicas exclusivas de contorno facial para noivas negras em São Paulo. Valorizamos seus traços naturais com métodos profissionais que realçam a beleza da pele negra.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemContornoNoivasNegrasPage = () => {
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
            alt="Maquiagem com Contorno para Noivas Negras"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Expertise em Contorno</h2>
          <p>
            Dominamos as técnicas mais avançadas de contorno facial para pele negra, 
            criando dimensão e profundidade que valorizam seus traços naturais.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20com%20contorno%20para%20noivas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção
      </a>

      <section className={styles.servicesSection}>
        <h2>Técnicas Especializadas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Contorno Natural</h3>
            <p>Técnicas suaves que realçam seus traços.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Escultura Facial</h3>
            <p>Definição precisa das linhas do rosto.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Blush Dimensional</h3>
            <p>Técnica exclusiva de blush para pele negra.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Contorno</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O contorno fica natural?</summary>
            <p>Sim, trabalhamos com técnicas suaves e naturais.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais produtos usam?</summary>
            <p>Produtos específicos para cada subtom de pele negra.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Funciona em fotos?</summary>
            <p>Sim, o contorno é desenvolvido pensando na fotogenia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso escolher a intensidade?</summary>
            <p>Claro, adaptamos o contorno ao seu estilo.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemContornoNoivasNegrasPage;
