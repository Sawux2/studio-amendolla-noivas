"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Book Fotográfico | Studio Amendolla",
    description:
      "Beleza e expressão sob medida para seu ensaio fotográfico. Maquiagem ideal para books profissionais, pessoais ou editoriais.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemBookFotograficoPage = () => {
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
            alt="Maquiagem para ensaio fotográfico"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Profissional para Ensaios Incríveis</h2>
          <p className={styles.description}>
            Seja para um book profissional, pessoal ou editorial, a maquiagem para fotos deve realçar seus traços com naturalidade e impacto. No Studio Amendolla, criamos visuais sob medida para cada estilo de ensaio, sempre considerando iluminação, ângulos e direção de arte. Utilizamos técnicas de maquiagem HD e produtos de alta performance para garantir uma pele perfeita em cada clique. Nosso objetivo é que você se sinta confiante, autêntica e fotogênica em cada imagem.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20book%20fotográfico."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Book Fotográfico no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Estilos de Maquiagem para Ensaio</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Look Natural</h3>
            <p>Ideal para ensaios em luz natural ou lifestyle, com acabamento leve e luminoso.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Editorial</h3>
            <p>Visual mais marcante e artístico, com cores, texturas e contrastes que realçam sua expressão.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Produção para Book Profissional</h3>
            <p>Maquiagem com foco em realce de traços, indicada para modelos, atores e currículos profissionais.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Maquiagem para Book</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo antes devo fazer a maquiagem?</summary>
            <p>Recomendamos que a produção comece de 1h30 a 2h antes do início do ensaio fotográfico.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês vão até o estúdio fotográfico?</summary>
            <p>Sim, oferecemos atendimento no local da sessão, com possibilidade de retoques durante o ensaio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso fazer mais de um look?</summary>
            <p>Claro! É possível realizar mudanças leves de maquiagem entre um look e outro, com agendamento prévio.</p>
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

export default MaquiagemBookFotograficoPage;
