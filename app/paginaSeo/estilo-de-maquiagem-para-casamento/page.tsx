"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Estilo de Maquiagem para Casamento | Studio Amendolla",
    description:
      "Escolha o estilo de maquiagem perfeito para o seu grande dia. No Studio Amendolla, criamos maquiagens personalizadas para noivas, com acabamentos sofisticados e duradouros.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-para-casamento.webp",
  },
  services: [
    {
      title: "Estilo de Maquiagem para Casamento",
      description:
        "No Studio Amendolla, trabalhamos com diversos estilos de maquiagem para casamento, desde os mais clássicos até os mais modernos, garantindo que cada noiva se sinta única e deslumbrante.",
      image: "/images/maquiagem-para-casamento.webp",
    },
  ],
};

const EstiloDeMaquiagemParaCasamentoPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Estilo de Maquiagem para Casamento</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos maquiagens personalizadas para o seu casamento, desde o look clássico até o mais moderno, tudo para garantir que você esteja deslumbrante no seu grande dia.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20para%20casamento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem de Casamento no WhatsApp
      </a>

      {/* Seção de Estilos de Maquiagem */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Estilos de Maquiagem para Casamento</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clássica</h3>
            <p>
              Uma maquiagem atemporal que realça sua beleza natural, perfeita para noivas que buscam um look sofisticado e elegante para o seu grande dia.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para noivas que preferem um visual mais suave, a maquiagem natural é leve, fresca e ideal para destacar sua beleza de forma delicada.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Moderno Glam</h3>
            <p>
              O estilo moderno glam oferece um look contemporâneo e ousado, com contornos e acabamentos que garantem um visual impecável durante todo o dia.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Maquiagens */}
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Casamento</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de maquiagem para casamento são oferecidos?</h3>
            <p>
              Oferecemos estilos variados, como maquiagem clássica, natural e moderna. Todos os looks são personalizados conforme o estilo da noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de maquiagem para casamento?</h3>
            <p>
              Recomendamos agendar um teste de maquiagem para garantir que o estilo escolhido se encaixe perfeitamente com o tema e a personalidade da noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar a maquiagem para casamento diretamente?</h3>
            <p>
              Sim, você pode agendar a sua maquiagem diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default EstiloDeMaquiagemParaCasamentoPage;
