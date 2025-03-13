import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Dia de Noiva Jardim Japão SP | Studio Amendolla',
  description: 'Serviço especializado de Dia de Noiva em Jardim Japão. Beleza e preparação completa para noivas, a apenas 4 km do bairro.',
  keywords: 'dia de noiva jardim japão, dia da noiva zona norte, maquiagem noiva sp, penteado noiva jardim japão'
};

const pageData = {
  article: {
    headline: "Dia de Noiva Jardim Japão - Experiência Próxima | Studio Amendolla",
    description: "Transforme seu dia especial com nosso serviço exclusivo de Dia de Noiva em Jardim Japão. Localização estratégica a apenas 4 km do seu bairro.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Qual a distância exata do studio para Jardim Japão?",
      answer: "Estamos localizados a aproximadamente 4 km do Jardim Japão, com acesso rápido pela Avenida Julio Buono."
    },
    {
      question: "Tempo de deslocamento do Jardim Japão até o studio?",
      answer: "O trajeto leva cerca de 8-12 minutos, dependendo do trânsito local."
    },
    {
      question: "Fazem atendimento a domicílio em Jardim Japão?",
      answer: "Sim, oferecemos atendimento a domicílio em Jardim Japão e bairros adjacentes, com taxa adicional de deslocamento."
    },
 
  ],
  services: [
    {
      title: "Dia de Noiva Completo",
      description: "Pacote premium com maquiagem, penteado e preparação total",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Atendimento Personalizado",
      description: "Experiência exclusiva próxima a Jardim Japão",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva Jardim Japão",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-jardim-japao"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Jardim Japão - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Jardim Japão",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaJardimJapaoPage() {
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
            alt="Dia de Noiva Jardim Japão SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia de Noiva Próximo ao Jardim Japão</h2>
          <p>
            Estrategicamente localizado a apenas 4 km do Jardim Japão, 
            o Studio Amendolla na Avenida Julio Buono, 2386 - Vila Nivi, 
            oferece uma experiência completa de beleza com técnicas inovadoras 
            e produtos de alta performance. Fácil acesso e estacionamento próprio.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20em%20Jardim%20Japão."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Consultoria
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais para Jardim Japão</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Maquiagem Profissional</h3>
            <p>Técnicas exclusivas para realçar sua beleza natural com produtos importados.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Penteado Personalizado</h3>
            <p>Criações únicas que combinam com seu estilo e vestido de noiva.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consultoria Completa</h3>
            <p>Orientação especializada para um visual perfeito em seu grande dia.</p>
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
