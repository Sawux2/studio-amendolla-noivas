"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Peles Negras e Morenas | Studio Amendolla",
    description:
      "Realce sua beleza com maquiagem pensada para valorizar a tonalidade e a textura da pele negra e morena. Studio Amendolla, especialista em diversidade.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemPelesNegrasPage = () => {
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
            alt="Maquiagem para peles negras e morenas"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza com Representatividade</h2>
          <p className={styles.description}>
            Cada tom de pele é único e merece uma maquiagem que respeite suas nuances e características. No Studio Amendolla, temos ampla experiência em maquiagens para peles negras e morenas, utilizando produtos com pigmentação adequada, bases no tom ideal e técnicas que iluminam e destacam a beleza real de cada cliente. Seja para eventos, fotos, festas ou no dia a dia, garantimos um acabamento impecável e duradouro, com atenção aos detalhes e respeito à sua identidade.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20pele%20negra%20ou%20morena."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Pele Negra ou Morena pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Técnicas e Estilos para Peles Negras</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem com Iluminador Dourado</h3>
            <p>Destaca os pontos altos do rosto com brilho natural e elegante, ideal para peles morenas e negras.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Contorno Suave e Preciso</h3>
            <p>Define os traços respeitando a estrutura do rosto e evitando tons acinzentados.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Olho Esfumado com Tons Quentes</h3>
            <p>Cores como cobre, vinho e marrom valorizam os olhos com sofisticação e harmonia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas sobre Maquiagem para Peles Negras e Morenas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês têm base para todos os tons de pele?</summary>
            <p>Sim! Trabalhamos com uma ampla cartela de tons e subtons, garantindo o match perfeito com sua pele.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como evitar que a maquiagem fique acinzentada?</summary>
            <p>Utilizamos produtos com pigmentação adequada e técnicas específicas para evitar esse efeito.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível fazer maquiagem leve para pele negra?</summary>
            <p>Sim, e fica maravilhosa! A maquiagem leve destaca a beleza natural e proporciona um visual fresco e iluminado.</p>
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

export default MaquiagemPelesNegrasPage;
