"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css"; // CSS reutilizado
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const pageData = {
  article: {
    headline: "Beleza para Noivas em São Paulo | Maquiagem e Penteado Studio Amendolla",
    description:
      "Noiva deslumbrante, com maquiagem e penteado exclusivos para o grande dia. No Studio Amendolla, oferecemos serviços personalizados para garantir que você se sinta única em sua cerimônia.",
    author: "Priscila Helena",
    datePublished: "2025-02-01",
    image: "/images/beleza-para-noivas-sao-paulo.webp",
  },
};

const BelezaParaNoivasSPPage = () => {
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
            src={pageData.article.image} // URL da imagem
            alt="Beleza para Noivas em São Paulo"
            width={500} // Tamanho reduzido da imagem
            height={333} // Proporção ajustada
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            A Beleza Perfeita para o Seu Grande Dia
          </h2>
          <p className={styles.description}>
            No Studio Amendolla, cuidamos de cada detalhe da sua maquiagem e penteado para que você seja a noiva dos seus sonhos. Com serviços exclusivos para noivas em São Paulo, nossa equipe dedica-se a criar o visual perfeito para o seu casamento, seja com um look clássico, romântico ou moderno. Além disso, realizamos ensaios de maquiagem e penteado para que você esteja tranquila no grande dia, sabendo que estará deslumbrante.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20beleza%20para%20o%20meu%20casamento%20em%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Beleza de Noiva no WhatsApp
      </a>

      {/* Seção de Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Maquiagem e Penteado Personalizados para Noivas em São Paulo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Impecável</h3>
            <p>Crie um visual radiante com uma maquiagem que destaque sua beleza natural e combine perfeitamente com o estilo do seu casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado de Noiva</h3>
            <p>De coques elegantes a cabelos soltos e ondulados, nossos penteados são pensados para cada noiva e estilo de casamento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Look Completo de Noiva</h3>
            <p>Oferecemos pacotes completos de beleza, combinando maquiagem e penteado para garantir que você esteja perfeita para o seu grande dia.</p>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Beleza para Noivas</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Quais estilos de maquiagem e penteado estão disponíveis para noivas?</summary>
            <p>Temos opções de maquiagem sofisticada, romântica e glamourosa, além de penteados clássicos, modernos e exclusivos para cada tipo de noiva.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Como funciona o teste de maquiagem e penteado?</summary>
            <p>Recomendamos que você agende uma sessão de teste para garantir que o look escolhido seja exatamente o que você deseja para o seu casamento.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Posso agendar os serviços diretamente para o meu casamento?</summary>
            <p>Sim! Você pode agendar sua maquiagem e penteado de noiva diretamente pelo WhatsApp ou preenchendo o formulário de contato em nosso site.</p>
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

export default BelezaParaNoivasSPPage;
