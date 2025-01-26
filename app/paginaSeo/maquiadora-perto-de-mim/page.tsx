"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Maquiadora Perto de Mim - Priscila Helena",
  description:
    "Encontre a maquiadora perfeita para o seu evento, próxima a você. Priscila Helena oferece maquiagens sofisticadas e naturais para noivas e eventos especiais.",
  detailedDescription: `
    Se você está procurando uma maquiadora próxima para o seu evento, Priscila Helena é a escolha certa. Com anos de experiência em casamentos e outros eventos especiais, ela oferece serviços de maquiagem personalizados, garantindo um visual deslumbrante que realça a beleza natural de cada cliente. Priscila Helena utiliza técnicas modernas e produtos de alta qualidade, criando looks que duram o dia inteiro e são perfeitos para qualquer ocasião. Seja para um casamento, festa ou evento corporativo, a maquiagem será feita para combinar com seu estilo e personalidade.`,
  image: "/images/maquiadora-perto-de-mim-priscila.webp",
  images: [
    "/images/maquiadora-perto-de-mim-priscila-1.webp",
  ],
};

const faqData = [
  {
    question: "Onde posso encontrar uma maquiadora profissional perto de mim?",
    answer:
      "Priscila Helena oferece serviços de maquiagem em diversas regiões, atendendo noivas, noivos e clientes para eventos em sua área. Consulte a disponibilidade para saber se ela atende a sua localidade.",
  },
  {
    question: "Qual é o diferencial de contratar uma maquiadora local?",
    answer:
      "Contratar uma maquiadora local como Priscila Helena garante praticidade, facilidade de comunicação e agilidade no atendimento, além de um conhecimento profundo sobre o estilo e cultura local.",
  },
  {
    question: "Como posso agendar uma maquiagem para meu evento?",
    answer:
      "Você pode entrar em contato diretamente com Priscila Helena para agendar uma sessão de maquiagem. Ela está disponível para consultas e agendamentos online ou por telefone.",
  },
  {
    question: "Quais são os tipos de maquiagem oferecidos por Priscila Helena?",
    answer:
      "Priscila Helena oferece uma gama de serviços, incluindo maquiagem para noivas, festas, eventos corporativos e maquiagens para fotos e vídeos, sempre com um olhar personalizado para cada ocasião.",
  },
];

const MaquiadoraPertoDeMimPage = () => {
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
      author: "Priscila Helena",
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
      { name: "Maquiadora Perto de Mim", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiadora-perto-de-mim" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiadora Perto de Mim - Priscila Helena",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiadora Perto de Mim`,
      datePublished: "2025-01-18",
      author: "Priscila Helena",
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
                alt={`Maquiadora Perto de Mim - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiadora Perto de Mim</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Profissional</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiadoraPertoDeMimPage;
