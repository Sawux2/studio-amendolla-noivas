"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Madrinhas com Cabelos Longos | Studio Amendolla",
    description:
      "Elegância e sofisticação para madrinhas com cabelos longos. Criamos penteados que valorizam o comprimento e combinam com o estilo do casamento.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoMadrinhaCabelosLongosPage = () => {
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
            src={pageData.article.image}
            alt="Penteado para madrinhas com cabelos longos"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Impecável do Início ao Fim</h2>
          <p className={styles.description}>
            Ser madrinha é um papel especial e merece um visual à altura. No Studio Amendolla, criamos penteados personalizados que destacam a beleza dos cabelos longos, com elegância e durabilidade para toda a cerimônia e festa. Seja com ondas glamourosas, coques baixos sofisticados ou semi-presos com tranças, nossos penteados são pensados para valorizar o formato do rosto, o estilo do vestido e o clima do evento. Tudo isso com muito cuidado, leveza e acabamento impecável.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20madrinha%20com%20cabelos%20longos."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado para Madrinha com Cabelos Longos no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Sugestões de Penteado para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Ondas com Volume</h3>
            <p>Clássicas e glamourosas, perfeitas para casamentos noturnos ou ao ar livre.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Coque Baixo com Trança</h3>
            <p>Elegante e romântico, ideal para cerimônias mais formais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Semi-preso com Enrolado</h3>
            <p>Um look moderno e delicado, com destaque para o comprimento dos fios.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas sobre Penteado para Madrinhas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês ajudam a escolher o melhor penteado?</summary>
            <p>Sim! Durante a consultoria, analisamos seu rosto, vestido e estilo do evento para sugerir a melhor opção.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O penteado dura até o final da festa?</summary>
            <p>Com certeza! Usamos técnicas de fixação que mantêm o penteado firme e bonito a noite inteira.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Preciso lavar o cabelo no dia?</summary>
            <p>Indicamos lavar no dia anterior, com shampoo apenas na raiz, sem condicionador. Damos todas as orientações no agendamento.</p>
          </details>
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default PenteadoMadrinhaCabelosLongosPage;
