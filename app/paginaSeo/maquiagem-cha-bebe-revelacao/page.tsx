"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Chá de Bebê e Revelação | Studio Amendolla",
    description: 
      "Maquiagem profissional especializada para chá de bebê e revelação em São Paulo. Looks delicados e marcantes para futuras mamães e convidadas.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemChaBebePage = () => {
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
            alt="Maquiagem para Chá de Bebê"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza para Momentos Únicos</h2>
          <p>
            Looks especiais que valorizam o brilho natural da gestante. Maquiagem 
            delicada e duradoura para registrar cada momento dessa celebração especial.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20maquiagem%20para%20chá%20de%20bebê."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Make
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make para Gestantes</h3>
            <p>Produtos seguros e hipoalergênicos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make para Convidadas</h3>
            <p>Looks coordenados para toda família.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes Especiais</h3>
            <p>Descontos para grupos e familiares.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Os produtos são seguros para gestantes?</summary>
            <p>Sim, utilizamos produtos específicos e seguros.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem maquiagem temática?</summary>
            <p>Sim, adaptamos ao tema da sua celebração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem no local do evento?</summary>
            <p>Sim, nos deslocamos até o local da festa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual o tempo de duração?</summary>
            <p>Em média 45 minutos por pessoa.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemChaBebePage;
