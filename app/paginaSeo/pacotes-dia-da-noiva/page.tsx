"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Pacotes Dia da Noiva | Studio Amendolla São Paulo",
    description: 
      "Pacotes exclusivos para o dia da noiva em São Paulo. Experiência completa de beleza com maquiagem, penteado e cuidados especiais para seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PacotesDiaNoivaPage = () => {
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
            alt="Pacotes Dia da Noiva"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Experiência Exclusiva para Noivas</h2>
          <p>
            Viva momentos únicos e inesquecíveis com nossos pacotes especialmente 
            desenvolvidos para noivas. Oferecemos um ambiente acolhedor e serviços 
            premium para tornar seu dia ainda mais especial.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20os%20pacotes%20dia%20da%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Conheça Nossos Pacotes
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Pacotes</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Premium</h3>
            <p>Teste + Dia da noiva completo com serviços exclusivos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Clássico</h3>
            <p>Maquiagem, penteado e teste prévio.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Personalizado</h3>
            <p>Monte seu pacote de acordo com suas necessidades.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre o Dia da Noiva</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que inclui no pacote completo?</summary>
            <p>Maquiagem, penteado, teste prévio e atendimento VIP.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo devo agendar?</summary>
            <p>Recomendamos agendamento com 6 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso incluir madrinhas no pacote?</summary>
            <p>Sim, temos opções especiais para incluir madrinhas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem atendimento em domicílio?</summary>
            <p>Sim, podemos realizar o serviço onde você preferir.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PacotesDiaNoivaPage;
