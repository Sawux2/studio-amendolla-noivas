"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Profissional Vila Ede | Studio Amendolla",
    description: 
      "Serviços de maquiagem profissional para Vila Ede no Studio Amendolla. Localizado na Vila Nivi, com fácil acesso da Vila Ede.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemVilaEdePage = () => {
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
            alt="Maquiagem Profissional Vila Ede"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza para Vila Ede</h2>
          <p>
            Nosso studio na Avenida Julio Buono, 2386, Vila Nivi, oferece serviços premium 
            de maquiagem com localização privilegiada para clientes da Vila Ede.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20(Vila%20Ede)."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Horário
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Social</h3>
            <p>Para eventos e ocasiões especiais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Noivas</h3>
            <p>Especialidade em casamentos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Festas</h3>
            <p>Produções para celebrações.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações do Studio</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Localização do studio?</summary>
            <p>Avenida Julio Buono, 2386 - Vila Nivi, próximo à Vila Ede.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como chegar da Vila Ede?</summary>
            <p>Acesso rápido, apenas alguns minutos da Vila Ede.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem atendimento em domicílio?</summary>
            <p>Sim, atendemos na Vila Ede e região.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Horários disponíveis?</summary>
            <p>Atendimento flexível todos os dias.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemVilaEdePage;
