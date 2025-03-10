"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Festas e Comemorações | Studio Amendolla",
    description: 
      "Maquiagem profissional para festas e comemorações em São Paulo. Looks especiais para aniversários, chás de bebê, chás de revelação e eventos sociais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemFestasComemoracaoPage = () => {
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
            alt="Maquiagem para Festas e Comemorações"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Make para Momentos Especiais</h2>
          <p>
            Criamos looks personalizados para cada tipo de comemoração. Do mais natural 
            ao mais glamouroso, sua maquiagem será perfeita para a ocasião.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20festa."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserve seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Tipos de Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Aniversários</h3>
            <p>Make especial para aniversariantes e convidadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Chás Festivos</h3>
            <p>Looks delicados para chá de bebê e revelação.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Eventos Sociais</h3>
            <p>Maquiagem para jantares e confraternizações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual a duração da make?</summary>
            <p>Média de 8-12 horas com a preparação adequada.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem em domicílio?</summary>
            <p>Sim, em toda região de São Paulo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem pacotes para grupos?</summary>
            <p>Sim, descontos especiais para grupos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso marcar com antecedência?</summary>
            <p>Recomendamos agendamento prévio de 1 semana.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemFestasComemoracaoPage;
