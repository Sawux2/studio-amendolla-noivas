"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // Reutilize o CSS
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Formanda em São Paulo | Dicas e Serviços Exclusivos",
    description:
      "Descubra os segredos da maquiagem perfeita para formandas em São Paulo. No Studio Amendolla, oferecemos serviços personalizados e dicas exclusivas para você brilhar no seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-para-formanda-sao-paulo.webp", // Nova imagem
  },
};

const MaquiagemParaFormandaSPPage = () => {
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
            src={pageData.article.image} // URL da nova imagem
            alt="Maquiagem para Formanda em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Maquiagem Perfeita para Formandas</h2>
          <p className={styles.description}>
            No Studio Amendolla, entendemos que a formatura é um dos momentos mais importantes da sua vida. Por isso, oferecemos serviços de maquiagem profissional exclusivos para formandas em São Paulo. Nossa equipe de maquiadores especializados utiliza produtos de alta qualidade, como MAC, Dior e Chanel, para garantir um look impecável e duradouro. Realizamos testes de maquiagem para que você possa escolher o estilo ideal para o seu grande dia.
          </p>
        </div>
      </div>

      {/* Galeria de Fotos */}
      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20maquiagem%20para%20minha%20formatura%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para Formatura no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Serviços de Maquiagem para Formandas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Natural</h3>
            <p>Ideal para formandas que desejam um look leve e natural, destacando a beleza sem exageros.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Glamourosa</h3>
            <p>Para quem quer um visual marcante, com destaque para olhos esfumados e batons intensos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Temática</h3>
            <p>Crie um look único que combine com o tema da sua formatura, seja vintage, moderno ou clássico.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Formandas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais produtos são usados na maquiagem para formandas?</summary>
            <p>Utilizamos produtos de alta qualidade, como MAC, Dior e Chanel, para garantir um look impecável e duradouro.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como agendar um teste de maquiagem?</summary>
            <p>Você pode agendar um teste diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a maquiagem?</summary>
            <p>A maquiagem dura até 12 horas, perfeita para o seu grande dia.</p>
          </details>
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

export default MaquiagemParaFormandaSPPage;