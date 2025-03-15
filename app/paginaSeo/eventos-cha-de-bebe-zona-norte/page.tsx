import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Maquiagem para Chá de Bebê e Revelação Zona Norte SP | Studio Amendolla',
    description: 'Serviços especializados de beleza para Chá de Bebê e Chá Revelação na Zona Norte de São Paulo. Localizado na Vila Nivi, a apenas 10 minutos do Tucuruvi e 15 minutos do Shopping Center Norte, oferecemos maquiagem e penteado profissional para seu momento especial.',
    keywords: [
      'maquiagem chá de bebê zona norte',
      'make chá revelação SP',
      'beleza eventos Vila Nivi',
      'maquiadora Tucuruvi',
      'penteado festa Santana',
      'make eventos Vila Gustavo'
    ].join(', ')
};

const pageData = {
  article: {
    headline: "Maquiagem para Chá de Bebê e Revelação na Zona Norte SP | Studio Amendolla",
    description: "Especialistas em beleza para eventos especiais na Zona Norte. Próximo ao Tucuruvi, Santana e região, nosso studio oferece produções exclusivas para mamães e convidadas, com fácil acesso às principais vias da zona norte.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Qual a localização exata do studio?",
      answer: "Estamos na Avenida Julio Buono, 2386 - Vila Nivi, a 5 minutos do Metrô Tucuruvi, próximo ao Shopping Center Norte e de fácil acesso para toda Zona Norte."
    },
    {
      question: "Atendem grupos para chá de bebê?",
      answer: "Sim! Temos pacotes especiais para mamães e convidadas, com horários flexíveis e atendimento em grupo."
    },
    {
      question: "Fazem maquiagem temática para chá revelação?",
      answer: "Oferecemos makes especiais com elementos em azul e rosa para chás revelação, mantendo a surpresa até o momento especial."
    },
    {
      question: "Qual o tempo médio de produção?",
      answer: "A produção completa leva em média 1h30, mas organizamos cronogramas especiais para grupos."
    }
  ],
  services: [
    {
      title: "Make Especial Mamãe",
      description: "Maquiagem suave e duradoura pensada especialmente para gestantes",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Pacote Chá Revelação",
      description: "Produção temática para momentos únicos e memoráveis",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Eventos Especiais",
      url: "https://studioamendollanoivas.com.br/eventos-cha-de-bebe-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiagem para Eventos Especiais - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Eventos Zona Norte SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function EventosChaBebePage() {
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
            alt="Maquiagem para Chá de Bebê Zona Norte"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Beleza Especial para Momentos Únicos</h2>
          <p>
            Localizado estrategicamente na Vila Nivi, a apenas 5 minutos do Metrô Tucuruvi e 
            15 minutos do Shopping Center Norte, o Studio Amendolla é especialista em produções 
            para eventos especiais. Atendemos toda região da Zona Norte, incluindo Santana, 
            Parada Inglesa, Jardim São Paulo e Vila Maria.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20chá%20de%20bebê."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua Produção
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Eventos</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Gestante</h3>
            <p>Maquiagem delicada e duradoura com produtos hipoalergênicos especiais para gestantes.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Chá Revelação</h3>
            <p>Produções temáticas que complementam a decoração e o momento especial da revelação.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pacote Convidadas</h3>
            <p>Atendimento em grupo com preços especiais para familiares e amigas.</p>
          </div>
        </div>
      </section>

      <section className={styles.locationSection}>
        <h2>Fácil Acesso na Zona Norte</h2>
        <div className={styles.locationInfo}>
          <p>
            • 5 minutos do Metrô Tucuruvi<br />
            • 15 minutos do Shopping Center Norte<br />
            • 10 minutos do Santana Parque Shopping<br />
            • Próximo à Marginal Tietê<br />
            • Fácil acesso pela Avenida Cruzeiro do Sul
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
