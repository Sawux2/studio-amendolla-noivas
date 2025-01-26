"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiagem para Jantar de Gala - Elegância e Sofisticação",
  description:
    "Descubra a maquiagem perfeita para jantares de gala. Sofisticação e elegância para brilhar em eventos especiais.",
  detailedDescription: `
    Um jantar de gala é uma ocasião que pede uma maquiagem deslumbrante. Com foco em destacar seus melhores traços, a maquiagem para eventos de gala combina olhos marcantes, pele impecável e lábios elegantes. 
    Nossa equipe utiliza técnicas avançadas e produtos de alta qualidade para criar um visual sofisticado e duradouro, perfeito para brilhar durante toda a noite. 
    Personalizamos cada detalhe para harmonizar com seu vestido, acessórios e estilo pessoal, garantindo uma aparência deslumbrante e inesquecível.
  `,
  image: "/images/maquiagem-jantar-gala.webp",
  images: [
    "/images/maquiagem-jantar-gala-1.webp",
    "/images/maquiagem-jantar-gala-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais são os elementos principais da maquiagem para um jantar de gala?",
    answer:
      "Os principais elementos incluem uma pele bem preparada, olhos marcantes com sombras sofisticadas, cílios destacados e lábios que complementam o visual."},
  {
    question: "Quanto tempo leva para fazer uma maquiagem para um jantar de gala?",
    answer:
      "O processo geralmente leva entre 1 a 2 horas, dependendo da complexidade do visual desejado."},
  {
    question: "A maquiagem é resistente para durar toda a noite?",
    answer:
      "Sim, utilizamos produtos de longa duração e técnicas específicas para garantir que a maquiagem permaneça impecável durante todo o evento."},
  {
    question: "Posso personalizar a maquiagem de acordo com meu vestido e acessórios?",
    answer:
      "Claro! Adaptamos a maquiagem para harmonizar perfeitamente com seu vestido, acessórios e estilo pessoal."},
];

const MaquiagemJantarGalaPage = () => {
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
      datePublished: "2025-01-26",
      image: `https://www.seusite.com.br${serviceData.image}`,
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
      { name: "Início", url: "https://www.seusite.com.br" },
      { name: "Serviços", url: "https://www.seusite.com.br/servicos" },
      { name: "Maquiagem para Jantar de Gala", url: "https://www.seusite.com.br/maquiagem-jantar-gala" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.seusite.com.br${image}`,
      description: "Maquiagem para Jantar de Gala - Elegância e Sofisticação",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Jantar de Gala`,
      datePublished: "2025-01-26",
      author: "Studio Amendolla",
      publisher: {
        "@type": "Organization",
        name: "Studio Amendolla",
        logo: {
          "@type": "ImageObject",
          url: "https://www.seusite.com.br/images/logo.webp",
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
                alt={`Maquiagem para Jantar de Gala - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Jantar de Gala</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Gala</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemJantarGalaPage;
