"use client";

import Image from "next/image";
import { useState } from "react";
import OrcamentoForm from "app/components/OrcamentoForm";
import styles from "app/styles/PaginaSeo.module.css";
import CanonicalURL from "app/components/CanonicalURL";
import UnifiedSchemas from "app/schemas/UnifiedSchemas";

const serviceData = {
  title: "Dia da Noiva - Studio Amendolla",
  description:
    "Celebre o Dia da Noiva com uma experiência única e personalizada. Cuide de cada detalhe para garantir que você se sinta radiante e confiante no grande dia.",
  detailedDescription: `
    O Dia da Noiva é um momento especial que antecede a cerimônia, onde você recebe cuidados personalizados para garantir que se sinta maravilhosa e tranquila. No Studio Amendolla, proporcionamos uma experiência completa de beleza para você brilhar no seu grande dia. 

    1. **Preparação da Pele**: 
       Comece com um tratamento de pele completo, com limpeza profunda, hidratação e máscara facial para garantir uma pele suave, iluminada e pronta para a maquiagem.

    2. **Cabelo e Penteado**: 
       Selecione o penteado ideal para o seu estilo e para o clima do casamento. Oferecemos desde penteados clássicos a modernos, sempre priorizando o conforto e a durabilidade para que você se sinta linda e confortável durante toda a cerimônia.

    3. **Maquiagem Personalizada**: 
       Realizamos a maquiagem de acordo com o seu estilo, considerando o formato do seu rosto, a cor do vestido e o estilo do casamento. Desde a maquiagem mais leve e natural até a mais elaborada, garantimos que você ficará deslumbrante.

    4. **Relaxamento e Bem-estar**: 
       O Dia da Noiva é também sobre relaxar. Proporcionamos momentos de tranquilidade, como massagens e cuidados especiais, para que você chegue ao altar completamente tranquila e confiante.

    5. **Toques Finais**: 
       Não podemos esquecer dos detalhes. Manicure, pedicure e cuidados extras são parte do processo para garantir que você esteja impecável de cabeça a pés.

    6. **Cuidado Pós-Cerimônia**: 
       Após a cerimônia, o Studio Amendolla oferece também o cuidado pós-evento, com tratamentos que ajudam a manter sua beleza após o grande dia.

    Se você quer uma experiência única e completa no Dia da Noiva, o Studio Amendolla oferece tudo o que você precisa para brilhar de forma única no seu casamento.`,
  image: "/images/dia-da-noiva-1.webp",
  images: [
    "/images/dia-da-noiva-1.webp",
    "/images/dia-da-noiva-2.webp",
  ],
};

const faqData = [
  {
    question: "O que está incluído no pacote do Dia da Noiva?",
    answer:
      "O pacote inclui cuidados completos com cabelo, maquiagem, pele, manicure, pedicure e até momentos de relaxamento para garantir que você se sinta maravilhosa no seu grande dia.",
  },
  {
    question: "Quando devo agendar o meu Dia da Noiva?",
    answer:
      "Recomendamos agendar com antecedência de pelo menos 3 a 6 meses antes do casamento, garantindo que todos os detalhes sejam planejados conforme o seu gosto e estilo.",
  },
  {
    question: "Posso fazer uma prova de cabelo e maquiagem antes do Dia da Noiva?",
    answer:
      "Sim, oferecemos o serviço de teste para que você possa ver e ajustar o seu visual antes do grande dia, garantindo que tudo saia como planejado.",
  },
  {
    question: "O que devo levar para o meu Dia da Noiva?",
    answer:
      "Recomendamos que você traga seu vestido de noiva, acessórios e qualquer outra peça especial que queira usar durante o dia, para que possamos garantir que tudo esteja perfeito.",
  },
];

const DiaDaNoivaPage = () => {
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
      { name: "Dia da Noiva", url: "https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva" },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: "Dia da Noiva - Studio Amendolla",
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva`,
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
                alt={`Dia da Noiva - ${currentImage + 1}`}
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

export default DiaDaNoivaPage;
