"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Formatura – Solto, Preso e Trançado | Studio Amendolla",
    description:
      "Transforme sua noite de formatura com um penteado incrível! Criamos looks modernos e elegantes que valorizam o seu estilo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoFormaturaPage = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Penteado para formatura com estilo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza e Estilo no Seu Grande Momento</h2>
          <p className={styles.description}>
            A formatura é uma celebração inesquecível — e o penteado ideal faz toda a diferença para que você brilhe nesse dia. No Studio Amendolla, oferecemos penteados personalizados que combinam com o seu rosto, vestido e personalidade. Desde os clássicos até os mais ousados, garantimos um visual deslumbrante para você arrasar nas fotos e na pista de dança!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20formatura."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Penteado de Formatura pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Opções de Penteado para Formatura</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Solto</h3>
            <p>Ondas glamourosas, escovado liso ou volume natural – liberdade e sofisticação no seu visual.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Preso</h3>
            <p>Coques elegantes, rabos de cavalo altos ou baixos, com acabamento impecável e durabilidade para a noite inteira.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado com Tranças</h3>
            <p>Tranças embutidas, laterais ou combinadas com coque e meio-preso para um toque romântico e moderno.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado de Formatura</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo agendar meu penteado?</summary>
            <p>Recomendamos agendar com pelo menos 2 semanas de antecedência, especialmente em épocas de alta demanda.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O penteado dura a noite toda?</summary>
            <p>Sim! Nossas técnicas e produtos garantem longa duração, mesmo após muitas horas de festa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de penteado?</summary>
            <p>Sim, é possível agendar um teste prévio para definir o estilo ideal para sua formatura.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadoFormaturaPage;
