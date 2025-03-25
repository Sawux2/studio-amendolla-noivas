import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiadora Profissional Perto de Mim São Paulo | Studio Amendolla',
  description: 'Encontre a maquiadora profissional ideal perto de você em São Paulo. Atendimento personalizado com técnicas avançadas para destacar sua beleza.',
  keywords: 'maquiadora profissional perto de mim, maquiagem profissional sp, maquiadora casamento sp, maquiagem para noivas em sp'
};

const pageData = {
  article: {
    headline: "Maquiadora Profissional Perto de Mim São Paulo | Studio Amendolla",
    description: "Encontre a maquiadora profissional ideal perto de você em São Paulo. Atendimento personalizado com técnicas avançadas para destacar sua beleza.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "Como encontrar uma maquiadora profissional perto de mim?",
      answer: "No Studio Amendolla, oferecemos serviços de maquiagem profissional em várias regiões de São Paulo. Basta entrar em contato para saber mais."
    },
    {
      question: "Quais serviços de maquiagem são oferecidos?",
      answer: "Oferecemos maquiagem para noivas, madrinhas, formandas e para eventos especiais, sempre com técnicas avançadas e produtos premium."
    },
    {
      question: "A maquiagem é feita em meu local ou no estúdio?",
      answer: "Oferecemos a opção de maquiagem no estúdio ou a domicílio, de acordo com a sua preferência e região."
    },
    {
      question: "Como agendar um atendimento?",
      answer: "Entre em contato pelo WhatsApp para verificar a disponibilidade e agendar seu atendimento de maquiagem profissional."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Realce sua beleza com uma maquiagem duradoura e sofisticada, ideal para o grande dia.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Maquiagem para Eventos Especiais",
      description: "Transforme seu look com maquiagem personalizada para casamentos, formaturas e outros eventos.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora Profissional Perto de Mim",
      url: "https://studioamendollanoivas.com.br/maquiadora-profissional-perto-de-mim"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-casamento-dia-priscila-1.webp",
      description: "Maquiadora Profissional Perto de Mim São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiadora Profissional SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiadoraProfissionalPertoDeMimSPPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pageData.article.headline}</h1>
        <p className={styles.description}>{pageData.article.description}</p>
      </header>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={pageData.article.image}
            alt="Maquiadora Profissional Perto de Mim São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Encontre sua Maquiadora Profissional Perto de Você</h2>
          <p>
            No Studio Amendolla, você encontra maquiadoras experientes em várias regiões de São Paulo, oferecendo um atendimento personalizado para realçar sua beleza de forma única.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20minha%20maquiagem%20profissional."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Maquiagem Agora
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional para Noivas</h3>
            <p>Make sofisticada e duradoura para o seu grande dia, com técnicas exclusivas e produtos de alta qualidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Transforme seu look com maquiagem personalizada para casamentos, formaturas e eventos especiais.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqGrid}>
          {pageData.faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturesCards />
      <UnifiedSchemas pageData={pageData} />
    </div>
  );
}
