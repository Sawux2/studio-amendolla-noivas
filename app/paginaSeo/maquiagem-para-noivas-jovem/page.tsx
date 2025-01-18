"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Noiva Jovem - Studio Amendolla",
  description:
    "Realce a beleza natural da noiva jovem com um look sofisticado e leve, perfeito para o grande dia. Maquiagem suave e deslumbrante que destaca sua juventude e elegância.",
  detailedDescription: `
    A maquiagem para noiva jovem é pensada para destacar a beleza natural com um toque de sofisticação. No Studio Amendolla, criamos looks personalizados com bases leves, corretivos que oferecem cobertura natural e blushes sutis que valorizam o rosto. Utilizamos técnicas de iluminação que deixam a pele radiante, mantendo a leveza e o frescor, perfeitos para o casamento. Se você deseja um visual clássico ou algo mais moderno, a maquiagem para noiva jovem é projetada para refletir sua personalidade e estilo no grande dia.
  `,
  image: "/images/maquiagem-noiva-jovem.webp",
  images: [
    "/images/maquiagem-noiva-jovem-1.webp",
    "/images/maquiagem-noiva-jovem-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais são os melhores produtos para a maquiagem da noiva jovem?",
    answer:
      "Para a maquiagem da noiva jovem, utilizamos produtos de alta qualidade com acabamento natural, como bases e corretivos de cobertura leve. Iluminadores suaves e blushes delicados ajudam a realçar a juventude e a frescor da pele.",
  },
  {
    question: "Como garantir uma maquiagem duradoura no dia do casamento?",
    answer:
      "A preparação da pele é essencial! Começamos com uma boa hidratação, seguida de primers para fixação e controle de oleosidade. A escolha de produtos de longa duração garante que o look permaneça intacto durante todo o evento.",
  },
  {
    question: "Posso optar por um look mais natural ou ousado na maquiagem para noiva jovem?",
    answer:
      "Sim! A maquiagem para noiva jovem é altamente adaptável. Você pode optar por um look mais natural e romântico ou por algo mais moderno e ousado, dependendo do seu estilo e da sua visão para o grande dia.",
  },
  {
    question: "Como a maquiagem pode realçar minha beleza sem perder a naturalidade?",
    answer:
      "A chave é a sutileza. Utilizamos técnicas de contorno e iluminação para destacar os traços sem exagerar. A ideia é realçar sua beleza natural, criando um visual que seja ao mesmo tempo sofisticado e suave.",
  },
];

const MaquiagemNoivaJovemPage = () => {
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
      { name: "Maquiagem para Noiva Jovem", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noiva-jovem" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Noiva Jovem - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noiva Jovem`,
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
                alt={`Maquiagem para Noiva Jovem - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva Jovem</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noiva Jovem</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaJovemPage;
