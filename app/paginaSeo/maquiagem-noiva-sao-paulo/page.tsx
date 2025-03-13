import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Maquiagem Noiva São Paulo | Studio Amendolla',
  description: 'Maquiagem profissional para noivas em São Paulo. Técnicas exclusivas, produtos premium e make à prova de lágrimas para seu dia especial.',
  keywords: 'maquiagem noiva sp, make noiva são paulo, maquiadora noivas sp, maquiagem casamento sp'
};

const pageData = {
  article: {
    headline: "Maquiagem Noiva São Paulo | Studio Amendolla",
    description: "Maquiagem profissional para noivas em São Paulo. Técnicas exclusivas, produtos premium e make à prova de lágrimas para seu dia especial.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
        image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
  },
  faq: [
    {
      question: "Quais produtos são utilizados?",
      answer: "Trabalhamos com marcas premium internacionais, garantindo durabilidade e qualidade nas fotos."
    },
    {
      question: "A maquiagem é à prova d'água?",
      answer: "Sim, utilizamos produtos específicos à prova d'água e técnicas para garantir duração durante todo o evento."
    },
    {
      question: "Fazem teste de maquiagem?",
      answer: "Sim, o teste é fundamental para definirmos o look perfeito para seu grande dia."
    },
    {
      question: "Qual o tempo de duração da make?",
      answer: "Nossa maquiagem tem duração média de 12 horas, mantendo-se impecável durante toda a celebração."
    }
  ],
  services: [
    {
      title: "Maquiagem para Noivas",
      description: "Make profissional com produtos importados",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    },
    {
      title: "Maquiagem para Madrinhas",
      description: "Looks harmoniosos para todo o grupo",
      image: "/images/maquiagem-casamento-dia-priscila-1.webp", 
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Maquiagem Noiva",
      url: "https://studioamendollanoivas.com.br/maquiagem-noiva-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/maquiagem-noiva-sp.webp",
      description: "Maquiagem Noiva São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Maquiagem Noiva SP",
      datePublished: "2024-02-01"
    }
  ]
};

export default function MaquiagemNoivaSPPage() {
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
            alt="Maquiagem Noiva São Paulo"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Maquiagem Profissional para Noivas</h2>
          <p>
            Em nosso studio na Avenida Julio Buono, 2386 - Vila Nivi, 
            oferecemos serviços de maquiagem premium com técnicas exclusivas 
            e produtos de alta performance para garantir uma make perfeita e duradoura.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20informações%20sobre%20maquiagem%20para%20noiva."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende seu Teste de Make
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços de Maquiagem</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Make Noiva</h3>
            <p>Maquiagem sofisticada e duradoura, perfeita para fotos e vídeos.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Make Madrinhas</h3>
            <p>Looks coordenados e elegantes para todo o grupo.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Teste de Make</h3>
            <p>Sessão personalizada para definir o look ideal.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Dúvidas sobre Maquiagem</h2>
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
