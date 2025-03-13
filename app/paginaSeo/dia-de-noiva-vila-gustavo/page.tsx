import { Metadata } from 'next';
import React from "react";
import Image from "next/image";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import styles from "app/styles/BelezaNoivasSP.module.css";
import FeaturesCards from "app/components/FeaturesCards";
import GaleriaDeFotos from "app/components/GaleriaDeFotos";

const keywordsList = [
  // Makeup and Hairstyling
  'maquiagem para noiva profissional',
  'penteado de noiva elegante',
  'make up casamento sp',
  'penteado preso para noiva',
  'maquiagem natural para noiva',
  'penteado solto para casamento',
  'maquiagem duradoura para noiva',
  
  // Location-Specific
  'dia de noiva zona norte sp',
  'maquiagem de noiva vila nivi',
  'penteado noiva vila gustavo',
  'dia de noiva próximo a santana',
  'maquiagem casamento tucuruvi',
  'penteado noiva jardim são paulo',
  
  // Service Types
  'atendimento a domicílio para noivas',
  'dia da noiva completo',
  'pacote de beleza para casamento',
  'teste de maquiagem para noiva',
  
  // Specific Techniques
  'maquiagem profissional para casamento',
  'penteado romântico para noiva',
  'make up alta duração',
  'penteado clássico para noiva',
  
  // Bridal Preparation
  'preparação de beleza para casamento',
  'cuidados de beleza pré-casamento',
  'maquiagem e penteado no dia do casamento',
  
  // Location and Convenience
  'studio de beleza próximo a mim',
  'maquiagem de noiva zona norte',
  'penteado para noiva com deslocamento',
  
  // Specific Styles
  'maquiagem glamour para noiva',
  'penteado semi-preso para casamento',
  'make up delicado para noiva',
  
  // Professional Aspects
  'maquiagem profissional sp',
  'penteado por especialista em noivas',
  'studio de beleza para noivas',
  
  // Emotional and Personal Touch
  'maquiagem que realça a beleza natural',
  'penteado personalizado para noiva',
  'beleza e confiança no dia do casamento'
];

export const metadata: Metadata = {
  title: 'Dia de Noiva Vila Gustavo SP | Studio Amendolla',
  description: 'Serviço especializado de Dia de Noiva em Vila Gustavo. Beleza e preparação completa para noivas com atendimento personalizado na região.',
  keywords: keywordsList.join(', ')
};

const pageData = {
  article: {
    headline: "Dia de Noiva Vila Gustavo - Experiência Exclusiva | Studio Amendolla",
    description: "Transforme seu dia especial com nosso serviço exclusivo de Dia de Noiva em Vila Gustavo. Atendimento personalizado e profissional próximo à sua região.",
    author: "Priscila Helena",
    datePublished: "2024-02-01",
    image: "/images/dia-de-noiva.webp",
  },
  faq: [
    {
      question: "Qual a distância do studio para Vila Gustavo?",
      answer: "Nosso studio na Vila Nivi fica muito próximo de Vila Gustavo, com fácil acesso e estacionamento."
    },
    {
      question: "Fazem atendimento a domicílio em Vila Gustavo?",
      answer: "Sim, oferecemos atendimento a domicílio em toda região de Vila Gustavo e adjacências."
    },
    {
      question: "Quais são os serviços incluídos no Dia de Noiva?",
      answer: "Incluímos maquiagem profissional, penteado, teste prévio, preparação da pele e consultoria de beleza."
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
      description: "Experiência exclusiva próxima a Vila Gustavo",
      image: "/images/dia-de-noiva.webp",
    }
  ],
  breadcrumb: [
    {
      name: "Home",
      url: "https://studioamendollanoivas.com.br"
    },
    {
      name: "Dia de Noiva Vila Gustavo",
      url: "https://studioamendollanoivas.com.br/dia-de-noiva-vila-gustavo"
    }
  ],
  images: [
    {
      url: "/images/dia-de-noiva.webp",
      description: "Dia de Noiva Vila Gustavo - Studio Amendolla",
      width: 1200,
      height: 800,
      name: "Dia de Noiva Vila Gustavo",
      datePublished: "2024-02-01"
    }
  ]
};

export default function DiaDeNoivaVilaGustavoPage() {
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
            alt="Dia de Noiva Vila Gustavo SP"
            width={500}
            height={333}
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Dia de Noiva Próximo a Vila Gustavo</h2>
          <p>
            Localizado estrategicamente na Avenida Julio Buono, 2386 - Vila Nivi, 
            o Studio Amendolla está a poucos minutos de Vila Gustavo. 
            Oferecemos uma experiência completa de beleza com técnicas inovadoras 
            e produtos de alta performance.
          </p>
        </div>
      </div>

      <GaleriaDeFotos />

      <a
        href="https://wa.me/5511977670498?text=Olá%2C%20gostaria%20de%20conhecer%20o%20pacote%20dia%20de%20noiva%20em%20Vila%20Gustavo."
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende Sua Consultoria
      </a>

      <section className={styles.servicesSection}>
        <h2>Serviços Especiais para Vila Gustavo</h2>
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