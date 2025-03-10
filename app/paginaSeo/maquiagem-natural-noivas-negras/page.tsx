"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Natural para Noivas Negras | Studio Amendolla",
    description: 
      "Especialistas em maquiagem natural para noivas negras. Realce sua beleza com um acabamento suave e elegante que valoriza os traços naturais da pele negra.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemNaturalNoivasNegrasPage = () => {
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
            alt="Maquiagem Natural para Noivas Negras"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza Natural em Evidência</h2>
          <p>
            Técnicas exclusivas que realçam sua beleza natural, criando um visual 
            sofisticado e elegante que permanece perfeito durante toda a celebração.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20natural%20para%20noivas%20negras."
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
            <h3>Glow Natural</h3>
            <p>Iluminação suave que realça os pontos altos do rosto.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pele Impecável</h3>
            <p>Cobertura natural que mantém a textura da pele.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cores Harmoniosas</h3>
            <p>Paleta de cores que valoriza o subtom da sua pele.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Maquiagem Natural</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que é maquiagem natural?</summary>
            <p>É uma técnica que realça sua beleza mantendo um aspecto leve e sofisticado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A maquiagem natural dura?</summary>
            <p>Sim, utilizamos produtos de alta durabilidade com acabamento natural.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fica bem nas fotos?</summary>
            <p>Sim, a make é desenvolvida pensando na fotogenia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso personalizar o look?</summary>
            <p>Claro, adaptamos a make ao seu estilo mantendo a naturalidade.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemNaturalNoivasNegrasPage;
