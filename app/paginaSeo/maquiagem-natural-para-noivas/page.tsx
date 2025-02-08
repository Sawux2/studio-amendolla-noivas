"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem Natural para Noivas | Studio Amendolla",
    description:
      "No Studio Amendolla, oferecemos maquiagem natural para noivas, destacando sua beleza de forma suave e elegante. Nosso serviço é perfeito para quem busca um look fresco e delicado no grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-natural-para-noivas.webp",
  },
};

const MaquiagemNaturalParaNoivasPage = () => {
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
            src={pageData.article.image} // URL da imagem
            alt="Maquiagem Natural para Noivas"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Natural para Noivas</h2>
          <p className={styles.description}>
            No Studio Amendolla, acreditamos que a maquiagem natural é a escolha perfeita para noivas que desejam um visual leve, suave e elegante no grande dia. Nosso objetivo é realçar sua beleza sem esconder suas características naturais, criando um look fresco e atemporal. A maquiagem natural para noivas é ideal para quem quer um resultado delicado, porém sofisticado, para brilhar de forma autêntica e confiante no altar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20natural%20para%20o%20meu%20casamento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Natural para Noivas no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Natural para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Base Leve e Natural</h3>
            <p>Aplicamos uma base leve e de alta qualidade, que garante uma pele radiante e sem pesar, preservando sua naturalidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Olhos Delicados</h3>
            <p>A maquiagem dos olhos é feita de forma suave, com tons neutros e técnicas que realçam o olhar sem exageros.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Toque Final Suave</h3>
            <p>Finalizamos o look com um toque suave nos lábios e nas maçãs do rosto, criando uma harmonia perfeita e natural para o grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem Natural para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que é maquiagem natural para noivas?</summary>
            <p>A maquiagem natural para noivas é um estilo que visa realçar a beleza natural da noiva, criando um look suave, fresco e elegante, sem exageros.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Qual é a diferença entre maquiagem natural e maquiagem tradicional para noivas?</summary>
            <p>A maquiagem natural é mais leve, com menos camadas e um efeito mais sutil. A maquiagem tradicional pode ser mais marcante e dramática, com maior cobertura e destaque.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar minha maquiagem natural para noivas diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem diretamente pelo WhatsApp ou através do nosso formulário de contato em nosso site.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <ServiceSimulator />
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default MaquiagemNaturalParaNoivasPage;
