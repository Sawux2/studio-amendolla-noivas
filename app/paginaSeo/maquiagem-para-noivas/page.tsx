"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Noivas - Studio Amendolla",
  description:
    "A maquiagem para noivas do Studio Amendolla transforma seu grande dia em um momento ainda mais especial, realçando sua beleza com um look perfeito para casamento.",
  detailedDescription: `
    No Studio Amendolla, sabemos que a maquiagem para noivas deve ser impecável, duradoura e personalizada. Nossa equipe especializada trabalha com cada noiva para criar um visual único que reflete sua personalidade e o estilo do casamento. Utilizamos produtos de alta qualidade para garantir que a maquiagem dure o dia todo, desde a cerimônia até a festa. Nossa maquiagem para noivas é pensada para realçar sua beleza natural, com acabamentos suaves e sofisticados.

    Podemos criar looks clássicos com pele radiante e olhos bem definidos, ou até mesmo looks mais ousados, com cílios volumosos e lábios marcantes, de acordo com as preferências de cada noiva. O Studio Amendolla também oferece a opção de maquiagem para as madrinhas, garantindo que todas as convidadas estejam deslumbrantes e em harmonia com o estilo do evento. Cada maquiagem é feita sob medida, respeitando o formato do rosto e as características individuais de cada cliente.`,
  image: "/images/maquiagem-noiva-studio-amendolla-1.webp",
  images: [
    "/images/maquiagem-noiva-studio-amendolla-1.webp",
    "/images/maquiagem-noiva-studio-amendolla-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher a maquiagem ideal para o meu casamento?",
    answer:
      "A maquiagem ideal depende do estilo do casamento e da sua personalidade. No Studio Amendolla, oferecemos uma consulta personalizada para definir o melhor look, levando em consideração a cor do vestido, o horário e o tipo de cerimônia.",
  },
  {
    question: "A maquiagem para noivas dura o dia todo?",
    answer:
      "Sim! Utilizamos técnicas e produtos de longa duração para garantir que sua maquiagem fique impecável durante toda a cerimônia e a festa. Primer, sprays fixadores e produtos à prova d'água são usados para garantir a durabilidade.",
  },
  {
    question: "Posso fazer uma prova de maquiagem antes do casamento?",
    answer:
      "Sim! O Studio Amendolla oferece provas de maquiagem para noivas. Agendamos um ensaio antes do grande dia para testar o look desejado e fazer ajustes, garantindo que você se sinta confortável e linda no dia do casamento.",
  },
  {
    question: "Quais são os cuidados com a pele antes da maquiagem para noiva?",
    answer:
      "É importante preparar a pele para garantir que a maquiagem dure o dia todo. Recomendamos uma boa hidratação antes da maquiagem, além de cuidados como limpeza e esfoliação, que podemos orientar durante a consulta.",
  },
];

const MaquiagemNoivaPage = () => {
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
      { name: "Maquiagem para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Noivas`,
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
                alt={`Maquiagem para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noivas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPage;
