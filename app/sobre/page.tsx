// app/sobre/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import styles from 'app/styles/SobrePage.module.css';
import UnifiedSchemas, { ImageObjectProps } from 'app/schemas/UnifiedSchemas';
import ServiceSimulator from 'app/components/calculadora';

// Dados de SEO e schema
const pageData = {
  article: {
    headline: "Sobre o Studio Amendolla Noivas",
    description: "Descubra a história, valores e o compromisso do Studio Amendolla em tornar o seu grande dia ainda mais especial.",
    author: "Studio Amendolla Noivas",
    datePublished: "2024-11-05",
    image: "/images/priscila-helena-maquiadora-zona-norte.webp",
  },
  images: [
    {
      url: "/images/priscila-helena-maquiadora-zona-norte.webp",
      description: "Priscila Helena, maquiadora e proprietária do Studio Amendolla Noivas.",
      width: 800,
      height: 600,
      name: "Priscila Helena - Maquiadora",
      datePublished: "2024-11-05",
    },
  ] as ImageObjectProps[],
};

const SobrePage = () => {
  return (
    <div className={styles["sobre-container"]}>
      {/* Inserindo schemas dinâmicos para SEO */}
      <UnifiedSchemas pageData={pageData} />

      {/* Introdução com Imagem à Esquerda */}
      <section className={styles["intro-section"]}>
        <div className={styles["intro-content"]}>
          <div className={styles["image-container"]}>
            <Image
              src="/images/priscila-helena-maquiadora-zona-norte.webp"
              alt="Proprietária do Studio Amendolla"
              className={styles["intro-image"]}
              width={250}
              height={300}
              priority
            />
          </div>
          <div className={styles["intro-text"]}>
            <h1 className={styles["intro-title"]}>Bem-vindo ao Studio Amendolla Noivas</h1>
            <p className={styles["intro-description"]}>
              O Studio Amendolla é referência em maquiagem e penteados para noivas na Zona Norte de São Paulo. Sob a liderança de Priscila Helena, nossa missão é realçar a beleza natural e proporcionar uma experiência única e memorável para o seu grande dia.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={styles["differentials-section"]}>
        <h2 className={styles["section-title"]}>Por que escolher o Studio Amendolla?</h2>
        <div className={styles["differentials-grid"]}>
          <div
            className={styles["differential-card"]}
            style={{ backgroundImage: "url('/images/atendimento-exclusivo.webp')" }}
          >
            <h3>Atendimento Exclusivo</h3>
            <p>Foco total na noiva, com um atendimento personalizado e dedicado para tornar cada momento especial.</p>
          </div>
          <div
            className={styles["differential-card"]}
            style={{ backgroundImage: "url('/images/qualidade-premium.webp')" }}
          >
            <h3>Qualidade Premium</h3>
            <p>Produtos de alta qualidade e longa duração, garantindo um acabamento impecável para o seu evento.</p>
          </div>
          <div
            className={styles["differential-card"]}
            style={{ backgroundImage: "url('/images/experiencia-expertise.webp')" }}
          >
            <h3>Experiência e Expertise</h3>
            <p>Mais de 10 anos de experiência em penteados e maquiagem para noivas, com um histórico de clientes satisfeitos.</p>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className={styles["mission-section"]}>
        <h2 className={styles["section-title"]}>Nossa Missão</h2>
        <p className={styles["mission-quote"]}>
          &quot;Realçar a beleza natural de cada noiva e proporcionar tranquilidade e confiança no seu grande dia.&quot;
        </p>
      </section>
      <ServiceSimulator />
    </div>
  );
};

export default SobrePage;
