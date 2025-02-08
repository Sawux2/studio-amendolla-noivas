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
    headline: "Maquiagem Social para Noivas | Studio Amendolla",
    description:
      "Ofereça à sua beleza a sofisticação que ela merece com a maquiagem social para noivas do Studio Amendolla. Um look elegante e atemporal para brilhar no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-social-para-noivas.webp",
  },
};

const MaquiagemSocialParaNoivasPage = () => {
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
            alt="Maquiagem Social para Noivas"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Social Sofisticada para Noivas</h2>
          <p className={styles.description}>
            No Studio Amendolla, entendemos que cada noiva tem um estilo único. Por isso, oferecemos maquiagem social para noivas, criando um visual elegante, atemporal e perfeito para o grande dia. A maquiagem social é ideal para noivas que buscam um look clássico, sofisticado e de alta definição, que se mantenha impecável durante toda a cerimônia e recepção. Realçamos sua beleza com uma maquiagem que combina sofisticação e naturalidade, criando o equilíbrio perfeito para você brilhar.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20social%20para%20o%20meu%20casamento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Social para Noivas no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Social para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Olhos Bem Definidos</h3>
            <p>Nosso foco é criar um olhar marcante, com sombra sofisticada, delineado perfeito e cílios volumosos, garantindo que seus olhos se destaquem.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Base Impecável</h3>
            <p>Utilizamos bases de alta qualidade para garantir uma pele perfeita, com acabamento suave e duradouro, que vai durar durante toda a cerimônia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Lábios Sofisticados</h3>
            <p>Finalizamos o look com lábios impecáveis, usando batons que garantem uma cor vibrante e de longa duração, complementando o visual social da noiva.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem Social para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>O que é maquiagem social para noivas?</summary>
            <p>A maquiagem social para noivas é uma escolha sofisticada e clássica que foca em um look elegante e de longa duração, adequado para casamentos e outros eventos formais.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quais são os benefícios da maquiagem social para noivas?</summary>
            <p>Essa maquiagem é projetada para durar o dia inteiro, proporcionando um visual impecável. Ela também é adaptada ao estilo e personalidade da noiva, mantendo a elegância durante todo o evento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar minha maquiagem social para noivas diretamente pelo WhatsApp?</summary>
            <p>Sim, você pode agendar sua maquiagem social diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
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

export default MaquiagemSocialParaNoivasPage;
