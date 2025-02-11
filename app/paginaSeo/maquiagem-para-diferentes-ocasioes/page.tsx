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
    headline: "Maquiagem para Diferentes Ocasiões: Encontre o Look Perfeito",
    description:
      "Descubra como escolher a maquiagem ideal para cada tipo de evento, desde casamentos até festas e formaturas.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/maquiagem-para-diferentes-ocasioes.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Qual é a melhor maquiagem para um casamento?",
      answer: "Para casamentos, opte por uma maquiagem clássica e atemporal, com foco em uma pele radiante e olhos bem definidos."
    },
    {
      question: "Que tipo de maquiagem é adequada para festas?",
      answer: "Para festas, você pode ousar mais nas cores e brilhos, criando um look mais vibrante e divertido."
    },
    {
      question: "Como escolher a maquiagem para uma formatura?",
      answer: "Escolha uma maquiagem que destaque sua beleza, mas que também combine com o vestido e o tema da festa."
    },
    {
      question: "Posso usar maquiagem mais pesada durante o dia?",
      answer: "É melhor optar por uma maquiagem mais leve durante o dia e reservar os looks mais pesados para a noite."
    },
    {
      question: "Quais produtos são essenciais para uma maquiagem de longa duração?",
      answer: "Use primer, base de longa duração e spray fixador para garantir que sua maquiagem permaneça intacta durante o evento."
    }
  ],
  tips: [
    {
      title: "Casamentos",
      description: "Aposte em tons neutros e uma pele bem iluminada para um look elegante e sofisticado.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Festas",
      description: "Experimente cores vibrantes e brilhos para um look divertido e festivo.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Formaturas",
      description: "Escolha uma maquiagem que complemente seu vestido e realce sua beleza natural.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Maquiagem para Diferentes Ocasiões", url: "/maquiagem-para-diferentes-ocasioes" }
  ],
  images: [
    {
      url: "/images/maquiagem-para-diferentes-ocasioes.webp",
      description: "Maquiagem para Diferentes Ocasiões",
      width: 500,
      height: 333,
      name: "Maquiagem para Diferentes Ocasiões",
      datePublished: "2025-03-01"
    }
  ]
};

const MaquiagemParaDiferentesOcasioesPage = () => {
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
            alt="Maquiagem para Diferentes Ocasiões"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Encontre o Look Perfeito para Cada Ocasião</h2>
          <p className={styles.description}>
            No Studio Amendolla, ajudamos você a escolher a maquiagem ideal para cada evento. Siga nossas dicas e arrase em qualquer ocasião!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20maquiagem%20para%20diferentes%20ocasiões."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Maquiagem
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Maquiagem para Diferentes Ocasiões</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Maquiagem para Diferentes Ocasiões</h2>
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

export default MaquiagemParaDiferentesOcasioesPage;
