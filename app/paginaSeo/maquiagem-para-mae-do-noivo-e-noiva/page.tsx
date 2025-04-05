"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Maquiagem para Mães de Noiva e Noivo | Studio Amendolla",
    description:
      "Elegância e beleza para um dos dias mais especiais. Realce sua presença como mãe da noiva ou do noivo com uma maquiagem sofisticada e personalizada.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const MaquiagemMaesPage = () => {
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
            alt="Maquiagem para mães de noiva e noivo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Beleza que Transmite Emoção</h2>
          <p className={styles.description}>
            O casamento é um momento único e emocionante, especialmente para as mães dos noivos. No Studio Amendolla, oferecemos maquiagens que unem sofisticação, durabilidade e elegância, realçando sua beleza com sensibilidade e cuidado. Nosso atendimento é personalizado para entender suas preferências, o estilo do vestido e a proposta da cerimônia, criando um visual harmônico e marcante. Você merece se sentir maravilhosa neste dia tão especial!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20para%20mãe%20de%20noiva%20ou%20noivo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem para o Casamento pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem para Mães dos Noivos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Clássica</h3>
            <p>Visual elegante e atemporal com tons neutros, pele bem acabada e olhos suaves para realçar a beleza com discrição.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem com Destaque nos Olhos</h3>
            <p>Olhos esfumados ou delineados com intensidade equilibrada, ideal para cerimônias noturnas e festas sofisticadas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Iluminada</h3>
            <p>Pele radiante com pontos de luz estratégicos para um efeito jovem, leve e natural.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Dúvidas sobre Maquiagem para Mães dos Noivos</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Qual estilo de maquiagem é mais indicado para mães?</summary>
            <p>Estilos clássicos e elegantes são sempre recomendados, mas tudo depende da personalidade e do evento. Personalizamos conforme sua preferência.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês trabalham com maquiagem para peles maduras?</summary>
            <p>Sim! Temos técnicas e produtos específicos que valorizam a pele madura, com acabamento natural e sem marcar linhas de expressão.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>É possível fazer a maquiagem no local do evento?</summary>
            <p>Sim, oferecemos atendimento a domicílio com todo o cuidado e conforto para o seu grande dia.</p>
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

export default MaquiagemMaesPage;
