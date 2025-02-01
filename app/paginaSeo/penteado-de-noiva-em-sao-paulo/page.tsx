"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado de Noiva em São Paulo | Studio Amendolla",
    description:
      "Transforme seu visual com o penteado de noiva ideal em São Paulo. No Studio Amendolla, oferecemos penteados personalizados, adequados ao seu estilo e ao seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-noiva-sao-paulo.webp",
  },
  services: [
    {
      title: "Penteado de Noiva em São Paulo",
      description:
        "No Studio Amendolla, criamos penteados de noiva personalizados para complementar seu estilo único, seja para um casamento clássico, moderno ou boho.",
      image: "/images/penteado-noiva-sao-paulo.webp",
    },
  ],
};

const PenteadoDeNoivaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado de Noiva em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos penteados de noiva que combinam com seu estilo e personalidade. Com opções que vão do clássico ao moderno, garantimos que você esteja deslumbrante no seu grande dia.
        </p>
      </header>

      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20penteado%20de%20noiva%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado de Noiva no WhatsApp
      </a>

      {/* Seção de Penteados */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteados Personalizados para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Clássico</h3>
            <p>
              Penteados sofisticados e atemporais, perfeitos para noivas que buscam um look elegante e cheio de glamour.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>
              Para noivas que preferem um visual contemporâneo, criamos penteados modernos, com texturas e detalhes inovadores.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Boho</h3>
            <p>
              Penteados leves e descontraídos, ideais para noivas com um estilo boho chic ou casamentos ao ar livre.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado de Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais estilos de penteado de noiva são oferecidos?</h3>
            <p>
              Oferecemos penteados clássicos, modernos e boho, todos personalizados de acordo com o estilo e o tema do seu casamento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de penteado?</h3>
            <p>
              Agendamos um teste para experimentar diferentes estilos de penteado e garantir que você fique completamente satisfeita no grande dia.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar meu penteado de noiva em São Paulo?</h3>
            <p>
              Sim, você pode agendar o teste de penteado ou o serviço diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default PenteadoDeNoivaSPPage;
