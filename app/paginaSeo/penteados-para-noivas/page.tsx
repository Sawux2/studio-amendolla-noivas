"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteados para Noivas | Studio Amendolla São Paulo",
    description: 
      "Penteados exclusivos para noivas em São Paulo. Criações sofisticadas que combinam com seu estilo e permanecem perfeitas durante toda a celebração.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const PenteadosNoivasPage = () => {
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
            alt="Penteados Exclusivos para Noivas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Arte em Penteados para Noivas</h2>
          <p>
            Criamos penteados únicos que valorizam seus traços e complementam seu vestido. 
            Nossa expertise garante um visual deslumbrante e duradouro para seu grande dia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20penteados%20para%20noivas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado
      </a>

      <section className={styles.servicesSection}>
        <h2>Estilos de Penteados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteados Clássicos</h3>
            <p>Elegância atemporal para noivas tradicionais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Modernos</h3>
            <p>Criações contemporâneas e despojadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Românticos</h3>
            <p>Looks delicados com trançados e ondulações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Penteados</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como escolher o penteado ideal?</summary>
            <p>Consideramos seu vestido, tipo de cabelo e estilo pessoal.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso fazer escova antes?</summary>
            <p>Recomendamos lavar o cabelo no dia anterior.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Trabalham com apliques?</summary>
            <p>Sim, oferecemos opções de alongamento e apliques.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O véu pode danificar o penteado?</summary>
            <p>Não, desenvolvemos técnicas especiais para uso com véu.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadosNoivasPage;
