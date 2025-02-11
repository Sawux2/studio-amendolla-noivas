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
    headline: "Dicas de Maquiagem para Diferentes Tipos de Pele",
    description:
      "Aprenda como adaptar sua maquiagem para diferentes tipos de pele e realçar sua beleza natural.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/dicas-de-maquiagem-para-tipos-de-pele.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Como saber qual é o meu tipo de pele?",
      answer: "Você pode identificar seu tipo de pele observando como ela reage ao longo do dia. Se brilhar na zona T, pode ser oleosa; se estiver seca e descamando, é seca."
    },
    {
      question: "Qual base é melhor para pele oleosa?",
      answer: "Bases oil-free e em pó são ideais para pele oleosa, pois ajudam a controlar o brilho."
    },
    {
      question: "E para pele seca?",
      answer: "Para pele seca, escolha bases hidratantes e cremosas que proporcionem um acabamento luminoso."
    },
    {
      question: "Como maquiar pele sensível?",
      answer: "Use produtos hipoalergênicos e evite ingredientes irritantes. Sempre faça um teste de alergia antes de usar novos produtos."
    },
    {
      question: "Posso usar maquiagem se tenho pele mista?",
      answer: "Sim, escolha produtos que equilibrem as áreas oleosas e secas, como bases líquidas e pós translúcidos."
    }
  ],
  tips: [
    {
      title: "Pele Oleosa",
      description: "Use primer matificante e produtos em pó para controlar o brilho ao longo do dia.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pele Seca",
      description: "Hidrate bem a pele antes da maquiagem e opte por produtos cremosos para um acabamento radiante.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Pele Mista",
      description: "Use produtos que ajudem a equilibrar as áreas oleosas e secas, como bases líquidas e pós leves.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Dicas de Maquiagem para Tipos de Pele", url: "/dicas-de-maquiagem-para-tipos-de-pele" }
  ],
  images: [
    {
      url: "/images/dicas-de-maquiagem-para-tipos-de-pele.webp",
      description: "Dicas de Maquiagem para Diferentes Tipos de Pele",
      width: 500,
      height: 333,
      name: "Dicas de Maquiagem para Tipos de Pele",
      datePublished: "2025-03-01"
    }
  ]
};

const DicasDeMaquiagemParaTiposDePelePage = () => {
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
            alt="Dicas de Maquiagem para Tipos de Pele"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Realce Sua Beleza Natural</h2>
          <p className={styles.description}>
            No Studio Amendolla, acreditamos que cada tipo de pele merece cuidados especiais. Siga nossas dicas para adaptar sua maquiagem e realçar sua beleza natural!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20dicas%20de%20maquiagem%20para%20meu%20tipo%20de%20pele."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Maquiagem
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Maquiagem para Tipos de Pele</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Dicas de Maquiagem para Tipos de Pele</h2>
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

export default DicasDeMaquiagemParaTiposDePelePage;
