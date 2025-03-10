"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Beleza para Noivas SP | Studio Amendolla",
    description: 
      "Serviços premium de maquiagem e beleza para noivas em São Paulo. Especialistas em realçar a beleza natural da noiva com técnicas exclusivas e produtos de alta qualidade.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
},
};

const BelezaNoivasSPPage = () => {
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
            alt="Maquiagem e Beleza para Noivas SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Excelência em Beleza para Noivas</h2>
          <p>
            Referência em São Paulo, o Studio Amendolla oferece serviços exclusivos 
            de beleza para noivas. Nossa equipe especializada cria looks personalizados 
            que realçam sua beleza natural e garantem uma produção duradoura.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20e%20beleza%20para%20noivas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Consulta
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especializados</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Dia da Noiva Completo</h3>
            <p>Experiência exclusiva com todos os cuidados para seu grande dia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Técnicas avançadas e produtos premium para uma make duradoura.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Exclusivos</h3>
            <p>Criações únicas que valorizam seu estilo e personalidade.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Informações para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais regiões de SP atendem?</summary>
            <p>Atendemos toda São Paulo capital e região metropolitana.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quando fazer o teste?</summary>
            <p>Recomendamos o teste 30 dias antes do casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Trabalham com produtos hipoalergênicos?</summary>
            <p>Sim, utilizamos produtos específicos para peles sensíveis.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Oferecem pacote para noiva e madrinhas?</summary>
            <p>Sim, temos pacotes especiais para o grupo completo.</p>
          </details>
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default BelezaNoivasSPPage;
