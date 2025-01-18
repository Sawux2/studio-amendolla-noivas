"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Pele Preta e Radiância - Studio Amendolla",
  description:
    "Realce a beleza natural da pele preta com técnicas e produtos que destacam a radiância e proporcionam um acabamento impecável. Perfeito para todas as ocasiões.",
  detailedDescription: `
    A maquiagem para pele preta exige um cuidado especial para valorizar sua tonalidade única. No Studio Amendolla, utilizamos bases e corretivos com subtons adequados, garantindo uma cobertura perfeita e natural. Realçamos a radiância da pele com iluminadores e blushes que harmonizam com sua cor, criando um visual deslumbrante e personalizado. Seja para festas, casamentos ou eventos especiais, nossa maquiagem destaca sua beleza com elegância e confiança.
  `,
  image: "/images/maquiagem-pele-preta.webp",
  images: [
    "/images/maquiagem-pele-preta-1.webp",
    "/images/maquiagem-pele-preta-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais produtos são ideais para pele preta?",
    answer:
      "Produtos com subtons adequados, como bases e corretivos que respeitam os subtons quentes ou frios da pele preta, são essenciais. Também utilizamos iluminadores e blushes que realçam sua radiância natural.",
  },
  {
    question: "Como garantir um acabamento impecável na pele preta?",
    answer:
      "O preparo da pele é fundamental. Começamos com uma boa hidratação, seguida de primers específicos. A escolha de produtos com alta pigmentação e aplicação em camadas leves proporciona um acabamento uniforme e duradouro.",
  },
  {
    question: "A maquiagem para pele preta é adaptável para diferentes ocasiões?",
    answer:
      "Sim! Seja para um look mais natural ou uma produção glamourosa, adaptamos as técnicas e os produtos para criar o visual perfeito para cada evento.",
  },
  {
    question: "Como realçar os traços na maquiagem para pele preta?",
    answer:
      "Utilizamos técnicas de contorno e iluminação que valorizam os traços do rosto. Sombreados e iluminadores são aplicados estrategicamente para destacar sua beleza natural.",
  },
];

const MaquiagemPelePretaRadianciaPage = () => {
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
      { name: "Maquiagem para Pele Preta e Radiância", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-preta-e-radiancia" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Pele Preta e Radiância - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Preta e Radiância`,
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
                alt={`Maquiagem para Pele Preta e Radiância - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Preta e Radiância</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Pele Preta e Radiância</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemPelePretaRadianciaPage;
