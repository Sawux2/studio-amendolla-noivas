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
  title: "Cabelo Preso para Noiva - Studio Amendolla",
  description:
    "Descubra opções de penteados com cabelo preso para noivas, com estilos sofisticados e elegantes para o grande dia.",
  detailedDescription: `
    O cabelo preso é uma das escolhas mais sofisticadas e clássicas para o dia do casamento. Seja para um visual elegante ou mais descontraído, há diversas opções para se escolher. Confira algumas ideias de penteados com cabelo preso para noivas:

    1. **Coque Baixo**: 
       O coque baixo é atemporal e perfeito para noivas que desejam um visual sofisticado e romântico. Ele pode ser feito de forma mais estruturada ou com um toque mais descontraído, como o coque bagunçado.

    2. **Coque Com Tranças**: 
       Se você deseja algo delicado e cheio de charme, o coque combinado com tranças é uma excelente escolha. A trança pode ser embutida ou lateral, criando um visual único e cheio de personalidade.

    3. **Coque Alto**: 
       Para noivas que desejam um visual mais moderno, o coque alto é uma ótima opção. Ele pode ser combinado com acessórios como flores, véu ou tiaras, garantindo um look deslumbrante.

    4. **Rabo de Cavalo Alto**: 
       O rabo de cavalo alto é uma opção ousada e contemporânea. Para noivas com cabelo longo, ele pode ser combinado com cachos ou um acabamento liso, criando um visual clean e elegante.

    5. **Penteado Semi-Preso**: 
       Para quem busca um meio-termo, o penteado semi-preso é ideal. Ele mantém o cabelo preso na parte de trás, mas deixa as mechas soltas na frente, criando um visual romântico e descontraído.
  `,
  image: "/images/cabelo-preso-para-noiva.webp",
  images: [
    "/images/cabelo-preso-para-noiva-1.webp",
    "/images/cabelo-preso-para-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual é o melhor penteado preso para noivas com cabelo curto?",
    answer:
      "Para noivas com cabelo curto, o ideal são penteados presos mais baixos, como o coque baixo ou o semi-preso. A adição de acessórios, como tiaras ou flores, pode ajudar a dar mais volume e estilo ao penteado.",
  },
  {
    question: "Posso usar acessórios no meu cabelo preso?",
    answer:
      "Sim! Acessórios como flores, tiaras, véus e até mesmo pérolas podem ser incorporados ao seu penteado preso, dando um toque ainda mais especial e único para o seu visual.",
  },
  {
    question: "Cabelo preso é mais durável que cabelo solto?",
    answer:
      "Sim, geralmente o cabelo preso dura mais tempo, pois está fixado e protegido de movimentos e do clima. Isso garante que o seu visual fique impecável durante toda a cerimônia e recepção.",
  },
  {
    question: "Qual o penteado preso mais adequado para um casamento no campo?",
    answer:
      "Para casamentos ao ar livre, um coque baixo ou um penteado semi-preso é ideal, pois cria um visual romântico e natural, enquanto mantém o cabelo no lugar durante o evento.",
  },
];

const CabeloPresoParaNoivaPage = () => {
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
      { name: "Cabelo Preso para Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/cabelo-preso-para-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Cabelo Preso para Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Cabelo Preso para Noiva`,
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
                alt={`Cabelo Preso para Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Cabelo Preso para Noiva</h2>
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
          <h2>Solicite um Orçamento para o Seu Penteado de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default CabeloPresoParaNoivaPage;
