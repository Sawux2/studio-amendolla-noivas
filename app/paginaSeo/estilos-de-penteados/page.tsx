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
    headline: "Estilos de Penteados para Eventos: Inspire-se!",
    description:
      "Descubra os estilos de penteados mais populares para eventos e encontre a inspiração perfeita para o seu grande dia.",
    author: "Priscila Helena",
    datePublished: "2025-03-01",
    image: "/images/estilos-de-penteados.webp", // nome da imagem deve ser o mesmo da página
  },
  faq: [
    {
      question: "Quais são os estilos de penteados mais populares para casamentos?",
      answer: "Os estilos mais populares incluem coques, tranças e penteados soltos com ondas."
    },
    {
      question: "Como escolher o penteado certo para o meu evento?",
      answer: "Considere o formato do seu rosto, o estilo do vestido e o tema do evento ao escolher seu penteado."
    },
    {
      question: "Devo fazer um teste de penteado antes do evento?",
      answer: "Sim, é altamente recomendável fazer um teste para garantir que você esteja satisfeita com o resultado."
    },
    {
      question: "Quais acessórios posso usar para complementar meu penteado?",
      answer: "Acessórios como tiaras, flores e grampos decorativos podem adicionar um toque especial ao seu penteado."
    },
    {
      question: "Como posso garantir que meu penteado dure o dia todo?",
      answer: "Use produtos de fixação e evite tocar no cabelo durante o evento para manter o penteado intacto."
    }
  ],
  tips: [
    {
      title: "Coque Clássico",
      description: "Um coque elegante é perfeito para eventos formais e combina bem com qualquer vestido.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Trança Lateral",
      description: "Uma trança lateral é uma opção romântica e descontraída, ideal para casamentos ao ar livre.",
      image: "", // Repetir imagem padrão já tem no schema
    },
    {
      title: "Ondas Soltas",
      description: "Penteados com ondas soltas são versáteis e podem ser usados tanto em eventos formais quanto informais.",
      image: "", // Repetir imagem padrão já tem no schema
    }
  ],
  breadcrumb: [
    { name: "Home", url: "/" },
    { name: "Estilos de Penteados", url: "/estilos-de-penteados" }
  ],
  images: [
    {
      url: "/images/estilos-de-penteados.webp",
      description: "Estilos de Penteados para Eventos",
      width: 500,
      height: 333,
      name: "Estilos de Penteados",
      datePublished: "2025-03-01"
    }
  ]
};

const EstilosDePenteadosPage = () => {
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
            alt="Estilos de Penteados"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Encontre o Penteado Perfeito para Você</h2>
          <p className={styles.description}>
            No Studio Amendolla, oferecemos uma variedade de estilos de penteados para atender a todas as suas necessidades. Inspire-se com nossas sugestões e escolha o penteado ideal para o seu evento!
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      {/* CTA para WhatsApp */}
      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20estilos%20de%20penteados%20para%20meu%20evento."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco para Mais Dicas de Penteados
      </a>

      {/* Seção de Dicas */}
      <section className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Nossos Estilos de Penteados</h2>
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
        <h2 className={styles.sectionTitle}>Perguntas Frequentes sobre Estilos de Penteados</h2>
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

export default EstilosDePenteadosPage;
