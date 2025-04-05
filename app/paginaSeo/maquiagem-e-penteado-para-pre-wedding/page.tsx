"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Pré-Wedding | Studio Amendolla",
    description:
      "Produção completa para deixar você radiante na sua sessão pré-wedding. Visual leve, romântico e com acabamento impecável para fotos eternas.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemPenteadoPreWeddingPage = () => {
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
            alt="Maquiagem e penteado para pré-wedding"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Visual Romântico e Natural para o Pré-Wedding</h2>
          <p className={styles.description}>
            A sessão pré-wedding é um momento único que merece um look leve, harmonioso e encantador. Nossa equipe prepara você com uma maquiagem iluminada e penteado personalizado que combinem com o cenário, o horário da sessão e o estilo do casal. O foco é realçar sua beleza com naturalidade, garantindo fotos espontâneas, elegantes e cheias de amor. Trabalhamos com técnicas e produtos que proporcionam longa duração e acabamento fotogênico.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20maquiagem%20e%20penteado%20para%20minha%20sessão%20pré-wedding."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção para o Pré-Wedding pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Produções para Pré-Wedding</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Romântica</h3>
            <p>Tons suaves e iluminados para valorizar sua beleza e criar um look leve e delicado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados com Movimento</h3>
            <p>Coques soltos, ondas naturais ou tranças modernas que combinam com a proposta da sessão.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look à Prova de Tempo</h3>
            <p>Fixação de longa duração para enfrentar vento, sol ou clima úmido sem preocupações.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Pré-Wedding</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês atendem no local da sessão?</summary>
            <p>Sim! Podemos ir até o local para garantir que tudo esteja impecável no momento das fotos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O que levar no dia da sessão?</summary>
            <p>Recomendamos levar um kit com batom, lencinhos e grampinhos extras. Ajudamos você com a checklist completa.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível trocar de penteado durante o ensaio?</summary>
            <p>Sim, se houver mais de um look, podemos planejar ajustes ou trocas rápidas entre as fotos.</p>
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

export default MaquiagemPenteadoPreWeddingPage;
