"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Atendimento Domicílio Penteado | Studio Amendolla",
    description:
      "Penteados deslumbrantes no conforto da sua casa com o atendimento domiciliar do Studio Amendolla. Profissionais experientes para um visual perfeito.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/atendimento-domicilio-maquiagem.webp",
  },
};

const AtendimentoDomicilioPenteadoPage = () => {
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
            alt="Atendimento Domicílio Penteado"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Penteados Profissionais em Casa</h2>
          <p>
            Realce sua beleza com nossos penteados profissionais, agora disponíveis em domicílio.  Do clássico ao moderno, criamos o penteado perfeito para você, no conforto do seu lar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20de%20penteado."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Atendimento Domiciliar de Penteado no WhatsApp
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Penteado em Domicílio</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteados para Casamento</h3>
            <p>Penteados elegantes e sofisticados para noivas, madrinhas e convidadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados para Formatura</h3>
            <p>Penteados modernos e glamorosos para você arrasar na sua formatura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados para Festas</h3>
            <p>Do clássico ao despojado, criamos o penteado ideal para qualquer festa.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Atendimento Domiciliar de Penteado</h2>
        <div className={styles.faqGrid}>
          {/* Add FAQ questions and answers specific to penteado */}
          <details className={styles.faqItem}>
            <summary>Quanto tempo leva em média para fazer um penteado em domicílio?</summary>
            <p>O tempo varia de acordo com a complexidade do penteado, mas em média, leva de 1 a 2 horas.</p>
          </details>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default AtendimentoDomicilioPenteadoPage;
