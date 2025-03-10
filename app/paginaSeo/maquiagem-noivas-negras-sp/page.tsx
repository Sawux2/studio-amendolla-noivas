"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Noivas Negras | Especialistas em São Paulo",
    description: 
      "Maquiagem profissional especializada para noivas negras em São Paulo. Valorizamos sua beleza natural com produtos específicos e técnicas exclusivas para pele negra.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemNoivasNegrasPage = () => {
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
            alt="Maquiagem Especializada para Noivas Negras"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Especialistas em Beleza Negra</h2>
          <p>
            Expertise em valorizar a beleza da pele negra com produtos específicos 
            e técnicas desenvolvidas para realçar seus traços naturais. Nossa equipe 
            é especializada em tons e subtons da pele negra.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20noivas%20negras."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consulta
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especializados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Personalizada</h3>
            <p>Produtos específicos para cada subtom de pele negra.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Técnicas Exclusivas</h3>
            <p>Métodos especiais para realçar a beleza da pele negra.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Produtos Premium</h3>
            <p>Marcas especializadas em pele negra.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais marcas utilizam?</summary>
            <p>Trabalhamos com as melhores marcas especializadas em pele negra.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como é feito o teste?</summary>
            <p>Realizamos um teste completo para encontrar os tons perfeitos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A maquiagem fica natural?</summary>
            <p>Sim, nosso foco é realçar sua beleza natural.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem experiência com pele negra?</summary>
            <p>Somos especialistas com anos de experiência em pele negra.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemNoivasNegrasPage;
