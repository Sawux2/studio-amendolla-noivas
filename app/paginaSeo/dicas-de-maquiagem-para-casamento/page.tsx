"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";
import ServiceSimulator from "app/components/calculadora";

const serviceData = {
  title: "Dicas de Maquiagem para Casamento - Studio Amendolla",
  description:
    "Descubra as melhores dicas de maquiagem para casamento no Studio Amendolla. Maquiagem duradoura, perfeita para o grande dia, com um visual impecável e sofisticado.",
  detailedDescription: `
    O dia do casamento é um dos mais especiais da vida, e a maquiagem desempenha um papel crucial para garantir que você se sinta linda e radiante. No Studio Amendolla, reunimos algumas dicas essenciais para que sua maquiagem dure o dia inteiro e realce ainda mais sua beleza natural.

    1. **Prepare bem a pele**: Antes de aplicar a maquiagem, é fundamental cuidar da pele. Uma boa hidratação é a chave para uma maquiagem duradoura e impecável. Utilize um primer de qualidade para garantir que a maquiagem se fixe por mais tempo.

    2. **Escolha a base certa**: Optar por uma base de longa duração é essencial. No dia do casamento, você não vai querer se preocupar com retoques. A base deve ser de cobertura média a alta, para esconder imperfeições, mas sem pesar.

    3. **Ilumine o olhar**: A maquiagem para casamento deve realçar seus olhos. Aposte em tons neutros, mas que tragam profundidade. Uma boa máscara de cílios à prova d’água é indispensável para garantir que o olhar se mantenha intenso durante toda a cerimônia e festa.

    4. **Maquiagem leve, mas duradoura**: O objetivo é destacar a beleza natural. Evite exageros e aposte em tons suaves. Lábios nude ou rosados são sempre uma excelente escolha para noivas, pois trazem um ar delicado e elegante.

    5. **Não se esqueça da fixação**: Use um bom spray fixador para garantir que a maquiagem permaneça no lugar até o final da festa. Um fixador de maquiagem vai ajudar a controlar o brilho e manter o visual fresco por horas.

    No Studio Amendolla, nosso objetivo é proporcionar a você uma maquiagem perfeita para o seu casamento, que resista a lágrimas de felicidade e ao calor da celebração, sempre com um toque de sofisticação e delicadeza.`,
  image: "/images/dicas-maquiagem-casamento-1.webp",
  images: [
    "/images/dicas-maquiagem-casamento-1.webp",
    "/images/dicas-maquiagem-casamento-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual é a melhor base para maquiagem de casamento?",
    answer:
      "A melhor base para casamento é a de longa duração, que oferece boa cobertura sem pesar. Escolha uma fórmula que se adapte ao seu tipo de pele e que resista ao calor e à transpiração.",
  },
  {
    question: "Como fazer a maquiagem durar o dia todo no casamento?",
    answer:
      "Para garantir que a maquiagem dure, invista em um primer de qualidade, escolha produtos de longa duração e finalize com um spray fixador para garantir que o look permaneça perfeito por horas.",
  },
  {
    question: "Quais são as melhores cores para maquiagem de noiva?",
    answer:
      "Tons neutros como bege, rosa suave, marrom claro e dourado são perfeitos para criar um visual clássico e sofisticado. Lábios nude ou rosados são sempre uma excelente escolha para complementar a maquiagem.",
  },
  {
    question: "Posso usar cílios postiços no meu casamento?",
    answer:
      "Sim, os cílios postiços são uma excelente opção para destacar o olhar da noiva. Eles devem ser leves e naturais, para não sobrecarregar o visual e garantir um olhar suave e elegante.",
  },
];

const DicasMaquiagemCasamentoPage = () => {
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
      { name: "Dicas de Maquiagem para Casamento", url: "https://www.studioamendollanoivas.com.br/paginaSeo/dicas-maquiagem-casamento" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Dicas de Maquiagem para Casamento - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dicas de Maquiagem para Casamento`,
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
                alt={`Dicas de Maquiagem para Casamento - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Casamento</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Casamento</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default DicasMaquiagemCasamentoPage;
