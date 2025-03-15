import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Maquiadora Profissional em São Paulo | Studio Amendolla',
    description: 'Serviço especializado de maquiagem profissional em São Paulo. Transforme sua beleza com técnicas exclusivas e produtos de alta performance.',
    keywords: [
      // Foco local
      'maquiadora profissional São Paulo',
      'makeup artist zona norte',
      
      // Serviços específicos
      'maquiagem para eventos SP', 
      'make up profissional casamento',
      
      // Diferenciais
      'maquiagem personalizada',
      'técnicas de maquiagem exclusivas'
    ].join(', ')
  };
  
const pageData = {
  article: {
    headline: "Maquiadora Profissional em São Paulo - Transformação Completa | Studio Amendolla",
    description: "Descubra o poder de uma maquiagem profissional que realça sua beleza natural. Técnicas exclusivas e produtos de alta qualidade para momentos especiais.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Quais tipos de maquiagem vocês oferecem?",
      answer: "Oferecemos maquiagem para casamentos, formaturas, ensaios fotográficos, eventos sociais e maquiagem social com técnicas personalizadas."
    },
    {
      question: "Fazem teste de maquiagem?",
      answer: "Sim, realizamos sessão de teste completa para garantir que o resultado final seja exatamente como você deseja."
    },
    {
      question: "Trabalham com que tipo de produtos?",
      answer: "Utilizamos apenas produtos importados de alta performance, hipoalergênicos e de marcas reconhecidas internacionalmente."
    },
    {
      question: "Atendem a domicílio?",
      answer: "Sim, oferecemos serviço completo de maquiagem profissional em domicílio em toda São Paulo."
    }
  ],
  services: [
    {
      title: "Maquiagem para Casamento",
      description: "Maquiagem duradoura e fotogênica especialmente criada para o dia mais especial",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Maquiagem Social",
      description: "Produção completa para eventos sociais com técnicas personalizadas",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiadora Profissional",
      url: "https://studioamendollanoivas.com.br/maquiadora-profissional-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Maquiadora Profissional São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Profissional SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiadoraProfissionalSPPage() {
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
            alt="Maquiadora Profissional São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional que Transforma</h2>
          <p>
            No Studio Amendolla, cada traço de maquiagem é uma arte. 
            Nossa equipe especializada na Avenida Julio Buono, 2386 - Vila Nivi, 
            utiliza técnicas inovadoras e produtos de ponta para realçar sua beleza natural.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20os%20serviços%20de%20maquiagem%20profissional."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende uma Consultoria de Maquiagem
      </a>

      <section className={styles.servicesSection}>
        <h2>Nossos Serviços de Maquiagem</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem para Noivas</h3>
            <p>Técnicas especiais para garantir um look impecável e duradouro durante todo o evento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Social</h3>
            <p>Produção personalizada para eventos, garantindo elegância e destaque em qualquer ocasião.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Experimental</h3>
            <p>Sessão completa de teste para definir o look perfeito e sua maquiagem ideal.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes sobre Maquiagem</h2>
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
