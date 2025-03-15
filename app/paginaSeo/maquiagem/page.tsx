import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Dia da Noiva Zona Norte SP | Studio Amendolla',
    description: 'Experiência exclusiva de Dia da Noiva na Zona Norte de São Paulo. Transforme seu grande dia com um atendimento premium em nosso studio especializado na Vila Nivi, oferecendo maquiagem profissional e penteados deslumbrantes.',
    keywords: [
      'dia da noiva zona norte',
      'beleza noiva Vila Nivi',
      'maquiagem noiva SP',
      'penteado casamento zona norte',
      'studio noivas Vila Gustavo',
      'make e hair noiva SP'
    ].join(', ')
};

const pageData = {
  article: {
    headline: "Dia da Noiva Zona Norte SP - Experiência Premium | Studio Amendolla",
    description: "Realize seu sonho com um Dia da Noiva exclusivo na Zona Norte de São Paulo. Em nosso studio na Vila Nivi, oferecemos uma experiência completa com maquiagem, penteado e cuidados especiais para tornar seu momento ainda mais memorável.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Onde está localizado o studio na Zona Norte?",
      answer: "Estamos na Avenida Julio Buono, 2386 - Vila Nivi, região da Zona Norte de São Paulo, com fácil acesso e estacionamento."
    },
    {
      question: "O que inclui o pacote Dia da Noiva?",
      answer: "Nosso pacote inclui maquiagem profissional, penteado exclusivo, teste prévio completo e ambiente dedicado para sua produção."
    },
    {
      question: "Qual o tempo de duração do serviço?",
      answer: "O Dia da Noiva tem duração média de 3 horas, garantindo tempo adequado para uma produção perfeita."
    },
    {
      question: "Trabalham com produtos específicos para noivas?",
      answer: "Utilizamos produtos premium de alta fixação, específicos para casamento, garantindo duração para todo o evento."
    }
  ],
  services: [
    {
      title: "Dia da Noiva Completo",
      description: "Experiência exclusiva com make, hair e cuidados especiais",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Pacote Premium Noivas",
      description: "Atendimento VIP com teste e produtos importados",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia da Noiva Zona Norte",
      url: "https://studioamendollanoivas.com.br/dia-da-noiva-zona-norte"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia da Noiva Zona Norte SP - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Noivas Zona Norte SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDaNoivaZonaNortePage() {
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
            alt="Dia da Noiva Zona Norte São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Experiência Única na Zona Norte</h2>
          <p>
            No Studio Amendolla, localizado estrategicamente na Vila Nivi, oferecemos um ambiente 
            exclusivo para seu Dia da Noiva. Nossa equipe especializada garante uma produção 
            impecável com técnicas modernas e produtos premium para realizar seu sonho.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20o%20Dia%20da%20Noiva%20na%20Zona%20Norte."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende uma Visita ao Studio
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços para Noivas</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura com técnicas exclusivas e produtos importados para um resultado perfeito.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Exclusivo</h3>
            <p>Criações personalizadas que valorizam seu estilo e complementam seu look nupcial.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir os detalhes da sua produção com registro fotográfico.</p>
          </div>
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
