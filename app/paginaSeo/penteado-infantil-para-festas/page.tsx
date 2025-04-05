"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado Infantil para Festas e Ensaios | Studio Amendolla",
    description:
      "Encanto e delicadeza nos penteados infantis para festas, aniversários e ensaios. Cuidamos dos pequenos com carinho e estilo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoInfantilPage = () => {
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
            alt="Penteado infantil para festas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Delicadeza e Conforto para as Crianças</h2>
          <p className={styles.description}>
            No Studio Amendolla, criamos penteados infantis que encantam tanto os pequenos quanto os adultos. Com muito carinho, atenção e técnicas suaves, desenvolvemos penteados que respeitam a sensibilidade e a personalidade da criança, mantendo conforto durante todo o evento. Seja para aniversários, batizados, festas temáticas ou ensaios fotográficos, garantimos um visual fofo, arrumado e cheio de estilo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20infantil."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende um Penteado Infantil pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Opções de Penteado Infantil</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coques com Laços</h3>
            <p>Elegância e charme para festas mais formais, com acabamento delicado e acessórios infantis.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tranças Criativas</h3>
            <p>Estilo divertido e funcional para eventos longos, com tranças embutidas, laterais ou coroa.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Soltinho com Presilhas</h3>
            <p>Look leve e romântico com ondas suaves e acessórios coloridos para dar aquele toque especial.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado Infantil</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura o penteado?</summary>
            <p>Em média de 30 a 45 minutos, dependendo do tipo de cabelo e do estilo escolhido.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O penteado dura a festa inteira?</summary>
            <p>Sim, usamos técnicas e produtos leves e seguros que mantêm o penteado firme por várias horas.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível usar acessórios no penteado?</summary>
            <p>Com certeza! Temos laços, flores, presilhas e tiaras para deixar o visual ainda mais encantador.</p>
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

export default PenteadoInfantilPage;
