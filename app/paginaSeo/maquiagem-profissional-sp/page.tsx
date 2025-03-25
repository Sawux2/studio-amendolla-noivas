import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Profissional em São Paulo | Studio Amendolla',
  description: 'Realce sua beleza com maquiagem profissional em São Paulo. Técnicas avançadas para um visual impecável em qualquer ocasião.',
  keywords: 'maquiagem profissional sp, maquiagem para eventos, maquiagem para casamento sp, maquiagem festa sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Profissional em São Paulo | Studio Amendolla",
    description: "Realce sua beleza com maquiagem profissional em São Paulo. Técnicas avançadas para um visual impecável em qualquer ocasião.",
    author: "Priscila Helena",
    datePublished: "2024-03-25",
    image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "Quais tipos de maquiagem vocês oferecem?",
      answer: "Trabalhamos com maquiagem para noivas, festas, eventos corporativos e ensaios fotográficos."
    },
    {
      question: "A maquiagem dura quanto tempo?",
      answer: "Utilizamos produtos de alta performance para garantir uma maquiagem impecável por até 12 horas."
    },
    {
      question: "Vocês oferecem atendimento a domicílio?",
      answer: "Sim, atendemos em domicílio para noivas e eventos especiais."
    },
    {
      question: "Como agendar um horário?",
      answer: "Entre em contato pelo WhatsApp para verificar disponibilidade e garantir sua reserva."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Produção impecável para um dia inesquecível, com técnicas que garantem longa duração e perfeição em cada detalhe.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Maquiagem para Eventos",
      description: "Destaque-se em qualquer ocasião com um look sofisticado e personalizado.",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Profissional",
      url: "https://studioamendollanoivas.com.br/maquiagem-profissional-sp"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-profissional-sp.webp",
      description: "Maquiagem Profissional São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional SP",
      datePublished: "2024-03-25"
    }
  ]
};

export default function MaquiagemProfissionalSPPage() {
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
            alt="Maquiagem Profissional São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional para Todas as Ocasiões</h2>
          <p>
            No Studio Amendolla, oferecemos serviços de maquiagem de alta qualidade, garantindo um visual impecável para noivas, festas e eventos especiais. Utilizamos técnicas modernas e produtos premium para uma experiência única.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20profissional."
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
            <h3>Maquiagem para Noivas</h3>
            <p>Produção impecável para um dia inesquecível, garantindo longa duração e sofisticação.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Eventos</h3>
            <p>Looks personalizados para cada ocasião, realçando sua beleza natural.</p>
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
