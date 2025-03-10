"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional para Eventos | Studio Amendolla",
    description:
      "Maquiagem profissional para eventos especiais no Studio Amendolla. Destaque-se em casamentos, formaturas, festas e muito mais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemProfissionalEventosPage = () => {
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
            alt="Maquiagem Profissional para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Impecável para Todos os Eventos</h2>
          <p>
            Realce sua beleza em qualquer evento com nossa maquiagem profissional.  De casamentos a festas, criamos o look perfeito para você brilhar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20maquiagem%20para%20um%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento pelo WhatsApp
      </a>

      <section className={styles.servicesSection}>
        <h2>Tipos de Maquiagem para Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Casamento</h3>
            <p>Looks sofisticados e elegantes para noivas, madrinhas e convidadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Formatura</h3>
            <p>Maquiagem glamorosa para você arrasar na sua formatura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Festas</h3>
            <p>Maquiagem para festas de aniversário, eventos corporativos e outras ocasiões.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Maquiagem para Eventos</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês fazem maquiagem em domicílio?</summary>
            <p>Sim, oferecemos o serviço de maquiagem em domicílio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a maquiagem?</summary>
            <p>A maquiagem é de longa duração, feita para resistir à festa inteira.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso levar meus próprios produtos?</summary>
            <p>Não, fornecemos todos os produtos necessários.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como faço para agendar o serviço?</summary>
            <p>Entre em contato pelo WhatsApp ou pelo formulário do site.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemProfissionalEventosPage;
