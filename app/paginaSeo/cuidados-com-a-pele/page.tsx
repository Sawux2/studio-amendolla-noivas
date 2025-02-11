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
    headline: "Cuidados com a Pele para Eventos: Prepare-se para Brilhar",
    description:
      "Aprenda como cuidar da sua pele antes de um evento especial para garantir uma maquiagem impecável e um visual radiante.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/cuidados-com-a-pele.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Qual é a rotina ideal de cuidados com a pele antes de um evento?",
      answer: "Uma rotina ideal inclui limpeza, esfoliação, tonificação e hidratação, além de um bom protetor solar."
    },
    {
      question: "Quando devo começar a cuidar da minha pele antes do evento?",
      answer: "Comece pelo menos uma semana antes do evento para garantir que sua pele esteja em ótimas condições."
    },
    {
      question: "Quais produtos são recomendados para cuidados com a pele?",
      answer: "Use produtos adequados ao seu tipo de pele, como limpadores suaves, esfoliantes e hidratantes."
    },
    {
      question: "Devo fazer um tratamento facial antes do evento?",
      answer: "Sim, um tratamento facial pode ajudar a preparar sua pele e deixá-la mais radiante."
    },
    {
      question: "Como posso garantir que minha maquiagem dure mais tempo?",
      answer: "Hidratar bem a pele e usar um primer adequado são essenciais para aumentar a durabilidade da maquiagem."
    }
  ],
  tips: [
    {
      title: "Hidratação",
      description: "Mantenha sua pele bem hidratada, bebendo bastante água e usando um bom hidratante.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Esfoliação",
      description: "Esfolie a pele uma ou duas vezes por semana para remover células mortas e deixar a pele suave.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Proteção Solar",
      description: "Use protetor solar diariamente para proteger sua pele dos danos solares.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Cuidados com a Pele", url: "/cuidados-com-a-pele" }
  ],
  images: [
    {
      url: "/images/cuidados-com-a-pele.webp",
      description: "Cuidados com a Pele para Eventos",
      width: 500,
      height: 333,
      name: "Cuidados com a Pele",
      datePublished: "2025-03-01"
    }
  ]
};

const CuidadosComAPelePage = () => {
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
            alt="Cuidados com a Pele"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Prepare sua Pele para o Grande Dia</h2>
          <p className={styles.description}>
            No Studio Amendolla, acreditamos que uma pele bem cuidada é a base para uma maquiagem perfeita. Siga nossas dicas e prepare-se para brilhar!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20cuidados%20com%20a%20pele%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Cuidados com a Pele
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Cuidados com a Pele</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Cuidados com a Pele</h2>
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

export default CuidadosComAPelePage;
