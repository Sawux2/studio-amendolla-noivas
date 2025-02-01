"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem de Noiva em São Paulo | Studio Amendolla",
    description:
      "Realce sua beleza no grande dia com a maquiagem de noiva ideal em São Paulo. No Studio Amendolla, oferecemos maquiagem personalizada para noivas, com produtos de alta qualidade.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-noiva-sao-paulo.webp",
  },
  services: [
    {
      title: "Maquiagem de Noiva em São Paulo",
      description:
        "No Studio Amendolla, oferecemos maquiagem de noiva personalizada, com produtos de alta qualidade, para garantir que você esteja radiante e confiante no seu casamento.",
      image: "/images/maquiagem-noiva-sao-paulo.webp",
    },
  ],
};

const MaquiagemDeNoivaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Maquiagem de Noiva em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, criamos maquiagens de noiva que destacam sua beleza única. Seja para um look clássico ou moderno, nossa equipe vai te ajudar a encontrar a maquiagem ideal para o seu casamento.
        </p>
      </header>
        <GaleriaDeFotos />
        <a
          href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20de%20noiva%20em%20São%20Paulo."
          className={styles.whatsappButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende sua Maquiagem de Noiva no WhatsApp
        </a>

      {/* Seção de Maquiagem */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem Personalizada para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clássica</h3>
            <p>
              Realce sua beleza com uma maquiagem clássica e atemporal. Perfeita para noivas que buscam um look sofisticado e elegante.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>
              Para noivas que preferem um look mais natural, criamos uma maquiagem leve e fresca, destacando sua beleza de forma sutil.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Moderna</h3>
            <p>
              A maquiagem moderna oferece um visual contemporâneo, com produtos de alta performance para garantir um acabamento perfeito e duradouro.
            </p>
          </div>
        </div>
        
      </section>

      {/* Galeria de Maquiagens */}

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem de Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais os estilos de maquiagem de noiva são oferecidos?</h3>
            <p>
              Oferecemos uma variedade de estilos, incluindo maquiagem clássica, natural e moderna. Cada look é personalizado de acordo com o gosto da noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o teste de maquiagem?</h3>
            <p>
              Recomendamos agendar uma sessão de teste para garantir que a maquiagem escolhida combine perfeitamente com o seu estilo e tema de casamento.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar a maquiagem de noiva em São Paulo?</h3>
            <p>
              Sim, você pode agendar sua maquiagem diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default MaquiagemDeNoivaSPPage;
