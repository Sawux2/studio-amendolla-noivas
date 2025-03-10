"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteados para Eventos | Studio Amendolla São Paulo",
    description: 
      "Penteados profissionais para todos os tipos de eventos em São Paulo. Criações exclusivas que valorizam seu estilo e permanecem impecáveis durante toda a celebração.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const PenteadosEventosPage = () => {
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
            alt="Penteados Profissionais para Eventos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Penteados Exclusivos para Cada Ocasião</h2>
          <p>
            Criamos penteados personalizados que combinam com seu estilo e a ocasião. 
            Nossa equipe especializada utiliza técnicas modernas e produtos de alta qualidade 
            para garantir que seu penteado permaneça perfeito durante todo o evento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20penteado."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços de Penteado</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteados para Casamento</h3>
            <p>Criações sofisticadas para noivas, madrinhas e convidadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados para Formatura</h3>
            <p>Estilos modernos e elegantes para sua colação de grau.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados para Festas</h3>
            <p>Looks versáteis para festas e eventos sociais.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Penteados</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo lavar o cabelo?</summary>
            <p>Recomendamos lavar o cabelo no dia anterior ao penteado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso levar referências?</summary>
            <p>Sim, é ótimo trazer fotos de referência para melhor entendermos seu estilo desejado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Fazem teste de penteado?</summary>
            <p>Sim, oferecemos teste de penteado para eventos especiais.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual a duração do penteado?</summary>
            <p>Nossos penteados são feitos para durar todo o evento, em média 12 horas.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadosEventosPage;
