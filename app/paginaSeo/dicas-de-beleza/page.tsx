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
    headline: "Dicas de Beleza para Eventos: Prepare-se para Brilhar",
    description:
      "Descubra dicas valiosas para se preparar para eventos especiais, desde a escolha da maquiagem até o penteado perfeito.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/dicas-de-beleza.webp", // coloque o mesmo no da pagina
  },
  faq: [
    {
      question: "Como escolher a maquiagem certa para o meu evento?",
      answer: "Considere o tema do evento e a roupa que você usará. É sempre bom fazer um teste de maquiagem antes."
    },
    {
      question: "Quais penteados são mais adequados para festas?",
      answer: "Penteados como coques, tranças e ondas soltas são ótimas opções para festas."
    },
    {
      question: "Como cuidar da pele antes de um evento?",
      answer: "Hidrate bem a pele e faça uma limpeza profunda alguns dias antes do evento para garantir que a maquiagem fique perfeita."
    }
  ],
  tips: [
    {
      title: "Teste de Maquiagem",
      description: "Agende um teste de maquiagem para garantir que você esteja satisfeita com o resultado final.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Escolha do Penteado",
      description: "Considere o estilo do seu vestido e o tema do evento ao escolher o penteado.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Cuidados com a Pele",
      description: "Mantenha uma rotina de cuidados com a pele para garantir um acabamento perfeito na maquiagem.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Dicas de Beleza", url: "/dicas-de-beleza" }
  ],
  images: [
    {
      url: "/images/dicas-de-beleza.webp",
      description: "Dicas de Beleza para Eventos",
      width: 500,
      height: 333,
      name: "Dicas de Beleza",
      datePublished: "2025-03-01"
    }
  ]
};

const DicasDeBelezaPage = () => {
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
            alt="Dicas de Beleza"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Prepare-se para Brilhar</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos dicas valiosas para ajudá-la a se preparar para eventos especiais. Desde a escolha da maquiagem até o penteado perfeito, estamos aqui para garantir que você se sinta incrível.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20dicas%20de%20beleza%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Beleza
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Beleza</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Dicas de Beleza</h2>
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

export default DicasDeBelezaPage;
