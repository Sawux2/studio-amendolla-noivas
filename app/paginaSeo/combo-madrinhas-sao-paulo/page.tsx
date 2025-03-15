import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Combo Madrinhas São Paulo | Studio Amendolla',
    description: 'Pacotes especiais de beleza para madrinhas em São Paulo. Maquiagem e penteado profissional para todo o grupo com atendimento personalizado.',
    keywords: [
      'combo madrinhas São Paulo',
      'maquiagem para madrinhas SP',
      'penteado madrinha casamento',
      'pacote beleza madrinhas',
      'produção madrinha zona norte',
      'make e cabelo madrinha'
    ].join(', ')
  };
  
const pageData = {
  article: {
    headline: "Combo Madrinhas São Paulo - Beleza em Grupo | Studio Amendolla",
    description: "Pacotes exclusivos para madrinhas com maquiagem e penteado profissional. Garanta uma produção harmoniosa e elegante para todo o grupo no grande dia.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quantas madrinhas podem ser atendidas no mesmo dia?",
      answer: "Nossa equipe está preparada para atender grupos grandes, garantindo que todas fiquem prontas no horário."
    },
    {
      question: "Oferecem desconto para grupos?",
      answer: "Sim, temos pacotes especiais com valores diferenciados para grupos de madrinhas."
    },
    {
      question: "É possível fazer teste antes?",
      answer: "Oferecemos teste opcional para a madrinha que desejar definir o look antecipadamente."
    },
    {
      question: "Como funciona o agendamento em grupo?",
      answer: "Organizamos um cronograma especial para que todas as madrinhas fiquem prontas no horário ideal."
    }
  ],
  services: [
    {
      title: "Combo Essencial Madrinhas",
      description: "Maquiagem e penteado profissional com produtos de alta qualidade",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Combo Premium Madrinhas",
      description: "Produção completa incluindo teste prévio e produtos importados",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Combo Madrinhas",
      url: "https://studioamendollanoivas.com.br/combo-madrinhas-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Combo Madrinhas São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Beleza Madrinhas SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function ComboMadrinhasSPPage() {
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
            alt="Combo Madrinhas São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza em Harmonia para Madrinhas</h2>
          <p>
            No Studio Amendolla, na Avenida Julio Buono, 2386 - Vila Nivi, 
            criamos looks harmoniosos para todo o grupo de madrinhas. 
            Nossa equipe especializada garante uma produção elegante e coordenada.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20o%20combo%20para%20madrinhas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento para Grupo
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacotes para Madrinhas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura e elegante que valoriza cada madrinha mantendo a harmonia do grupo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Coordenados</h3>
            <p>Estilos personalizados que se complementam, criando uma produção harmoniosa.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Premium</h3>
            <p>Inclui teste prévio, produtos importados e atendimento VIP para o grupo.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Combo Madrinhas</h2>
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
