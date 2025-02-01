"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem e Penteado para Festival São Paulo | Studio Amendolla",
    description:
      "Arrase no seu look para festival com uma maquiagem e penteado incríveis. No Studio Amendolla, criamos visuais exclusivos para quem quer brilhar nos maiores eventos de São Paulo.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-penteado-festival-sao-paulo.webp",
  },
  services: [
    {
      title: "Maquiagem e Penteado para Festival",
      description:
        "No Studio Amendolla, criamos penteados e maquiagens para festival que destacam sua personalidade e estilo, perfeitos para quem vai a eventos grandes e cheios de energia em São Paulo.",
      image: "/images/maquiagem-penteado-festival-sao-paulo.webp",
    },
  ],
};

const MaquiagemPenteadoFestivalPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem e Penteado para Festival</h1>
        <p className={styles.description}>
          Prepare-se para brilhar nos festivais de São Paulo com maquiagem e penteado exclusivos e personalizados. Realce sua beleza e estilo único para curtir os melhores eventos da cidade.
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20e%20penteado%20para%20festival%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Look para Festival no WhatsApp
      </a>

      {/* Seção de Maquiagem e Penteado para Festival */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Exclusivo para Festival</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Colorida e Criativa</h3>
            <p>
              Para quem ama ousar, oferecemos maquiagens criativas com cores vibrantes e acabamentos diferentes, ideais para se destacar em festivais.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Despojado e Moderno</h3>
            <p>
              Penteados despojados, com tranças, ondas ou até estilos mais soltos, para garantir conforto e estilo enquanto curte seu festival.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look de Festival Completo</h3>
            <p>
              Combine penteados e maquiagens que combinam com seu estilo, com acabamentos duradouros para garantir que você arrase do início ao fim do evento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem e Penteado para Festival</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Qual estilo de maquiagem posso escolher para um festival?</h3>
            <p>
              Oferecemos uma variedade de estilos, incluindo maquiagens com glitter, efeitos especiais e acabamentos duradouros, perfeitas para eventos de grande porte.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>O penteado é confortável para o festival?</h3>
            <p>
              Sim, todos os penteados são pensados para garantir conforto e durabilidade durante o evento, para que você possa dançar e se divertir sem preocupações.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar meu look para festival em São Paulo?</h3>
            <p>
              Sim, agende sua maquiagem e penteado para festival diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
            </p>
          </div>
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

export default MaquiagemPenteadoFestivalPage;
