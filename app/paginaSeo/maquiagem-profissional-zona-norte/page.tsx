import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional Zona Norte São Paulo | Studio Amendolla',
  description: 'Encontre maquiagem profissional na Zona Norte de São Paulo. Atendimento especializado com a opção de maquiagem domiciliar para toda a cidade.',
  keywords: 'maquiagem profissional zona norte sp, maquiagem casamento zona norte, maquiagem para noivas zona norte, atendimento domiciliar maquiagem sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional Zona Norte São Paulo | Studio Amendolla",
    description: "Oferecemos maquiagem profissional na Zona Norte e toda São Paulo, com opção de serviço domiciliar. Localizados na Avenida Julio Buono, 2386, Zona Norte de São Paulo.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "A maquiagem é feita apenas na Zona Norte?",
      answer: "Não, atendemos toda a cidade de São Paulo, incluindo a Zona Norte, com serviço de maquiagem domiciliar disponível em todas as regiões."
    },
    {
      question: "Quais serviços de maquiagem vocês oferecem?",
      answer: "Oferecemos maquiagem para noivas, madrinhas, formandas, e para eventos especiais, com técnicas avançadas e produtos de alta qualidade."
    },
    {
      question: "Onde fica o Studio Amendolla?",
      answer: "Nosso estúdio está localizado na Zona Norte, na Avenida Julio Buono, 2386. Porém, atendemos toda a cidade de São Paulo, com maquiagem a domicílio."
    },
    {
      question: "Como agendar uma maquiagem profissional?",
      answer: "Basta entrar em contato pelo WhatsApp para saber a disponibilidade e agendar seu atendimento de maquiagem profissional, seja no estúdio ou em sua casa."
    }
  ],
  services: [
    {
      title: "Maquiagem Profissional para Noivas",
      description: "Realce sua beleza com uma maquiagem sofisticada e duradoura, ideal para o seu grande dia.",
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
      name: "Maquiagem Profissional Zona Norte",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-profissional-zona-norte-sp.webp",
      description: "Maquiagem Profissional Zona Norte São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional Zona Norte SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemProfissionalZonaNorteSPPage() {
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
            alt="Maquiagem Profissional Zona Norte São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Atendimento Personalizado em Toda São Paulo</h2>
          <p>
            O Studio Amendolla oferece serviços de maquiagem profissional em toda São Paulo. Nosso estúdio está localizado na Zona Norte, na Avenida Julio Buono, 2386, mas também atendemos outras regiões da cidade com a opção de atendimento domiciliar. Garantimos um atendimento personalizado, com técnicas de alta qualidade e produtos premium.
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
            <p>Transforme seu look com maquiagem personalizada para casamentos, formaturas e outros eventos especiais.</p>
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
