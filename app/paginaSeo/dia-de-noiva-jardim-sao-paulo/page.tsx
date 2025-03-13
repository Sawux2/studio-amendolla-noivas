import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
  title: 'Dia de Noiva Jardim São Paulo | Studio Amendolla',
  description: 'Serviço especializado de Dia de Noiva em Jardim São Paulo. Beleza e preparação completa para noivas com atendimento personalizado na região.',
  keywords: [
    // Foco local
    'dia de noiva Jardim São Paulo',
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
    headline: "Dia de Noiva Jardim São Paulo - Experiência Próxima | Studio Amendolla",
    description: "Transforme seu dia especial com nosso serviço exclusivo de Dia de Noiva em Jardim São Paulo. Localização estratégica a apenas 5 km do seu bairro.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Qual a distância exata do studio para Jardim São Paulo?",
      answer: "Estamos localizados a aproximadamente 5 km do Jardim São Paulo, com acesso rápido pela Avenida Julio Buono."
    },
    {
      question: "Tempo de deslocamento do Jardim São Paulo até o studio?",
      answer: "O trajeto leva cerca de 10-15 minutos, dependendo do trânsito local."
    },
    {
      question: "Fazem atendimento a domicílio em Jardim São Paulo?",
      answer: "Sim, oferecemos atendimento a domicílio em Jardim São Paulo e bairros adjacentes, com taxa adicional de deslocamento."
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
      description: "Experiência exclusiva próxima a Jardim São Paulo",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva Jardim São Paulo",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-jardim-sao-paulo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Jardim São Paulo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Jardim São Paulo",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaJardimSaoPauloPage() {
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
            alt="Dia de Noiva Jardim São Paulo SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia de Noiva Próximo ao Jardim São Paulo</h2>
          <p>
            Estrategicamente localizado a apenas 5 km do Jardim São Paulo, 
            o Studio Amendolla na Avenida Julio Buono, 2386 - Jardim São Paulo, 
            oferece uma experiência completa de beleza com técnicas inovadoras 
            e produtos de alta performance. Fácil acesso e estacionamento próprio.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20em%20Jardim%20São%20Paulo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Consultoria
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais para Jardim São Paulo</h2>
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
