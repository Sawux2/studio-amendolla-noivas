"use client";

import React from "react";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Noiva Zona Norte | Studio Amendolla",
    description:
      "Na Zona Norte de São Paulo, o Studio Amendolla oferece penteados exclusivos para noivas, com estilos modernos e clássicos. Transforme seu look para o grande dia com um penteado sob medida.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/penteado-noiva-zona-norte.webp",
  },
  services: [
    {
      title: "Penteado para Noiva na Zona Norte",
      description:
        "No Studio Amendolla, oferecemos penteados personalizados para noivas da Zona Norte de São Paulo, combinando técnicas modernas e tradicionais para criar o look perfeito para o seu grande dia.",
      image: "/images/penteado-noiva-zona-norte.webp",
    },
  ],
};

const PenteadoNoivaZonaNortePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Penteado para Noiva Zona Norte</h1>
        <p className={styles.description}>
          Se você é da Zona Norte de São Paulo e está em busca de um penteado perfeito para o seu casamento, o Studio Amendolla oferece opções que combinam com o seu estilo e personalidade. Entre em contato para agendar seu teste!
        </p>
      </header>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20penteado%20para%20noiva%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado para Noiva no WhatsApp
      </a>

      {/* Seção de Penteado para Noiva */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteados Exclusivos para Noivas da Zona Norte</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Clássico</h3>
            <p>
              Para noivas que buscam um look atemporal, oferecemos penteados clássicos com coque, tranças e detalhes delicados, garantindo um visual sofisticado e elegante.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>
              Penteados modernos e arrojados, com ondas, coques desconstruídos e acessórios elegantes, perfeitos para noivas que desejam um estilo atual e sofisticado.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Natural</h3>
            <p>
              Para um look mais leve e natural, criamos penteados que realçam a beleza da noiva de forma suave, com fios soltos, ondas ou tranças românticas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Noiva</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Quais tipos de penteado para noiva vocês oferecem na Zona Norte?</h3>
            <p>
              Oferecemos penteados clássicos, modernos e naturais, todos personalizados para combinar com o estilo e a personalidade de cada noiva.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Como funciona o agendamento de teste para penteado?</h3>
            <p>
              Recomendamos que a noiva agende um teste de penteado para que possamos criar o look ideal para o grande dia e garantir a sua satisfação.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Posso agendar um penteado para noiva em São Paulo?</h3>
            <p>
              Sim, você pode agendar seu penteado para noiva diretamente no Studio Amendolla ou através do nosso WhatsApp.
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

export default PenteadoNoivaZonaNortePage;
