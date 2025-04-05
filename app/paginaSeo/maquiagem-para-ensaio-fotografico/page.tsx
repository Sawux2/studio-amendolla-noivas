"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Ensaio Fotográfico | Studio Amendolla",
    description:
      "Maquiagem profissional para ensaios fotográficos. Destaque sua beleza nas lentes com técnicas especiais e produtos de alta performance.",
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
            alt="Maquiagem para Ensaio Fotográfico"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Realce sua Beleza nas Fotos com Maquiagem Profissional</h2>
          <p className={styles.description}>
            A maquiagem para ensaios fotográficos exige técnica e bom gosto. No Studio Amendolla, criamos produções que valorizam seus traços, controlam o brilho e garantem que você esteja linda em qualquer ângulo. Seja para um ensaio feminino, gestante, casal ou profissional, adaptamos cada detalhe da maquiagem para que ela se destaque nas fotos, sem pesar ou comprometer a naturalidade. Trabalhamos com produtos de alta definição e longa duração, ideais para sessões em estúdio ou ao ar livre.
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
        <h2 className={styles.sectionTitle}>Maquiagens Especiais para Ensaios</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Look Natural</h3>
            <p>Ideal para quem busca realçar a beleza com leveza e elegância, sem exageros na produção.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamour</h3>
            <p>Perfeita para ensaios com um toque de sofisticação, brilho e impacto visual.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem HD</h3>
            <p>Técnica usada para capturar cada detalhe com perfeição em câmeras de alta resolução.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Maquiagem para Ensaios</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a maquiagem?</summary>
            <p>Em média, a maquiagem dura entre 6 a 8 horas, ideal para ensaios com longa duração.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso combinar com penteado?</summary>
            <p>Sim! Oferecemos pacotes com penteado e maquiagem para uma produção completa e prática.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em estúdios ou locações externas?</summary>
            <p>Sim, levamos toda a estrutura até o local da sessão, seja em estúdio, casa ou ambientes externos.</p>
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
