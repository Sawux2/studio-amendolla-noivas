"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiagem para Festas e Eventos - Studio Amendolla",
  description: 
    "Maquiagem profissional para festas e eventos sociais na Zona Norte de São Paulo. Looks personalizados para cada ocasião, com produtos premium e técnicas exclusivas.",
  detailedDescription: `
    O Studio Amendolla é especialista em maquiagens para todos os tipos de eventos:

    TIPOS DE EVENTOS:
    - Festas de Casamento
    - Aniversários
    - Eventos Corporativos
    - Jantares de Gala
    - Coquetéis
    - Festas de Fim de Ano
    
    SERVIÇOS OFERECIDOS:
    - Maquiagem social e festa
    - Técnicas específicas para cada ocasião
    - Produtos de alta durabilidade
    - Cílios postiços inclusos
    - Preparação de pele
    - Dicas de retoque

    Atendimento no studio ou a domicílio para sua comodidade.`,
  image: "/images/maquiagem-festas-1.webp",
  images: [
    "/images/maquiagem-festas-1.webp",
    "/images/maquiagem-festas-2.webp",
  ],
};

const faqData = [
  {
    question: "Fazem atendimento a domicílio?",
    answer: "Sim! Atendemos a domicílio em toda região da Zona Norte de São Paulo, com taxa adicional conforme a localização.",
  },
  {
    question: "Quanto tempo dura o serviço de maquiagem?",
    answer: "O serviço tem duração média de 1 hora, podendo variar de acordo com o tipo de maquiagem escolhida.",
  },
  {
    question: "Preciso agendar com quanto tempo de antecedência?",
    answer: "Recomendamos agendamento com pelo menos 1 semana de antecedência, especialmente para datas comemorativas.",
  },
  {
    question: "Oferecem pacotes para grupos?",
    answer: "Sim! Temos condições especiais para grupos a partir de 3 pessoas, ideal para eventos sociais.",
  },
];

const MaquiagemFestasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: serviceData.title,
      description: serviceData.description,
      author: "Studio Amendolla",
      datePublished: "2025-01-18",
      image: `https://www.studioamendollanoivas.com.br${serviceData.image}`,
    },
    services: [
      {
        title: serviceData.title,
        description: serviceData.description,
        image: serviceData.image,
      },
    ],
    faq: faqData,
    breadcrumb: [
      { name: "Início", url: "https://www.studioamendollanoivas.com.br" },
      { name: "Serviços", url: "https://www.studioamendollanoivas.com.br/servicos" },
      { name: "Maquiagem Festas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-festas-eventos" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Festas e Eventos - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem Festas`,
      datePublished: "2025-01-18",
      author: "Studio Amendolla",
      publisher: {
        "@type": "Organization",
        name: "Studio Amendolla",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studioamendollanoivas.com.br/images/logo.webp",
        },
      },
      inLanguage: "pt-BR",
      license: "https://creativecommons.org/licenses/by/4.0/",
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>{serviceData.title}</h1>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />

      <div className={styles.gridContainer}>
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem Festas - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0}
              />
            </div>
            <button onClick={handleNextImage} className={styles.carouselButton}>❯</button>
          </div>
          <div className={styles.detailedDescription}>
            <p>{serviceData.detailedDescription}</p>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Maquiagem para Festas</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para seu Evento</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
    </div>
  );
};

export default MaquiagemFestasPage;
