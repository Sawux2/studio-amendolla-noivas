"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Casamento de Dia | Studio Amendolla SP",
    description: 
      "Maquiagem profissional especializada para casamentos diurnos em São Paulo. Técnicas exclusivas que garantem uma produção natural e duradoura sob a luz do dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemCasamentoDiaPage = () => {
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
            alt="Maquiagem para Casamento de Dia"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Especialistas em Casamentos Diurnos</h2>
          <p>
            Criamos looks sofisticados e naturais, perfeitos para a luz do dia. 
            Utilizamos técnicas especiais e produtos de alta fixação que garantem 
            uma maquiagem impecável durante toda a celebração.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20casamento%20de%20dia."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Casamento Diurno</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Natural Luminosa</h3>
            <p>Maquiagem leve e radiante, ideal para luz natural.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Duradouros</h3>
            <p>Técnicas especiais para maior durabilidade ao ar livre.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo Dia</h3>
            <p>Produção completa adaptada para cerimônias diurnas.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes - Casamento de Dia</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Como garantir a durabilidade da make?</summary>
            <p>Utilizamos produtos específicos e técnicas de fixação para maior durabilidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual o melhor horário para começar a produção?</summary>
            <p>Recomendamos iniciar 4 horas antes da cerimônia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A maquiagem fica boa nas fotos?</summary>
            <p>Sim, usamos produtos fotogênicos que ficam perfeitos em fotos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste prévio?</summary>
            <p>Sim, o teste é fundamental para definir o look ideal.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemCasamentoDiaPage;
