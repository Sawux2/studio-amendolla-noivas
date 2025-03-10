"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Noivas Negras Zona Norte SP | Studio Amendolla",
    description: 
      "Especialistas em maquiagem para noivas negras na Zona Norte de São Paulo. Realçamos sua beleza natural com técnicas exclusivas e produtos específicos para pele negra.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemNoivasNegrasZonaNortePage = () => {
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
            alt="Maquiagem para Noivas Negras na Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Referência em Beleza Negra na Zona Norte</h2>
          <p>
            Studio localizado na Zona Norte de São Paulo, com fácil acesso e estrutura 
            completa. Equipe especializada em valorizar a beleza única de cada noiva negra.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20noivas%20negras%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Diferenciais</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Expertise em Pele Negra</h3>
            <p>Profissionais especializados em diferentes tons de pele negra.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Localização Privilegiada</h3>
            <p>Fácil acesso na Zona Norte de São Paulo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Atendimento Personalizado</h3>
            <p>Consultoria completa para seu grande dia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Onde fica o studio?</summary>
            <p>Estamos localizados na Vila Gustavo, Zona Norte de SP.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste de maquiagem?</summary>
            <p>Sim, o teste é fundamental para garantir o resultado perfeito.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem em domicílio?</summary>
            <p>Sim, atendemos em toda região da Zona Norte.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais produtos usam?</summary>
            <p>Utilizamos marcas premium especializadas em pele negra.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemNoivasNegrasZonaNortePage;
