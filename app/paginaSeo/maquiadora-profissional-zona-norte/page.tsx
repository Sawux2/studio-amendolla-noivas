
"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";
import FeaturesCards from "app/components/FeaturesCards";

const serviceData = {
  title: "Maquiadora Profissional - Zona Norte",
  description:
    "Encontre a maquiadora profissional ideal para o seu evento na Zona Norte. Priscila Helena cria looks sofisticados e naturais para realçar sua beleza.",
  detailedDescription: `
    Se você busca uma maquiadora de confiança na Zona Norte, Priscila Helena é a escolha certa. 
    Com ampla experiência em casamentos, festas e eventos corporativos, ela oferece serviços de maquiagem personalizados que realçam a beleza única de cada cliente. 
    Utilizando técnicas modernas e produtos de alta qualidade, Priscila Helena cria looks duradouros, perfeitos para qualquer ocasião.
    Descubra o melhor da maquiagem profissional e transforme seu visual com um atendimento exclusivo e dedicado.
  `,
  image: "/images/maquiadora-perto-de-mim-priscila-1.webp",
  images: [
    "/images/maquiadora-perto-de-mim-priscila-1.webp",
  ],
};

const faqData = [
  {
    question: "Onde posso encontrar uma maquiadora profissional na Zona Norte?",
    answer:
      "Priscila Helena atende diversas regiões da Zona Norte, garantindo um serviço de maquiagem personalizado para cada evento. Consulte a disponibilidade para a sua localidade.",
  },
  {
    question: "Quais os benefícios de contratar uma maquiadora profissional local?",
    answer:
      "Contratar uma maquiadora local, como Priscila Helena, garante praticidade, comunicação facilitada e um atendimento ágil e adaptado à cultura e estilo da região.",
  },
  {
    question: "Como agendar uma sessão de maquiagem para meu evento?",
    answer:
      "Você pode entrar em contato diretamente com Priscila Helena para agendar uma sessão. Os agendamentos podem ser realizados online ou por telefone.",
  },
  {
    question: "Quais os tipos de maquiagem oferecidos?",
    answer:
      "Priscila Helena oferece uma gama completa de serviços, incluindo maquiagem para noivas, festas, eventos corporativos, e sessões para fotos e vídeos, sempre com um toque personalizado.",
  },
];

const MaquiadoraProfissionalZonaNortePage = () => {
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
      { name: "Maquiadora Profissional - Zona Norte", url: "https://www.studioamendollanoivas.com.br/paginaSeo/maquiadora-profissional-zona-norte" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Maquiadora Profissional - Zona Norte",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiadora Profissional - Zona Norte`,
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
                alt={`Maquiadora Profissional - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiadora Profissional</h2>
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

      <FeaturesCards />
    </div>
  );
};

export default MaquiadoraProfissionalZonaNortePage;
