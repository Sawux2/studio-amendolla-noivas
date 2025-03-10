"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Ocasiões Especiais | Studio Amendolla",
    description: 
      "Maquiagem profissional para momentos únicos em São Paulo. Looks personalizados para jantares, encontros, eventos sociais e celebrações importantes.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemOcasoesEspeciaisPage = () => {
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
            alt="Maquiagem para Ocasiões Especiais"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza para Cada Momento</h2>
          <p>
            Do jantar romântico ao evento social, criamos looks exclusivos 
            que combinam com sua personalidade e a ocasião.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20ocasião%20especial."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserve seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Tipos de Ocasiões</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Jantares Especiais</h3>
            <p>Make sofisticada para noites memoráveis.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Eventos Sociais</h3>
            <p>Looks elegantes para qualquer celebração.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Encontros</h3>
            <p>Maquiagem natural e marcante.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Posso escolher o estilo?</summary>
            <p>Sim, a make é totalmente personalizada.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo de duração?</summary>
            <p>Em média 8-10 horas de durabilidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso levar referências?</summary>
            <p>Opcional, mas ajuda na comunicação.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Horários flexíveis?</summary>
            <p>Sim, inclusive atendimento noturno.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemOcasoesEspeciaisPage;
