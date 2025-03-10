"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Iluminada para Noivas Negras | Studio Amendolla SP",
    description: 
      "Técnicas exclusivas de iluminação para noivas negras. Realce seus traços naturais com um glow sofisticado que valoriza a beleza da pele negra.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
};

const MaquiagemIluminadaNoivasNegrasPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiagem Iluminada para Noivas Negras"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Arte em Iluminação</h2>
          <p>
            Dominamos as técnicas mais avançadas de iluminação facial para pele negra, 
            criando um efeito radiante e sofisticado que realça sua beleza natural.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20iluminada%20para%20noivas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Glow
      </a>

      <section className={styles.servicesSection}>
        <h2>Técnicas de Iluminação</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Glow Personalizado</h3>
            <p>Iluminação adaptada ao seu subtom de pele.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Strobing Profissional</h3>
            <p>Técnica avançada de iluminação facial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Bronzeamento Natural</h3>
            <p>Efeito sun-kissed para pele negra.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Iluminação</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O iluminador fica natural?</summary>
            <p>Sim, usamos produtos específicos para pele negra.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Funciona em fotos?</summary>
            <p>Sim, a iluminação é pensada para fotogenia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual tipo de brilho?</summary>
            <p>Personalizado conforme seu estilo e tom de pele.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Dura o dia todo?</summary>
            <p>Sim, utilizamos técnicas de fixação especiais.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemIluminadaNoivasNegrasPage;
