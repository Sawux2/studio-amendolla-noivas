"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Vila Guilherme | Studio Amendolla",
    description: 
      "Serviços de maquiagem profissional na Vila Guilherme, São Paulo. Atendimento especializado para eventos sociais e produções na Zona Norte.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemVilaGuilhermePage = () => {
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
            alt="Maquiagem Profissional Vila Guilherme"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Referência na Vila Guilherme</h2>
          <p>
            Atendimento premium na região da Vila Guilherme. Studio completo com 
            estrutura moderna e profissionais especializados.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20na%20Vila%20Guilherme."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Disponíveis</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Eventos</h3>
            <p>Para todas as ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Noivas</h3>
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Social</h3>
            <p>Looks para o dia a dia.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Locais</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Localização do studio?</summary>
            <p>Fácil acesso na Vila Guilherme.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atende região próxima?</summary>
            <p>Sim, toda Zona Norte de SP.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Horário de funcionamento?</summary>
            <p>Atendimento flexível, inclusive fins de semana.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Faz atendimento em casa?</summary>
            <p>Sim, serviço disponível na região.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemVilaGuilhermePage;
