"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Pele Madura | Studio Amendolla",
    description:
      "Realce a sua beleza com leveza e sofisticação. Maquiagem para pele madura com técnicas que valorizam a naturalidade e iluminam o rosto.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemPeleMaduraPage = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem para pele madura"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Natural em Cada Fase da Vida</h2>
          <p className={styles.description}>
            A maquiagem para pele madura deve ser pensada com carinho, respeitando as características naturais e realçando a beleza com suavidade. No Studio Amendolla, utilizamos produtos específicos, texturas leves e técnicas que evitam o acúmulo em linhas de expressão. O resultado é uma maquiagem elegante, iluminada e confortável para ocasiões especiais ou uso diário.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20pele%20madura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Maquiagem para Pele Madura
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Ideal para a Pele Madura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Leve e Hidratante</h3>
            <p>Base com acabamento natural e produtos que tratam a pele enquanto embelezam.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Iluminação Suave</h3>
            <p>Uso estratégico de iluminadores e corretivos para revitalizar a expressão facial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Foco nos Olhos e Sobrancelhas</h3>
            <p>Realce do olhar com delineados sutis, sombras esfumadas e sobrancelhas bem definidas.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Pele Madura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Que tipo de base é recomendada?</summary>
            <p>Preferimos bases líquidas, leves e hidratantes, com acabamento luminoso para não marcar linhas finas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Maquiagem para pele madura dura bem ao longo do dia?</summary>
            <p>Sim, desde que sejam usados produtos adequados e finalizadores como brumas fixadoras e pós finos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível usar cores vibrantes?</summary>
            <p>Claro! Desde que sejam bem esfumadas e equilibradas com o restante do look, o colorido pode sim valorizar ainda mais o rosto.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemPeleMaduraPage;
