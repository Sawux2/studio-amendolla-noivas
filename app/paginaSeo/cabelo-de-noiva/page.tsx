"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Cabelo de Noiva - Cortes e Penteados",
  description:
    "Descubra os cortes e penteados ideais para realçar a beleza do seu cabelo no grande dia. Técnicas modernas e personalizadas para um look deslumbrante.",
  detailedDescription: `
    Se você busca um visual sofisticado e moderno para o seu cabelo de noiva, nossa equipe de especialistas está pronta para transformar seu look.
    Com anos de experiência, oferecemos serviços que vão do corte ao penteado, sempre utilizando técnicas avançadas e produtos de alta qualidade.
    Seja para um estilo clássico, romântico ou ousado, garantimos um atendimento personalizado, garantindo que cada detalhe esteja perfeito para o seu dia especial.
  `,
  image: "/images/cabelo-de-noiva.webp",
  images: [
    "/images/cabelo-de-noiva-1.webp",
    "/images/cabelo-de-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais estilos de cabelo para noiva você oferece?",
    answer:
      "Oferecemos uma variedade de estilos, desde cortes modernos até penteados clássicos e elegantes, adaptando cada look ao formato do rosto e ao estilo do casamento.",
  },
  {
    question: "Como posso agendar uma avaliação para meu cabelo?",
    answer:
      "Entre em contato conosco para agendar uma consulta. Nossa equipe fará uma avaliação completa para sugerir o melhor estilo para o seu grande dia.",
  },
  {
    question: "É possível realizar testes de cabelo antes do evento?",
    answer:
      "Sim, recomendamos agendar um teste de cabelo e penteado para garantir que o visual atenda suas expectativas e se harmonize perfeitamente com o seu estilo.",
  },
  {
    question: "Quais produtos são utilizados nos serviços de cabelo para noivas?",
    answer:
      "Utilizamos somente produtos de alta qualidade e de marcas renomadas, garantindo não só a beleza, mas também a saúde e a durabilidade do seu cabelo.",
  },
];

const CabeloDeNoivaPage = () => {
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
      datePublished: "2025-01-25",
      image: `https://studio-amendolla-noivas.vercel.app${serviceData.image}`,
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
      { name: "Início", url: "https://studio-amendolla-noivas.vercel.app" },
      { name: "Serviços", url: "https://studio-amendolla-noivas.vercel.app/servicos" },
      { name: "Cabelo de Noiva", url: "https://studio-amendolla-noivas.vercel.app/paginaSeo/cabelo-de-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://studio-amendolla-noivas.vercel.app${image}`,
      description: "Cabelo de Noiva - Cortes e Penteados",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Cabelo de Noiva`,
      datePublished: "2025-01-25",
      author: "Equipe Studio Amendolla",
      publisher: {
        "@type": "Organization",
        name: "Studio Amendolla",
        logo: {
          "@type": "ImageObject",
          url: "https://studio-amendolla-noivas.vercel.app/images/logo.webp",
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
                alt={`Cabelo de Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Cabelo de Noiva</h2>
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
          <h2>Solicite um Orçamento para Cabelo de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>

      <FeaturesCards />
    </div>
  );
};

export default CabeloDeNoivaPage;
