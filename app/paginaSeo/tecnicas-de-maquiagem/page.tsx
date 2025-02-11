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
    headline: "Técnicas de Maquiagem para Eventos: Aprenda com os Melhores",
    description:
      "Descubra as técnicas de maquiagem mais eficazes para garantir que você esteja deslumbrante em qualquer evento.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/tecnicas-de-maquiagem.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Quais são as técnicas básicas de maquiagem para iniciantes?",
      answer: "As técnicas básicas incluem a aplicação de base, corretivo, blush e batom."
    },
    {
      question: "Como posso fazer a maquiagem durar mais tempo?",
      answer: "Use um primer antes da maquiagem e finalize com um spray fixador."
    },
    {
      question: "Quais são as melhores técnicas para maquiagem de olhos?",
      answer: "Técnicas como esfumado, delineado e uso de cílios postiços podem realçar o olhar."
    },
    {
      question: "Como escolher a cor certa de base?",
      answer: "Teste a base na linha do maxilar e escolha a que melhor se mistura com o seu tom de pele."
    },
    {
      question: "Devo usar maquiagem diferente para o dia e para a noite?",
      answer: "Sim, a maquiagem para o dia tende a ser mais leve, enquanto a maquiagem para a noite pode ser mais intensa."
    }
  ],
  tips: [
    {
      title: "Maquiagem Natural",
      description: "Aposte em uma pele bem cuidada e use produtos leves para um look fresco e natural.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Olhos Esfumados",
      description: "Aprenda a técnica de esfumado para criar um olhar marcante e sofisticado.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Contorno e Iluminação",
      description: "Use técnicas de contorno e iluminação para realçar os traços do rosto.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Técnicas de Maquiagem", url: "/tecnicas-de-maquiagem" }
  ],
  images: [
    {
      url: "/images/tecnicas-de-maquiagem.webp",
      description: "Técnicas de Maquiagem para Eventos",
      width: 500,
      height: 333,
      name: "Técnicas de Maquiagem",
      datePublished: "2025-03-01"
    }
  ]
};

const TecnicasDeMaquiagemPage = () => {
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
            alt="Técnicas de Maquiagem"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Domine as Técnicas de Maquiagem</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos dicas e técnicas para ajudá-la a se sentir confiante e linda em qualquer evento. Aprenda com os melhores e destaque sua beleza!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20técnicas%20de%20maquiagem%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Maquiagem
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Técnicas de Maquiagem</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Técnicas de Maquiagem</h2>
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

export default TecnicasDeMaquiagemPage;
