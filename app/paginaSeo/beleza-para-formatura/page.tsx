"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Beleza para Formatura | Maquiagem e Penteado | Studio Amendolla",
    description: 
      "Pacotes completos de beleza para formatura em São Paulo. Maquiagem e penteado profissional para você brilhar no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const BelezaFormaturaPage = () => {
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
            alt="Beleza para Formatura"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Produções Especiais para Formandas</h2>
          <p>
            Celebre sua conquista com uma produção impecável. Nossa equipe especializada 
            criará um visual deslumbrante que combina com seu estilo e permanece perfeito 
            durante toda a cerimônia e festa.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20beleza%20de%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção de Formatura
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacotes para Formanda</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Maquiagem + penteado com teste prévio incluso.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Premium</h3>
            <p>Maquiagem profissional de longa duração.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Exclusivo</h3>
            <p>Penteados personalizados para seu estilo.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Beleza para Formatura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quando devo agendar?</summary>
            <p>Recomendamos agendar com 3 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Oferecem pacotes para turmas?</summary>
            <p>Sim, temos condições especiais para grupos de formandas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem no local da formatura?</summary>
            <p>Sim, nos deslocamos até o local do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A prova de maquiagem é obrigatória?</summary>
            <p>Recomendamos fortemente para garantir o resultado perfeito.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default BelezaFormaturaPage;
