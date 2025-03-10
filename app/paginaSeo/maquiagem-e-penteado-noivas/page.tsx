"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Noivas | Studio Amendolla",
    description:
      "Maquiagem e penteado impecáveis para noivas no Studio Amendolla. Realce sua beleza natural no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemPenteadoNoivasPage = () => {
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
            alt="Maquiagem e Penteado para Noivas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Realce sua Beleza no Seu Grande Dia</h2>
          <p>
            Oferecemos serviços de maquiagem e penteado profissional para noivas, com foco em realçar sua beleza natural e personalidade.  Criamos um visual inesquecível para o seu casamento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20maquiagem%20e%20penteado%20de%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento pelo WhatsApp
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noiva</h3>
            <p>Maquiagem à prova d´água e de longa duração, com produtos de alta qualidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado para Noiva</h3>
            <p>Penteados clássicos, modernos, ou o que você desejar para o seu grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Maquiagem e Penteado</h3>
            <p>Agende um teste para garantir o visual perfeito.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Maquiagem e Penteado para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em domicílio?</summary>
            <p>Sim, atendemos em domicílio para maior conforto da noiva.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais produtos vocês utilizam?</summary>
            <p>Trabalhamos com produtos de marcas renomadas e de alta qualidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes do casamento devo agendar o serviço?</summary>
            <p>Recomendamos agendar com pelo menos 6 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O teste de maquiagem e penteado está incluso no pacote?</summary>
            <p>O teste é um serviço à parte, mas essencial para garantir a satisfação da noiva.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemPenteadoNoivasPage;
