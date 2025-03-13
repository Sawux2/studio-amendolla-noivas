import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

export const metadata: Metadata = {
    title: 'Dia de Noiva Vila Guilherme | Studio Amendolla',
    description: 'Serviço especializado de Dia de Noiva em Vila Guilherme. Beleza e preparação completa para noivas com atendimento personalizado na região.',
    keywords: [
      // Foco local
      'dia de noiva Vila Guilherme',
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
    headline: "Dia de Noiva Vila Guilherme - Experiência Única | Studio Amendolla",
    description: "Transforme seu dia especial com nosso serviço exclusivo de Dia de Noiva em Vila Guilherme. Atendimento personalizado e profissional a apenas poucos minutos da sua região.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Qual a distância do studio para Vila Guilherme?",
      answer: "Nosso studio na Vila Nivi fica muito próximo de Vila Guilherme, com fácil acesso e estacionamento."
    },
    {
      question: "Fazem atendimento a domicílio em Vila Guilherme?",
      answer: "Sim, oferecemos atendimento a domicílio em toda região de Vila Guilherme e adjacências."
    },
    {
      question: "Quais são os serviços incluídos no Dia de Noiva?",
      answer: "Incluímos maquiagem profissional, penteado, teste prévio, preparação da pele e consultoria de beleza, massagem relaxante e muito mais."
    },
    {
      question: "Como garantir a data do meu Dia de Noiva?",
      answer: "Recomendamos reserva com antecedência, fazendo um pré-agendamento com pagamento de sinal."
    }
  ],
  services: [
    {
      title: "Dia de Noiva Completo",
      description: "Pacote premium com maquiagem, penteado e preparação total",
      image: "/images/dia-de-noiva.webp",
    },
    {
      title: "Atendimento Personalizado",
      description: "Experiência exclusiva próxima a Vila Guilherme",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva Vila Guilherme",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-vila-guilherme"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Vila Guilherme - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Vila Guilherme",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaVilaGuilhermePage() {
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
            alt="Dia de Noiva Vila Guilherme SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia de Noiva Próximo a Vila Guilherme</h2>
          <p>
            Localizado estrategicamente na Avenida Julio Buono, 2386 - Vila Nivi, 
            o Studio Amendolla está a poucos minutos de Vila Guilherme. 
            Oferecemos uma experiência completa de beleza com técnicas inovadoras 
            e produtos de alta performance.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20em%20Vila%20Guilherme."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Consultoria
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais para Vila Guilherme</h2>
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
