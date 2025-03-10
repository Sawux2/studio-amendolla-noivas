"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Debutantes e Festa de 15 Anos | Studio Amendolla",
    description: 
      "Maquiagem profissional para debutantes em São Paulo. Looks especiais para festa de 15 anos, ensaio fotográfico e eventos da debutante.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemDebutantesPage = () => {
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
            alt="Maquiagem para Debutantes"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Realçando a Beleza dos 15 Anos</h2>
          <p>
            Looks delicados e românticos que destacam a juventude. Make perfeita 
            para fotos, vídeos e toda a celebração dos 15 anos.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20debutante."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacote Debutante</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make para Festa</h3>
            <p>Look completo para a celebração.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Ensaio Fotográfico</h3>
            <p>Maquiagem especial para fotos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Família e Amigas</h3>
            <p>Looks coordenados para convidadas.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações Importantes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Fazem teste de make?</summary>
            <p>Sim, incluído no pacote debutante.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes agendar?</summary>
            <p>Recomendamos 3 meses de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem pacote completo?</summary>
            <p>Sim, incluindo ensaio e festa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem no local?</summary>
            <p>Sim, disponível para toda São Paulo.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemDebutantesPage;
