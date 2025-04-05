"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Penteado para Noiva em São Paulo | Studio Amendolla",
    description:
      "Penteados personalizados para noivas em São Paulo. Estilo, romantismo e elegância com a assinatura do Studio Amendolla para o seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp",
  },
};

const PenteadoParaNoivaEmSPPage = () => {
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
            alt="Penteado para Noiva em São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>O Penteado dos Seus Sonhos para o Dia do Sim</h2>
          <p className={styles.description}>
            No Studio Amendolla, transformamos sua inspiração em realidade com penteados de noiva que unem romantismo, sofisticação e durabilidade. Atendemos noivas em toda São Paulo com criações personalizadas que valorizam o estilo do vestido, o formato do rosto e o tipo de cerimônia. Do coque clássico ao cabelo solto com ondas suaves, oferecemos opções para todos os estilos de noiva. Tudo com muito cuidado, atenção aos detalhes e produtos de alta performance para garantir um visual impecável do início ao fim do seu casamento.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20penteado%20para%20noiva%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Penteado de Noiva em São Paulo pelo WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Estilos de Penteado para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Coque Clássico</h3>
            <p>Elegância e tradição em um penteado que combina com todos os estilos de vestido e cerimônia.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Ondas Românticas</h3>
            <p>Perfeito para noivas modernas, com movimento leve e um visual delicado e feminino.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado com Véu e Acessórios</h3>
            <p>Integramos véu, tiaras e flores de forma harmoniosa para um resultado impecável em cada ângulo.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Penteado para Noiva em São Paulo</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Vocês fazem teste de penteado para noiva?</summary>
            <p>Sim, realizamos testes antecipados para alinhar suas expectativas e garantir total segurança no grande dia.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Quanto tempo dura a produção do penteado no dia do casamento?</summary>
            <p>Em média, entre 1h30 a 2h, dependendo do estilo do penteado e do comprimento do cabelo.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Vocês atendem em domicílio ou no local do evento?</summary>
            <p>Sim, nosso atendimento pode ser realizado no conforto da sua casa ou no local do making of, em toda São Paulo e região.</p>
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

export default PenteadoParaNoivaEmSPPage;
