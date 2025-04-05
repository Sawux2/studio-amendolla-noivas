"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Noiva em São Paulo | Studio Amendolla",
    description:
      "Seu penteado de noiva perfeito em São Paulo. Estilo, elegância e longa duração para o dia mais importante da sua vida, com o toque especial do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoParaNoivaEmSPPage = () => {
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
            alt="Penteado para Noiva em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>O Penteado de Noiva dos Seus Sonhos, Criado com Amor e Técnica</h2>
          <p className={styles.description}>
            No Studio Amendolla, cada noiva é única — e seu penteado também. Somos especialistas em criar penteados elegantes, românticos ou modernos para noivas em São Paulo, levando em consideração o vestido, o estilo do casamento e, claro, sua personalidade. Seja um coque clássico, um semipreso com ondas ou penteado com tranças e flores, garantimos durabilidade, conforto e beleza em cada detalhe. Nossa missão é fazer você se sentir maravilhosa no altar, nas fotos e durante toda a celebração.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20noiva%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado de Noiva em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Penteado para Noiva</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coque Clássico ou Moderno</h3>
            <p>Perfeito para cerimônias formais, o coque pode ser personalizado com acessórios, tranças ou acabamento polido.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Ondas e Penteado Semipreso</h3>
            <p>Ideal para noivas românticas e naturais, com movimento leve e visual delicado.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fixação e Conforto para o Grande Dia</h3>
            <p>Usamos técnicas profissionais e produtos de qualidade para garantir que o penteado dure do making of à última dança.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Noiva em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Com quanto tempo de antecedência devo agendar o penteado?</summary>
            <p>O ideal é agendar o quanto antes, principalmente se sua data for nos meses de alta temporada de casamentos. Recomendamos pelo menos 60 dias de antecedência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem teste de penteado antes do casamento?</summary>
            <p>Sim! O teste é essencial para garantir que o penteado combine perfeitamente com seu rosto, vestido e estilo do evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível agendar o penteado e a maquiagem juntos?</summary>
            <p>Sim, oferecemos pacotes completos de penteado + maquiagem para noivas, com atendimento integrado no estúdio ou a domicílio.</p>
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

export default PenteadoParaNoivaEmSPPage;
