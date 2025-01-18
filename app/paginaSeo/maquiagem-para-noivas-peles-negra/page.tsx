"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Noivas de Pele Negra - Studio Amendolla",
  description:
    "A maquiagem para noivas de pele negra é criada para destacar a beleza única e vibrante da pele negra, utilizando tons e técnicas que realçam seus traços e proporcionam um visual impecável para o grande dia.",
  detailedDescription: `
    A maquiagem para noivas de pele negra exige um olhar apurado e o uso de produtos específicos para valorizar a tonalidade e os traços desta pele maravilhosa. No Studio Amendolla, oferecemos maquiagens personalizadas, com bases e corretivos que se harmonizam perfeitamente com a pele negra, garantindo um acabamento natural e luminoso. Utilizamos iluminadores em tons dourados, bronze e cobre, que proporcionam uma radiância única, e blushes que destacam a beleza natural. Cada detalhe é pensado para que a noiva se sinta única e radiante, com uma maquiagem que se mantém impecável durante toda a cerimônia e celebração. 
  `,
  image: "/images/maquiagem-noiva-pele-negra.webp",
  images: [
    "/images/maquiagem-noiva-pele-negra-1.webp",
    "/images/maquiagem-noiva-pele-negra-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são ideais para noivas de pele negra?",
    answer:
      "Para noivas de pele negra, é essencial usar bases e corretivos que se adaptem perfeitamente ao tom de pele. Produtos de acabamento luminoso, como iluminadores dourados e bronze, ajudam a realçar a radiância natural da pele.",
  },
  {
    question: "Como garantir que a maquiagem dure o dia inteiro?",
    answer:
      "Para garantir a durabilidade, usamos primers específicos para preparar a pele, além de bases e fixadores de longa duração. A aplicação de produtos de alta pigmentação também contribui para a maquiagem se manter intacta durante toda a celebração.",
  },
  {
    question: "Posso escolher um visual ousado para meu casamento?",
    answer:
      "Sim! A maquiagem para noivas de pele negra oferece a possibilidade de criar visuais ousados, como olhos esfumados intensos ou lábios vibrantes, sempre com sofisticação e elegância.",
  },
  {
    question: "Como realçar os traços da noiva de pele negra?",
    answer:
      "Utilizamos técnicas de contorno e iluminação para realçar os traços da face. A escolha de iluminadores dourados, bronze e cobre ajuda a destacar a beleza da pele negra, criando um look radiante e elegante.",
  },
];

const MaquiagemNoivaPeleNegraPage = () => {
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
      { name: "Maquiagem para Noivas de Pele Negra", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noivas-pele-negra" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Noivas de Pele Negra - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noivas de Pele Negra`,
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
                alt={`Maquiagem para Noivas de Pele Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noivas de Pele Negra</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noivas de Pele Negra</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPeleNegraPage;
