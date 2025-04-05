"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Formandas com Cabelo Cacheado ou Crespo | Studio Amendolla",
    description:
      "Celebrando a beleza natural! Criamos penteados elegantes e valorizamos cada curvatura dos fios cacheados e crespos em sua formatura.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoCacheadoFormandasPage = () => {
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
            alt="Penteado para cabelo cacheado ou crespo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza Autêntica no Seu Grande Dia</h2>
          <p className={styles.description}>
            Valorizamos a textura natural dos fios cacheados e crespos, criando penteados incríveis que refletem sua personalidade. Para a noite da formatura, oferecemos opções que vão do afro puff elegante aos coques estruturados, tranças modernas e semi-presos com volume. Utilizamos técnicas que respeitam e destacam a estrutura dos seus cabelos, com produtos ideais para definição, controle de frizz e fixação duradoura. Um visual deslumbrante e cheio de identidade para brilhar no palco e nas fotos.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20formatura%20com%20cabelo%20cacheado%20ou%20crespo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Seu Penteado Cacheado para Formatura no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Penteados para Realçar Seus Cachos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Afro Puff com Acessórios</h3>
            <p>Estilo poderoso com muito volume, acompanhado de tiaras, presilhas e brilho para destacar ainda mais.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tranças com Volume Natural</h3>
            <p>Tranças embutidas ou laterais, combinadas com os fios soltos e volumosos para um visual sofisticado e autêntico.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Semi-presos Cacheados</h3>
            <p>Com definição e leveza, esse penteado é ideal para quem deseja um visual elegante e romântico.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas Frequentes sobre Penteado para Cabelos Cacheados</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>É necessário fazer escova antes do penteado?</summary>
            <p>Não! Nossos penteados são pensados para valorizar a textura natural dos seus fios, sem alisamentos.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês definem os cachos antes de montar o penteado?</summary>
            <p>Sim, realizamos uma preparação completa para ativar os cachos, com hidratação, definição e volume controlado.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Os penteados duram a festa toda?</summary>
            <p>Sim, utilizamos finalizadores e técnicas de fixação que garantem durabilidade e conforto do início ao fim.</p>
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

export default PenteadoCacheadoFormandasPage;
