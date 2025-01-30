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
  title: "Maquiagem e Cabelo para Noivas - Studio Amendolla",
  description:
    "No Studio Amendolla, criamos o visual dos seus sonhos para o seu grande dia. Nossos serviços de maquiagem e cabelo são personalizados para realçar sua beleza única e garantir que você se sinta deslumbrante no altar.",
  detailedDescription: `
    No Studio Amendolla, oferecemos serviços de maquiagem e cabelo exclusivos para noivas, com um atendimento personalizado para cada tipo de cabelo, estilo de pele e gosto pessoal. A maquiagem é feita de forma a valorizar suas características naturais, com um acabamento impecável, resistente e duradouro, para que você esteja linda durante toda a cerimônia.

    Quanto ao cabelo, nossos profissionais criam penteados sofisticados e modernos, do clássico ao mais contemporâneo, para que o visual combine perfeitamente com o estilo do casamento. Seja um coque elegante, um cabelo solto com ondas, ou um penteado vintage, cada detalhe é pensado para garantir um resultado perfeito.

    No Studio Amendolla, entendemos a importância do Dia da Noiva e trabalhamos para proporcionar uma experiência tranquila e sem estresse, para que você aproveite ao máximo este momento único.`,
  image: "/images/maquiagem-cabelo-noiva-1.webp",
  images: [
    "/images/maquiagem-cabelo-noiva-1.webp",
    "/images/maquiagem-cabelo-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Como escolher o estilo de maquiagem para o meu casamento?",
    answer:
      "A escolha da maquiagem depende do seu estilo pessoal, do tema do casamento e do seu vestido. Em uma consulta prévia, nossa equipe ajuda a definir o visual perfeito, seja ele clássico, moderno ou algo mais ousado.",
  },
  {
    question: "Como garantir que a maquiagem e o cabelo durem o dia todo?",
    answer:
      "Utilizamos produtos de alta qualidade e técnicas profissionais para garantir que a maquiagem e o cabelo permaneçam impecáveis por muitas horas, mesmo em condições de calor e movimento.",
  },
  {
    question: "Posso fazer uma prova de maquiagem e cabelo antes do casamento?",
    answer:
      "Sim! Recomendamos uma prova para garantir que o visual esteja exatamente como você deseja. Durante a prova, podemos ajustar detalhes para que o resultado final seja perfeito.",
  },
  {
    question: "O Studio Amendolla também oferece serviços para madrinhas?",
    answer:
      "Sim, oferecemos pacotes especiais de maquiagem e cabelo para madrinhas, mães e outras convidadas, para que todas estejam deslumbrantes e em harmonia com o tema do casamento.",
  },
];

const MaquiagemCabeloNoivasPage = () => {
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
      { name: "Maquiagem e Cabelo para Noivas", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-cabelo-noivas" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiagem e Cabelo para Noivas - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem e Cabelo para Noivas`,
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
                alt={`Maquiagem e Cabelo para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem e Cabelo para Noivas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem e Cabelo para Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default MaquiagemCabeloNoivasPage;
