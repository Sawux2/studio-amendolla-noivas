import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Maquiagem para Madrinhas e Convidadas Zona Norte SP | Studio Amendolla',
    description: 'Serviços profissionais de beleza para madrinhas e convidadas na Vila Nivi, Zona Norte de São Paulo. A 10 minutos do Tucuruvi, oferecemos maquiagem e penteado com atendimento em grupo e resultados deslumbrantes.',
    keywords: [
      'maquiagem madrinhas zona norte',
      'make convidadas casamento SP',
      'penteado madrinha Vila Nivi',
      'beleza para eventos Tucuruvi',
      'maquiadora profissional Santana',
      'pacote madrinhas SP'
    ].join(', ')
};

const pageData = {
  article: {
    headline: "Maquiagem para Madrinhas e Convidadas na Zona Norte SP | Studio Amendolla",
    description: "Produções exclusivas para madrinhas e convidadas de casamento na Zona Norte. Localizado na Vila Nivi, próximo ao Tucuruvi e Santana, nosso studio oferece atendimento especializado em grupo com resultados impecáveis.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Como funciona o atendimento em grupo?",
      answer: "Organizamos cronogramas especiais para que todas fiquem prontas no horário ideal, com ambiente exclusivo e confortável."
    },
    {
      question: "Qual o tempo de antecedência para reserva?",
      answer: "Recomendamos agendamento com 2-3 meses de antecedência, especialmente para grupos grandes."
    },
    {
      question: "Oferecem descontos para grupos?",
      answer: "Sim! Temos pacotes especiais a partir de 3 pessoas, com valores diferenciados."
    },
    {
      question: "Onde está localizado o studio?",
      answer: "Estamos na Avenida Julio Buono, 2386 - Vila Nivi, a 5 minutos do Metrô Tucuruvi e próximo ao Shopping Center Norte."
    }
  ],
  services: [
    {
      title: "Pacote Madrinhas",
      description: "Make e penteado com atendimento em grupo",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Produção Convidadas",
      description: "Beleza completa para eventos especiais",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Madrinhas e Convidadas",
      url: "https://studioamendollanoivas.com.br/maquiagem-madrinhas-convidadas-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiagem Madrinhas e Convidadas - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Beleza Eventos SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemMadrinhasPage() {
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
            alt="Maquiagem Madrinhas Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza em Grupo na Zona Norte</h2>
          <p>
            Com localização privilegiada na Vila Nivi, a 5 minutos do Metrô Tucuruvi e 
            15 minutos do Shopping Center Norte, o Studio Amendolla é referência em 
            atendimento para grupos. Nosso espaço amplo e equipe especializada garantem 
            uma experiência tranquila e resultados harmoniosos para todas as madrinhas e convidadas.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20madrinhas."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicite um Orçamento
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Grupos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura com produtos premium e técnicas especiais para fotos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteados Exclusivos</h3>
            <p>Criações personalizadas que harmonizam com o evento e seu estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacotes Especiais</h3>
            <p>Condições diferenciadas para grupos, com agendamento flexível.</p>
          </div>
        </div>
      </section>

      <section className={styles.locationSection}>
        <h2>Fácil Acesso na Zona Norte</h2>
        <div className={styles.locationInfo}>
          <p>
            • 5 minutos do Metrô Tucuruvi<br />
            • 15 minutos do Shopping Center Norte<br />
            • 10 minutos de Santana<br />
            • Estacionamento fácil na região
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas Frequentes</h2>
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
