"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Dicas de Penteado para Festas | Studio Amendolla",
    description:
      "Encontre o penteado perfeito para sua festa com as dicas exclusivas do Studio Amendolla. Oferecemos estilos de penteados para todas as ocasiões, desde coques sofisticados até ondas soltas e modernas.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-festa-sao-paulo.webp",
  },
  services: [
    {
      title: "Penteado para Festas",
      description:
        "No Studio Amendolla, criamos penteados personalizados para festas, com estilos que atendem a todos os gostos e ocasiões, garantindo que você se sinta confiante e deslumbrante.",
      image: "/images/penteado-festa-sao-paulo.webp",
    },
  ],
};

const PenteadoParaFestasPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado para Festas</h1>
        <p className={styles.description}>
          No Studio Amendolla, transformamos o seu visual para festas com penteados incríveis e personalizados, para garantir que você arrase na sua ocasião especial.
        </p>
      </header>
      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20penteado%20para%20festa%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado para Festa no WhatsApp
      </a>

      {/* Seção de Dicas de Penteado */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Dicas de Penteado para Festas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coque Sofisticado</h3>
            <p>
              O coque é um clássico para eventos formais, trazendo sofisticação e elegância ao visual. Perfeito para festas de gala ou casamentos.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Ondas Soltas</h3>
            <p>
              As ondas soltas oferecem um look mais natural e moderno, ideal para festas mais descontraídas e eventos noturnos.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Semi-Pronto</h3>
            <p>
              Penteados meio soltos, com um toque de modernidade, são perfeitos para quem deseja um look versátil e chique ao mesmo tempo.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Penteados para Festas */}

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Festas</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais tipos de penteados estão disponíveis para festas?</h3>
            <p>
              Oferecemos uma variedade de penteados, como coques, ondas, penteados semi-prontos, entre outros, sempre adaptados ao seu estilo e tipo de evento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar um teste de penteado?</h3>
            <p>
              Sim, recomendamos agendar um teste de penteado para que você tenha certeza de que o look escolhido combine com a sua personalidade e com o tema da festa.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como posso agendar meu penteado para festa em São Paulo?</h3>
            <p>
              Você pode agendar seu penteado diretamente pelo WhatsApp ou através do nosso formulário de contato no site.
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

export default PenteadoParaFestasPage;
