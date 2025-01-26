"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Dia da Noiva na Zona Norte de São Paulo - Transforme seu Grande Dia",
  description:
    "Encontre os melhores serviços para o Dia da Noiva na Zona Norte de São Paulo. Experiência única com maquiagem, penteados e cuidados exclusivos para tornar o dia especial ainda mais inesquecível.",
  detailedDescription: `
    Na Zona Norte de São Paulo, o Dia da Noiva é planejado para proporcionar relaxamento e beleza. Espaços especializados oferecem pacotes completos, incluindo maquiagem profissional, penteados personalizados, tratamentos faciais e momentos de tranquilidade para a noiva. 
    Tudo é pensado para que você se sinta confiante e deslumbrante no dia do casamento. Seja em estúdios especializados ou no conforto de sua casa, os profissionais da região garantem excelência em cada detalhe.
  `,
  image: "/images/dia-da-noiva-zona-norte.webp",
  images: [
    "/images/dia-da-noiva-zona-norte-1.webp",
    "/images/dia-da-noiva-zona-norte-2.webp",
  ],
};

const faqData = [
  {
    question: "Quais são os serviços incluídos no Dia da Noiva?",
    answer:
      "Os serviços geralmente incluem maquiagem profissional, penteados personalizados, manicure, pedicure, tratamentos faciais e momentos de relaxamento como massagem."},
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Sim, é recomendável agendar com pelo menos 3 meses de antecedência para garantir a disponibilidade na data do seu casamento."},
  {
    question: "Os profissionais atendem no local do casamento?",
    answer:
      "Muitos profissionais oferecem a opção de atendimento no local do evento, proporcionando mais comodidade para você e sua equipe."},
  {
    question: "Quanto custa o Dia da Noiva?",
    answer:
      "Os valores variam dependendo dos serviços escolhidos, mas os pacotes na Zona Norte de São Paulo geralmente começam a partir de R$ 1.500."},
];

const DiaDaNoivaZonaNortePage = () => {
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
      { name: "Dia da Noiva Zona Norte SP", url: "https://www.seusite.com.br/dia-da-noiva-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.seusite.com.br${image}`,
      description: "Dia da Noiva na Zona Norte de São Paulo",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva na Zona Norte de São Paulo`,
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
                alt={`Dia da Noiva Zona Norte SP - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Dia da Noiva</h2>
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
          <h2>Solicite um Orçamento para o Dia da Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default DiaDaNoivaZonaNortePage;
