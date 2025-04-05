"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Ensaio Fotográfico | Studio Amendolla",
    description:
      "Destaque sua beleza com maquiagem profissional ideal para ensaios fotográficos. Looks pensados para luz, câmera e emoção.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemEnsaioFotograficoPage = () => {
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
          <h2 className={styles.title}>Sua Melhor Versão Diante das Lentes</h2>
          <p className={styles.description}>
            A maquiagem para ensaio fotográfico vai além da beleza convencional – ela precisa valorizar seus traços sob luz intensa, flash e diferentes ângulos. No Studio Amendolla, criamos maquiagens personalizadas para realçar o melhor de você nas fotos, com técnicas de contorno, iluminação e acabamento de alta definição. Seja para book, pré-wedding, gestante ou editorial, cuidamos de cada detalhe para que você se sinta confiante e linda diante das câmeras.
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
        Agende Sua Maquiagem para Ensaio Fotográfico
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagens para Todos os Tipos de Ensaios</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Book Pessoal</h3>
            <p>Maquiagem com acabamento natural e sofisticado para destacar sua personalidade e beleza única em retratos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pré-Wedding</h3>
            <p>Visual romântico e atemporal para eternizar o amor nas lentes, com pele iluminada e olhos suaves.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Editorial ou Moda</h3>
            <p>Looks criativos ou conceituais, adaptados ao estilo da produção e necessidades da equipe fotográfica.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Ensaio</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura uma maquiagem para ensaio?</summary>
            <p>Em média, 1 hora. Ajustamos o tempo conforme o estilo desejado e o tipo de ensaio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>A maquiagem resiste ao calor e suor?</summary>
            <p>Sim! Utilizamos produtos de longa duração e à prova d’água para manter a beleza impecável durante todo o ensaio.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês fazem maquiagem no local do ensaio?</summary>
            <p>Sim! Atendemos no estúdio, em domicílio ou diretamente no local do ensaio, com toda a estrutura necessária.</p>
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

export default MaquiagemEnsaioFotograficoPage;
