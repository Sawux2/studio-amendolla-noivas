"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Ensaio Fotográfico Feminino | Studio Amendolla",
    description:
      "Produção ideal para valorizar sua beleza nas lentes. Maquiagem com acabamento fotográfico e durabilidade, perfeita para todos os tipos de ensaio.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemParaEnsaioPage = () => {
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
            alt="Maquiagem para ensaio fotográfico feminino"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza em Cada Clique</h2>
          <p className={styles.description}>
            A maquiagem certa faz toda a diferença no resultado de um ensaio fotográfico. No Studio Amendolla, criamos produções que valorizam seus traços, iluminam sua pele e resistem às lentes e à iluminação do estúdio ou do ambiente externo. Seja para um ensaio profissional, pessoal, sensual ou de branding, garantimos um acabamento impecável e natural, com produtos de alta performance e técnicas específicas para fotografia.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20ensaio%20fotográfico."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Ensaio Fotográfico pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Tipos de Maquiagem para Ensaio</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>Ideal para quem busca leveza e autenticidade, com foco na beleza realçada de forma sutil.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Editorial</h3>
            <p>Visual criativo e ousado, com elementos de moda e arte para ensaios temáticos ou conceituais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Estúdio</h3>
            <p>Acabamento matte e contornos precisos para suportar flashes, luzes e closes em alta definição.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Maquiagem para Ensaio</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual o melhor horário para o ensaio?</summary>
            <p>Depende do estilo: luz natural é ideal pela manhã ou fim de tarde. Para estúdio, o horário é mais flexível.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso levar alguma referência?</summary>
            <p>É sempre bom! Referências ajudam a alinhar expectativas e criar um look com sua identidade.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso fazer mais de um look no mesmo dia?</summary>
            <p>Sim! Planejamos a maquiagem de forma que facilite pequenas adaptações entre um look e outro.</p>
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

export default MaquiagemParaEnsaioPage;
