"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Madrinhas de Casamento | Studio Amendolla",
    description: 
      "Maquiagem profissional exclusiva para madrinhas em São Paulo. Looks sofisticados e duradouros para complementar a beleza do casamento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
  
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", },
};

const MaquiagemMadrinhasCasamentoPage = () => {
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
            alt="Maquiagem para Madrinhas de Casamento"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza Especial para Madrinhas</h2>
          <p>
            Criamos looks elegantes que harmonizam com o estilo do casamento. 
            Nossas técnicas garantem uma maquiagem duradoura e fotogênica para 
            todas as madrinhas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20madrinhas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacotes para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pacote Essencial</h3>
            <p>Maquiagem profissional com produtos premium.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Completo</h3>
            <p>Maquiagem + penteado com atendimento VIP.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Grupo</h3>
            <p>Condições especiais para grupos de madrinhas.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações para Madrinhas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual o tempo de duração do serviço?</summary>
            <p>Em média 1 hora para maquiagem e 1 hora para penteado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste prévio?</summary>
            <p>Sim, oferecemos teste opcional para madrinhas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Atendem várias madrinhas juntas?</summary>
            <p>Sim, temos equipe para atender grupos simultaneamente.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Tem desconto para grupos?</summary>
            <p>Sim, oferecemos condições especiais para grupos.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemMadrinhasCasamentoPage;
