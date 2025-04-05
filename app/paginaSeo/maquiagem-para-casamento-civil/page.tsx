"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Casamento no Civil | Studio Amendolla",
    description:
      "Beleza natural e elegante para o seu casamento no civil. Maquiagem delicada, com acabamento impecável para o seu grande momento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemCasamentoCivilPage = () => {
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
            alt="Maquiagem para casamento no civil"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Suave e Atemporal para um Momento Especial</h2>
          <p className={styles.description}>
            A cerimônia civil também merece um toque de elegância e emoção. No Studio Amendolla, desenvolvemos maquiagens delicadas e sofisticadas para noivas que querem um visual leve, romântico e com acabamento impecável. Nossos profissionais utilizam técnicas que realçam a beleza natural e garantem uma pele radiante e duradoura para esse momento inesquecível.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20casamento%20no%20civil."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Maquiagem para Casamento no Civil
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Ideal para o Casamento Civil</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Look Clássico</h3>
            <p>Pele iluminada, olhos levemente esfumados e lábios neutros para uma aparência clean e sofisticada.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Toque Romântico</h3>
            <p>Visual delicado com tons rosados e frescos, perfeito para quem deseja um look suave e encantador.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Elegância Moderna</h3>
            <p>Estilo minimalista com destaque sutil nos olhos ou boca, para uma noiva contemporânea.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Casamento no Civil</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual estilo de maquiagem é mais indicado para o civil?</summary>
            <p>Estilos mais leves e naturais são os mais procurados, mas sempre adaptamos ao gosto da noiva.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A maquiagem dura o dia inteiro?</summary>
            <p>Sim! Utilizamos produtos de alta fixação e técnicas que garantem longa duração mesmo em ambientes abertos ou dias quentes.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de maquiagem para o civil?</summary>
            <p>Sim! O teste é uma ótima opção para definir o estilo ideal e alinhar expectativas com a noiva.</p>
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

export default MaquiagemCasamentoCivilPage;
