"use client";

import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; // manter assim schemas
import styles from "app/styles/BelezaNoivasSP.module.css"; // manter assim sempre o mesmo css
import ServiceSimulator from "app/components/calculadora"; // manter assim
import FeaturesCards from "app/components/FeaturesCards"; // manter assim
import GaleriaDeFotos from "app/components/GaleriaDeFotos"; // manter assim

const pageData = {
  article: {
    headline: "Tendências de Maquiagem para Eventos: O Que Está em Alta",
    description:
      "Descubra as últimas tendências de maquiagem que estão fazendo sucesso em eventos e festas. Prepare-se para brilhar com as melhores dicas!",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/tendencias-de-maquiagem.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Quais são as tendências de maquiagem para 2025?",
      answer: "As tendências incluem maquiagem natural, tons pastel e acabamentos brilhantes."
    },
    {
      question: "Como posso adaptar as tendências ao meu estilo pessoal?",
      answer: "Experimente incorporar elementos das tendências, como uma sombra colorida ou um batom ousado, enquanto mantém o restante da maquiagem mais neutro."
    },
    {
      question: "A maquiagem brilhante é adequada para eventos formais?",
      answer: "Sim, acabamentos brilhantes podem ser muito elegantes e sofisticados quando aplicados corretamente."
    },
    {
      question: "Quais produtos são essenciais para seguir as tendências?",
      answer: "Produtos como iluminadores, sombras em tons vibrantes e batons de acabamento mate são essenciais."
    },
    {
      question: "Como posso garantir que minha maquiagem dure o dia todo?",
      answer: "Use um bom primer, finalize com spray fixador e escolha produtos de longa duração."
    }
  ],
  tips: [
    {
      title: "Maquiagem Natural",
      description: "Aposte em uma pele bem cuidada e use produtos leves para um look fresco.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Tons Pastel",
      description: "As sombras em tons pastel estão em alta e são perfeitas para eventos diurnos.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Olhos Marcantes",
      description: "Experimente delineados gráficos ou sombras brilhantes para um olhar impactante.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Tendências de Maquiagem", url: "/tendencias-de-maquiagem" }
  ],
  images: [
    {
      url: "/images/tendencias-de-maquiagem.webp",
      description: "Tendências de Maquiagem para Eventos",
      width: 500,
      height: 333,
      name: "Tendências de Maquiagem",
      datePublished: "2025-03-01"
    }
  ]
};

const TendenciasDeMaquiagemPage = () => {
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
            alt="Tendências de Maquiagem"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Prepare-se para Brilhar com as Novas Tendências</h2>
          <p className={styles.description}>
            No Studio Amendolla, estamos sempre atualizados com as últimas tendências de maquiagem. Venha descobrir como você pode incorporar essas novidades ao seu estilo!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20tendências%20de%20maquiagem%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Tendências
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Tendências de Maquiagem</h2>
        <div className={styles.tipsGrid}>
          {pageData.tips.map(tip => (
            <div key={tip.title} className={styles.tipCard}>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Tendências de Maquiagem</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map(item => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Outros Componentes */}
      <FeaturesCards />
      <ServiceSimulator />

      {/* Schemas */}
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
};

export default TendenciasDeMaquiagemPage;
