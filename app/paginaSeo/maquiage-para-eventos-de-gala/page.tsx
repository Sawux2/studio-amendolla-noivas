"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Eventos de Gala - Studio Amendolla",
  description:
    "Para eventos de gala, a maquiagem deve ser sofisticada e de longa duração, destacando a beleza e garantindo que você esteja radiante durante toda a noite. Técnicas especiais para um look impecável.",
  detailedDescription: `
    Em eventos de gala, a maquiagem precisa ser sofisticada e glamourosa, mas também durável, para acompanhar a noite inteira sem perder o charme. No Studio Amendolla, criamos maquiagens exclusivas para esses eventos, com foco na elegância e perfeição. Trabalhamos com produtos de alta cobertura e técnicas de contorno e iluminação para garantir que sua maquiagem permaneça impecável durante a festa. A escolha dos tons vai desde os mais clássicos e sofisticados até opções mais ousadas, sempre respeitando o seu estilo e a ocasião. Seja para um look mais dramático ou para uma produção mais sutil, nossa maquiagem para eventos de gala é projetada para destacar sua beleza de forma única.
  `,
  image: "/images/maquiagem-evento-gala.webp",
  images: [
    "/images/maquiagem-evento-gala-1.webp",
    "/images/maquiagem-evento-gala-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher a maquiagem ideal para um evento de gala?",
    answer:
      "A maquiagem ideal para eventos de gala deve ser sofisticada, com acabamentos perfeitos e de longa duração. Podemos optar por olhos esfumados, batons marcantes e iluminação estratégica para garantir que você brilhe durante toda a noite.",
  },
  {
    question: "Quais produtos garantem a durabilidade da maquiagem em eventos de gala?",
    answer:
      "Para garantir a durabilidade, usamos primers de alta performance, bases de longa duração e produtos à prova d'água. A escolha de produtos de alta cobertura também ajuda a manter a maquiagem impecável até o final do evento.",
  },
  {
    question: "Posso escolher um visual mais ousado para um evento de gala?",
    answer:
      "Sim! Eventos de gala são a oportunidade perfeita para ousar. Podemos criar um look marcante com delineados dramáticos, sombras metálicas ou batons vibrantes, sempre garantindo um equilíbrio de elegância e sofisticação.",
  },
  {
    question: "Como a maquiagem para evento de gala se adapta ao meu estilo pessoal?",
    answer:
      "No Studio Amendolla, buscamos sempre personalizar a maquiagem de acordo com o seu estilo, respeitando suas preferências. Se você prefere um look mais clássico ou ousado, trabalhamos para criar o visual perfeito para você, sempre com sofisticação e elegância.",
  },
];

const MaquiagemEventoGalaPage = () => {
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
      author: "Priscila Amendolla",
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
      { name: "Maquiagem para Eventos de Gala", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-eventos-de-gala" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Eventos de Gala - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Eventos de Gala`,
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
        {/* Primeira Coluna: Carrossel de Imagens e Descrição Detalhada */}
        <div className={styles.photosColumn}>
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={styles.carouselButton}>❮</button>
            <div className={styles.highlightImage}>
              <Image
                src={serviceData.images[currentImage]}
                alt={`Maquiagem para Eventos de Gala - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Eventos de Gala</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Eventos de Gala</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemEventoGalaPage;
