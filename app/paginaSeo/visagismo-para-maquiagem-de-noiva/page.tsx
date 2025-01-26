"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Visagismo para Noiva - Maquiagem - Studio Amendolla",
  description:
    "Saiba como o visagismo é fundamental para criar uma maquiagem personalizada para a noiva, destacando os pontos fortes e suavizando as imperfeições.",
  detailedDescription: `
    O visagismo é uma técnica que leva em consideração as características físicas e emocionais da noiva para criar uma maquiagem única e personalizada. O objetivo é valorizar a beleza natural da noiva, ressaltando seus traços e criando um visual harmônico que combine com seu estilo e personalidade. 

    1. **Análise do Rosto**: 
       O primeiro passo no visagismo é analisar o formato do rosto e os traços da noiva. A partir dessa análise, o maquiador escolhe as técnicas mais adequadas para destacar os pontos fortes e suavizar as imperfeições.

    2. **Escolha da Maquiagem**: 
       Com base na análise, o maquiador escolhe as cores e acabamentos ideais para o tipo de pele e o estilo da noiva. Isso pode incluir o uso de sombras, bases e blushes que combinem com o tom de pele e o vestido de casamento.

    3. **Harmonia com o Visual Completo**: 
       O visagismo também leva em conta o cabelo, o vestido e os acessórios, garantindo que a maquiagem esteja em total harmonia com o conjunto. O objetivo é criar um look coeso, que faça a noiva se sentir confortável e deslumbrante.

    4. **Maquiagem Personalizada**: 
       O visagismo permite que a maquiagem seja totalmente personalizada para cada noiva. Desde o estilo mais natural até o mais ousado, as técnicas são adaptadas para cada gosto, criando o visual dos sonhos para o grande dia.
  `,
  image: "/images/visagismo-maquiagem-noiva.webp",
  images: [
    "/images/visagismo-maquiagem-noiva-1.webp",
    "/images/visagismo-maquiagem-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que é visagismo e como ele pode influenciar minha maquiagem de noiva?",
    answer:
      "O visagismo é uma técnica que analisa o formato do rosto e a personalidade da noiva para criar uma maquiagem personalizada, valorizando os pontos fortes e suavizando as imperfeições. Isso garante um visual harmônico e único para o grande dia.",
  },
  {
    question: "Preciso de uma prova de maquiagem antes do casamento?",
    answer:
      "Sim, a prova de maquiagem é fundamental para garantir que o resultado final esteja de acordo com o que você espera. É uma oportunidade de ajustar detalhes e experimentar diferentes estilos antes do grande dia.",
  },
  {
    question: "Posso usar uma maquiagem mais ousada para o meu casamento?",
    answer:
      "Sim, a maquiagem de noiva pode ser ousada, dependendo do estilo da noiva. O visagismo permite criar looks personalizados, seja para uma maquiagem mais clássica e discreta, ou para algo mais marcante e moderno.",
  },
  {
    question: "Qual é o estilo de maquiagem mais recomendado para casamentos diurnos?",
    answer:
      "Para casamentos diurnos, é recomendada uma maquiagem mais leve e natural, com uma pele iluminada e tons suaves de maquiagem. A ideia é criar um visual fresco e delicado, perfeito para o ambiente diurno.",
  },
];

const VisagismoParaNoivaMaquiagemPage = () => {
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
      { name: "Visagismo para Noiva - Maquiagem", url: "https://www.studioamendollanoivas.com.br/paginaSeo/visagismo-maquiagem-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Visagismo para Noiva - Maquiagem - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Visagismo para Noiva - Maquiagem`,
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
                alt={`Visagismo para Noiva - Maquiagem - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Visagismo para Noiva - Maquiagem</h2>
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
          <h2>Solicite um Orçamento para Sua Maquiagem de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default VisagismoParaNoivaMaquiagemPage;
