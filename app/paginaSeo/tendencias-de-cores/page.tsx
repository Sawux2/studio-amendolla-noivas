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
    headline: "Tendências de Cores de Maquiagem para Eventos: O Que Está em Alta",
    description:
      "Descubra as cores de maquiagem que estão em alta para eventos e como usá-las para brilhar em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/tendencias-de-cores.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Quais são as cores de maquiagem mais populares para 2025?",
      answer: "As cores em alta incluem tons terrosos, pastéis e vibrantes como o vermelho e o roxo."
    },
    {
      question: "Como escolher a cor certa de batom para o meu tom de pele?",
      answer: "Tons mais claros funcionam bem em peles claras, enquanto tons mais escuros são ótimos para peles mais escuras."
    },
    {
      question: "Posso misturar diferentes cores de sombras?",
      answer: "Sim, misturar cores pode criar um look único e personalizado. Experimente combinações que complementem seu olhar."
    },
    {
      question: "Quais cores são melhores para maquiagem de noiva?",
      answer: "Tons neutros e suaves são populares para noivas, mas também é possível usar cores mais ousadas, dependendo do estilo do casamento."
    },
    {
      question: "Como posso fazer a maquiagem durar mais com cores vibrantes?",
      answer: "Use um primer e finalize com um spray fixador para garantir que a maquiagem se mantenha intacta durante o evento."
    }
  ],
  tips: [
    {
      title: "Tons Terrosos",
      description: "Perfeitos para um look natural e sofisticado, os tons terrosos são versáteis e combinam com qualquer evento.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Cores Pastel",
      description: "As cores pastel são ideais para eventos diurnos e trazem um ar romântico ao visual.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Vermelho Clássico",
      description: "Um batom vermelho é atemporal e pode ser usado em qualquer ocasião, trazendo elegância e confiança.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Tendências de Cores", url: "/tendencias-de-cores" }
  ],
  images: [
    {
      url: "/images/tendencias-de-cores.webp",
      description: "Tendências de Cores de Maquiagem para Eventos",
      width: 500,
      height: 333,
      name: "Tendências de Cores",
      datePublished: "2025-03-01"
    }
  ]
};

const TendenciasDeCoresPage = () => {
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
            alt="Tendências de Cores"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Explore as Cores que Estão em Alta</h2>
          <p className={styles.description}>
            No Studio Amendolla, estamos sempre atentos às últimas tendências de cores de maquiagem. Venha descobrir como usar essas cores para brilhar em seu próximo evento!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20tendências%20de%20cores%20de%20maquiagem%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Cores
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossas Dicas de Cores de Maquiagem</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Tendências de Cores de Maquiagem</h2>
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

export default TendenciasDeCoresPage;
