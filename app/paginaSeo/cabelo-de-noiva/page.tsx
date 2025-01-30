"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import ServiceSimulator from "app/components/calculadora";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Cabelo de Noiva - Studio Amendolla",
  description:
    "Descubra os melhores estilos de cabelo para noivas e como escolher o penteado perfeito para o grande dia, com os cuidados e tratamentos necessários.",
  detailedDescription: `
    O cabelo da noiva é um dos pontos principais no visual para o grande dia, sendo crucial que ele esteja impecável e reflita o estilo e a personalidade da noiva. Confira os cuidados e dicas para garantir que seu cabelo esteja maravilhoso no Dia do Casamento:

    1. **Escolha do Penteado**: 
       A escolha do penteado deve considerar o estilo do casamento, o formato do seu rosto, o tipo de cabelo e o vestido. Desde um coque elegante, até ondas suaves ou tranças detalhadas, o penteado deve complementar sua personalidade e o tema do casamento.

    2. **Provas de Penteado**: 
       Realize uma prova de cabelo para testar o penteado que você escolheu, garantindo que ele ficará perfeito no grande dia. Isso também ajuda a definir detalhes, como acessórios para o cabelo (tiaras, flores, véu, etc.), e a adaptar o estilo conforme necessário.

    3. **Finalização do Penteado**: 
       No Dia da Noiva, o penteado é finalizado com todos os cuidados necessários, como fixação, brilho e ajuste dos detalhes para garantir que ele dure o dia todo. O profissional cuidará para que seu cabelo fique lindo, elegante e confortável.

    4. **Acessórios de Cabelo**: 
       O uso de acessórios é uma excelente forma de adicionar charme e personalidade ao seu penteado. Flores, tiaras, pentes e véus são opções que podem ser usadas para complementar o look da noiva, criando uma harmonia com o vestido e maquiagem.
  `,
  image: "/images/cabelo-de-noiva.webp",
  images: [
    "/images/cabelo-de-noiva-1.webp",
    "/images/cabelo-de-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual o penteado ideal para minha cerimônia?",
    answer:
      "O penteado ideal depende do seu estilo pessoal, do vestido e do tipo de casamento. Coques, tranças, cabelos soltos com ondas ou até estilos mais modernos, como o semi-preso, são opções que podem ser adaptadas para diferentes temas e estilos de casamento.",
  },
  {
    question: "Quanto tempo antes do casamento devo cortar o cabelo?",
    answer:
      "Recomenda-se cortar o cabelo de 2 a 3 semanas antes do casamento para garantir que ele esteja com um aspecto saudável e que tenha o comprimento adequado para o penteado desejado.",
  },
  {
    question: "Devo fazer uma prova de penteado?",
    answer:
      "Sim, a prova de penteado é essencial. Ela ajuda a definir o estilo definitivo do cabelo, garante que você fique confortável e permite ajustes antes do grande dia.",
  },
  {
    question: "O que devo fazer para manter o cabelo saudável antes do casamento?",
    answer:
      "Manter o cabelo hidratado e nutrido, com a aplicação de máscaras capilares e produtos adequados ao seu tipo de cabelo, além de evitar o uso excessivo de chapinhas ou secadores, garante que o cabelo esteja saudável e bonito no Dia da Noiva.",
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
      { name: "Cabelo de Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/cabelo-de-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Cabelo de Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Cabelo de Noiva`,
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
          <h2>Solicite um Orçamento para o Cabelo de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default CabeloDeNoivaPage;
