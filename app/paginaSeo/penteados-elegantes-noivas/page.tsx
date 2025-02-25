"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Penteados Elegantes para Noivas",
  description:
    "Descubra os penteados elegantes que realçam a beleza de cada noiva. Personalize seu visual para o grande dia com profissionais que entendem seu estilo.",
  detailedDescription: `
    Se você procura um penteado elegante para completar o seu look de noiva, nossa equipe de especialistas está pronta para transformar sua imagem. 
    Utilizando técnicas modernas e produtos de alta qualidade, asseguramos que cada fio esteja no lugar, harmonizando o clássico e o contemporâneo.
    Seja para um visual romântico, sofisticado ou ousado, nossos penteados são criados pensando em cada detalhe para tornar seu dia ainda mais especial.
  `,
  image: "/images/penteados-elegantes-noivas.webp",
  images: [
    "/images/penteados-elegantes-noivas-1.webp",
    "/images/penteados-elegantes-noivas-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais tipos de penteados elegantes são oferecidos para noivas?",
    answer:
      "Oferecemos desde penteados clássicos até os mais modernos, adaptando cada estilo ao seu rosto e vestido, sempre com acabamento impecável.",
  },
  {
    question: "Como posso agendar uma avaliação para o penteado?",
    answer:
      "Entre em contato conosco para agendar uma consulta personalizada. Nossos profissionais estarão à disposição para discutir o melhor penteado para o seu dia especial.",
  },
  {
    question: "É possível realizar testes de penteado antes do evento?",
    answer:
      "Sim, recomendamos agendar um teste de penteado para garantir que o estilo atenda suas expectativas e se ajuste perfeitamente ao seu visual.",
  },
  {
    question: "Qual a diferença de contratar um serviço especializado para penteados noivas?",
    answer:
      "Com um serviço especializado, você conta com um atendimento exclusivo, produtos de alta qualidade e profissionais experientes que entendem as necessidades específicas de um casamento.",
  },
];

const PenteadosElegantesNoivasPage = () => {
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
      author: "Equipe Studio Amendolla",
      datePublished: "2025-01-20",
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
      { name: "Penteados Elegantes para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/penteados-elegantes-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Penteados Elegantes para Noivas",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteados Elegantes para Noivas`,
      datePublished: "2025-01-20",
      author: "Equipe Studio Amendolla",
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
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Penteados Elegantes para Noivas - ${currentImage + 1}`}
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

        {/* Segunda Coluna: Conteúdo e FAQ */}
        <div className={styles.contentColumn}>
          <div className={styles.descriptionSection}>
            <p>{serviceData.description}</p>
          </div>
          <div className={styles.faqSection}>
            <h2>Perguntas Frequentes sobre Penteados Elegantes</h2>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terceira Coluna: Formulário de Orçamento */}
        <div className={styles.formColumn}>
          <h2>Solicite um Orçamento para Penteados Elegantes</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default PenteadosElegantesNoivasPage;
