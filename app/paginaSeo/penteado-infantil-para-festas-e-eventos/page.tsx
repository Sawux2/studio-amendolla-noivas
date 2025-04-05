"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado Infantil para Festas e Eventos | Studio Amendolla",
    description:
      "Beleza e conforto para as pequenas! Criamos penteados infantis delicados e encantadores, perfeitos para festas, aniversários e eventos escolares.",
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
          <h2 className={styles.title}>Estilo, Delicadeza e Conforto para as Crianças</h2>
          <p className={styles.description}>
            Nossos penteados infantis são pensados para combinar charme, durabilidade e conforto. Seja para uma festa de aniversário, formatura escolar, batizado ou eventos especiais, cuidamos de cada detalhe com muito carinho. Trabalhamos com acessórios delicados, tranças, coques e estilos modernos que encantam crianças e pais. Toda a produção é feita com produtos suaves e técnicas seguras, respeitando o tempo e o bem-estar das pequenas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20infantil%20para%20festa."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende o Penteado Infantil pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Opções de Penteados Infantis</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Tranças Criativas</h3>
            <p>Tranças embutidas, laterais, com fitas e acessórios coloridos que encantam em qualquer ocasião.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Coques e Semi-presos</h3>
            <p>Estilos elegantes e duradouros, perfeitos para festas mais formais e eventos escolares.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Temáticos</h3>
            <p>Produções inspiradas em personagens ou temas da festa, com muito brilho e criatividade.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Penteado Infantil</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual a duração média do penteado infantil?</summary>
            <p>O penteado infantil leva de 30 a 45 minutos, dependendo da complexidade do estilo escolhido e da idade da criança.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Os produtos são seguros para crianças?</summary>
            <p>Sim, utilizamos apenas produtos suaves, infantis e hipoalergênicos, próprios para o público infantil.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>As crianças precisam lavar o cabelo antes do atendimento?</summary>
            <p>Sim, recomendamos que o cabelo esteja limpo e seco antes do penteado para melhor resultado e durabilidade.</p>
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
