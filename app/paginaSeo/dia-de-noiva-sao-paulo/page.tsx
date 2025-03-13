import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Dia de Noiva São Paulo | Studio Amendolla',
    description: 'Serviço especializado de Dia de Noiva em São Paulo. Beleza e preparação completa para noivas com atendimento personalizado na região.',
    keywords: [
      // Foco local
      'dia de noiva São Paulo',
      'maquiagem noiva zona norte',
      
      // Serviços específicos
      'penteado casamento SP', 
      'make up profissional noiva',
      
      // Diferenciais
      'beleza nupcial personalizada',
      'atendimento domicílio noiva'
    ].join(', ')
  };
  
const pageData = {
  article: {
    headline: "Dia de Noiva São Paulo - Pacote Completo | Studio Amendolla",
    description: "Realize seu sonho com nosso serviço exclusivo de Dia de Noiva em São Paulo. Atendimento personalizado no studio ou a domicílio, com profissionais especializados.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "O que inclui o serviço de Dia de Noiva?",
      answer: "Maquiagem profissional, penteado, preparação da pele, teste prévio completo e atendimento exclusivo durante todo o processo."
    },
    {
      question: "Fazem atendimento a domicílio?",
      answer: "Sim, atendemos em toda São Paulo, levando toda estrutura necessária até você."
    },
    {
      question: "Quanto tempo antes devo agendar?",
      answer: "Recomendamos agendamento com 6 meses de antecedência para garantir a data."
    },
    {
      question: "Atendem mais de uma noiva por dia?",
      answer: "Não, garantimos exclusividade total no seu dia para uma experiência única."
    }
  ],
  services: [
    {
      title: "Dia de Noiva Completo",
      description: "Pacote completo com make, penteado e cuidados especiais",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Dia de Noiva a Domicílio",
      description: "Todo conforto e estrutura em sua casa ou hotel",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaSPPage() {
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
            alt="Dia de Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia de Noiva Perfeito em São Paulo</h2>
          <p>
            No Studio Amendolla, seu dia de noiva será único e especial.
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi,
            garante uma produção impecável com técnicas inovadoras e produtos de alta performance.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20completo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende uma Consultoria Gratuita
      </a>

      <section className={styles.servicesSection}>
        <h2>Pacote Dia de Noiva Completo</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Make duradoura com técnicas exclusivas e produtos importados para garantir perfeição em todas as fotos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Exclusivo</h3>
            <p>Criações únicas que valorizam seus traços e combinam perfeitamente com seu vestido e estilo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste Completo</h3>
            <p>Sessão prévia para definir o look perfeito, incluindo teste de produtos e registro fotográfico.</p>
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
