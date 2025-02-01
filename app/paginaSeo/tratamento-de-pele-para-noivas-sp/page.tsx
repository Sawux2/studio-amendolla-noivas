"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Tratamento de Pele para Noiva em São Paulo | Studio Amendolla",
    description:
      "Prepare sua pele para o grande dia com os melhores tratamentos de pele para noivas em São Paulo. No Studio Amendolla, oferecemos cuidados especiais para garantir uma pele radiante e saudável.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/tratamento-pele-noiva-sao-paulo.webp",
  },
  services: [
    {
      title: "Tratamento de Pele para Noiva em São Paulo",
      description:
        "Oferecemos uma variedade de tratamentos de pele para noivas, com foco em hidratação, rejuvenescimento e cuidados específicos para garantir que sua pele esteja perfeita no grande dia.",
      image: "/images/tratamento-pele-noiva-sao-paulo.webp",
    },
  ],
};

const TratamentoDePeleParaNoivaSPPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tratamento de Pele para Noiva em São Paulo</h1>
        <p className={styles.description}>
          No Studio Amendolla, oferecemos tratamentos personalizados de pele para noivas. Prepare sua pele para o grande dia com serviços de alta qualidade, focados em hidratação, rejuvenescimento e cuidados especiais.
        </p>
      </header>

      <GaleriaDeFotos />
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20tratamento%20de%20pele%20para%20noiva%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Tratamento de Pele para Noiva no WhatsApp
      </a>

      {/* Seção de Tratamentos de Pele */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Tratamentos de Pele para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Hidratação Profunda</h3>
            <p>
              Tratamento intensivo de hidratação para garantir uma pele macia, suave e radiante no grande dia.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Rejuvenescimento Facial</h3>
            <p>
              Procedimentos de rejuvenescimento para uma pele mais firme e jovem, com técnicas não invasivas.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cuidados Especiais para Noivas</h3>
            <p>
              Tratamentos personalizados de acordo com o tipo de pele da noiva, para garantir um resultado perfeito no grande dia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Tratamento de Pele para Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais tipos de tratamentos de pele para noivas são oferecidos?</h3>
            <p>
              Oferecemos tratamentos de hidratação profunda, rejuvenescimento facial e cuidados personalizados para a noiva, adequados a cada tipo de pele.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Quanto tempo antes do casamento devo iniciar os tratamentos de pele?</h3>
            <p>
              Recomendamos iniciar os tratamentos com pelo menos 2 a 3 meses de antecedência para obter os melhores resultados.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar meu tratamento de pele para noiva em São Paulo?</h3>
            <p>
              Sim, você pode agendar seu tratamento diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.
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

export default TratamentoDePeleParaNoivaSPPage;
