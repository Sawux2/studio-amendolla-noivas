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
  title: "Cuidados de Beleza Pré-Casamento - Studio Amendolla",
  description:
    "Descubra os cuidados essenciais de beleza que toda noiva deve ter antes do casamento para garantir um visual impecável e saudável no grande dia.",
  detailedDescription: `
    O pré-casamento é o momento ideal para preparar sua pele, cabelo e corpo para o grande dia. Os cuidados de beleza são essenciais para garantir que você se sinta radiante e confiante no seu casamento. Aqui estão algumas dicas de cuidados de beleza que você não pode deixar de seguir antes do seu casamento:

    1. **Cuidados com a pele**: 
       A pele bem cuidada é a base para uma maquiagem impecável. Faça uma rotina de limpeza, tonificação e hidratação diária. Visite um dermatologista para tratar qualquer problema específico, como acne ou manchas. Um bom tratamento facial, como limpeza de pele e esfoliação, também é essencial para uma pele suave e luminosa.

    2. **Hidratação do cabelo**: 
       Comece a hidratar seu cabelo com antecedência para garantir que ele esteja saudável, brilhante e com um aspecto natural. Invista em máscaras capilares nutritivas e procure cortar as pontas para remover qualquer resíduo de cabelo danificado.

    3. **Tratamento das unhas**: 
       Realize tratamentos regulares nas unhas para mantê-las fortes e saudáveis. Aposte em manicure e pedicure de qualidade para garantir que suas mãos e pés estejam impecáveis para o grande dia. As noivas podem escolher um esmalte que combine com seu estilo e com o vestido de casamento.

    4. **Alimentação equilibrada**: 
       A alimentação também tem impacto direto na sua pele e cabelo. Aposte em uma dieta rica em frutas, vegetais e alimentos que favoreçam a saúde da pele e do cabelo, como alimentos ricos em vitaminas e ácidos graxos essenciais.

    5. **Cuidando do corpo**: 
       Se você deseja um corpo mais tonificado, comece uma rotina de exercícios físicos e cuide da sua alimentação com antecedência. Não se esqueça de realizar tratamentos estéticos para promover a firmeza da pele e suavizar a celulite, se necessário.

    6. **Exames e cuidados com a saúde**: 
       Realize exames médicos para garantir que sua saúde esteja em dia. Isso inclui exames de rotina, cuidados com a alimentação e até o controle do estresse, que pode afetar a aparência da sua pele e bem-estar.

    7. **Prova de maquiagem e cabelo**: 
       Não deixe para fazer a prova de maquiagem e cabelo no último minuto. Agende uma sessão com o profissional que irá cuidar de você no dia do casamento para garantir que o visual esteja de acordo com o que você imaginou. Isso também ajuda a ajustar qualquer detalhe antes do grande dia.`,
  image: "/images/cuidados-beleza-pre-casamento-1.webp",
  images: [
    "/images/cuidados-beleza-pre-casamento-1.webp",
    "/images/cuidados-beleza-pre-casamento-2.webp",
  ],
};

const faqData = [
  {
    question: "Qual é a melhor rotina de cuidados de pele antes do casamento?",
    answer:
      "A melhor rotina de cuidados com a pele inclui limpeza diária, hidratação profunda e tratamentos específicos, como esfoliação e máscaras faciais. Não deixe de consultar um dermatologista para um plano personalizado.",
  },
  {
    question: "Quando devo começar a cuidar do meu cabelo para o casamento?",
    answer:
      "Idealmente, comece a cuidar do seu cabelo pelo menos 6 meses antes do casamento. Isso inclui hidratação regular, corte de pontas e tratamentos específicos para garantir um cabelo saudável no grande dia.",
  },
  {
    question: "Devo fazer tratamentos estéticos antes do casamento?",
    answer:
      "Sim, tratamentos estéticos como drenagem linfática, massagens e cuidados com a pele ajudam a melhorar a aparência e o bem-estar, proporcionando uma sensação de leveza e relaxamento antes do grande dia.",
  },
  {
    question: "Como posso garantir unhas perfeitas para o casamento?",
    answer:
      "Realize manicures e pedicures regulares nas semanas que antecedem o casamento. Além disso, faça um tratamento específico para fortalecer as unhas e escolha um esmalte que complemente o seu estilo de noiva.",
  },
];

const CuidadosBelezaPreCasamentoPage = () => {
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
      { name: "Cuidados de Beleza Pré-Casamento", url: "https://www.studioamendollanoivas.com.br/paginaSeo/cuidados-beleza-pre-casamento" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Cuidados de Beleza Pré-Casamento - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Cuidados de Beleza Pré-Casamento`,
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
                alt={`Cuidados de Beleza Pré-Casamento - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Cuidados de Beleza Pré-Casamento</h2>
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
          <h2>Solicite um Orçamento para Cuidados de Beleza Pré-Casamento</h2>
          <OrcamentoForm />
        </div>
      </div>
      <FeaturesCards />
      <ServiceSimulator/>
    </div>
  );
};

export default CuidadosBelezaPreCasamentoPage;
