"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Formatura em São Paulo | Studio Amendolla",
    description:
      "O penteado ideal para o seu grande dia de formatura em São Paulo. Estilo, elegância e durabilidade com o toque profissional do Studio Amendolla.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoParaFormaturaEmSPPage = () => {
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
            alt="Penteado para Formatura em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Brilhe na Sua Formatura com um Penteado Inesquecível</h2>
          <p className={styles.description}>
            O Studio Amendolla oferece penteados exclusivos para formandas em São Paulo que querem brilhar no grande dia. Trabalhamos com estilos modernos e clássicos, sempre personalizados de acordo com o formato do rosto, tipo de cabelo e o vestido escolhido. Nossa missão é criar um penteado que realce sua beleza e dure a noite inteira, sem perder o charme. Seja um coque elegante, ondas glamourosas ou penteado semipreso, cuidamos de cada detalhe para que você se sinta confiante, linda e pronta para comemorar com estilo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado para Formatura em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços de Penteado para Formandas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteado Clássico</h3>
            <p>Ideal para quem busca elegância atemporal, com coques bem estruturados ou penteados presos sofisticados.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Moderno</h3>
            <p>Looks mais despojados com tranças, semipresos e ondas, perfeitos para formandas que querem ousar com estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fixação e Durabilidade</h3>
            <p>Nossos penteados são pensados para durar toda a festa, com técnicas profissionais que garantem firmeza sem comprometer o conforto.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Formatura em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual é o tempo médio para fazer um penteado de formatura?</summary>
            <p>O tempo médio é de 1 hora a 1 hora e 30 minutos, dependendo do tipo de penteado, textura e comprimento do cabelo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês oferecem teste de penteado antes da formatura?</summary>
            <p>Sim, recomendamos fortemente o teste de penteado para garantir que o resultado no dia da formatura seja exatamente como você sonhou.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>O serviço pode ser realizado a domicílio?</summary>
            <p>Sim, levamos toda nossa estrutura e atendimento personalizado até sua casa em São Paulo, com conforto e pontualidade.</p>
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

export default PenteadoParaFormaturaEmSPPage;
