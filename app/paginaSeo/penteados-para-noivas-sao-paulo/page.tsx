import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Penteados para Noivas em São Paulo | Studio Amendolla',
    description: 'Serviço especializado em penteados para noivas em São Paulo. Criações únicas que realçam sua beleza e estilo no dia mais importante.',
    keywords: [
      // Foco local
      'penteados para noivas São Paulo',
      'penteado de noiva zona norte',
      
      // Serviços específicos
      'penteado casamento SP', 
      'penteados elegantes para noivas',
      
      // Diferenciais
      'penteado personalizado',
      'penteados modernos para casamento'
    ].join(', ')
  };
  
const pageData = {
  article: {
    headline: "Penteados para Noivas em São Paulo - Beleza e Elegância | Studio Amendolla",
    description: "Transforme seu visual com penteados exclusivos criados por profissionais especializados. Cada arranjo é pensado para realçar sua beleza única no dia do casamento.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quanto tempo antes devo agendar o teste de penteado?",
      answer: "Recomendamos agendar o teste de penteado com 2-3 meses de antecedência para garantir o look perfeito."
    },
    {
      question: "Fazem penteados para madrinhas também?",
      answer: "Sim, oferecemos serviços de penteado para madrinhas com o mesmo padrão de qualidade e personalização."
    },
    {
      question: "Posso fazer alterações no penteado no dia do teste?",
      answer: "Absolutamente! Nosso objetivo é garantir que você fique 100% satisfeita com o visual escolhido."
    },
    {
      question: "Trabalham com todos os tipos de cabelo?",
      answer: "Sim, nossa equipe é especializada em trabalhar com diferentes tipos, texturas e comprimentos de cabelo."
    }
  ],
  services: [
    {
      title: "Penteado Clássico",
      description: "Penteados tradicionais que nunca saem de moda, perfeitos para noivas elegantes",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Penteado Moderno",
      description: "Estilos contemporâneos que combinam tradição e tendência atual",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Penteados para Noivas",
      url: "https://studioamendollanoivas.com.br/penteados-para-noivas-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Penteados para Noivas São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Penteados de Noiva SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function PenteadosParaNoivasSPPage() {
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
            alt="Penteados para Noivas São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Penteados que Contam sua História</h2>
          <p>
            No Studio Amendolla, localizado na Avenida Julio Buono, 2386 - Vila Nivi, 
            criamos penteados que são verdadeiras obras de arte. 
            Cada arranjo é cuidadosamente elaborado para destacar sua personalidade e estilo.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20agendar%20um%20teste%20de%20penteado%20para%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Teste de Penteado
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Estilos de Penteado</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Penteados Presos</h3>
            <p>Elegantes e sofisticados, perfeitos para noivas que buscam um visual clássico e duradouro.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Soltos</h3>
            <p>Românticos e delicados, criando um visual natural e contemporâneo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Semipressos</h3>
            <p>Combinação perfeita entre solto e preso, oferecendo versatilidade e charme.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Penteados</h2>
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
