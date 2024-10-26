"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem Duradoura para Noivas - Studio Amendolla',
  description: 'A Maquiagem Duradoura para Noivas do Studio Amendolla garante um visual impecável durante todo o casamento, desde a cerimônia até a última dança.',
  detailedDescription: `Para o grande dia, uma maquiagem que dure por horas é essencial para garantir que a noiva se mantenha deslumbrante do início ao fim. No Studio Amendolla, utilizamos produtos de alta performance e técnicas de aplicação que garantem uma maquiagem resistente ao calor, à umidade e às emoções intensas do casamento. 
  Nossa preparação de pele inclui primers específicos, bases de longa duração e técnicas de selagem que fixam a maquiagem sem pesar, mantendo a pele com aparência fresca e natural. Além disso, o retoque é mínimo, proporcionando mais tranquilidade para a noiva aproveitar seu momento.`,
  image: '/images/maquiagem-duradoura-noiva.webp',
  images: [
    '/images/maquiagem-duradoura-noiva.webp',
    '/images/maquiagem-duradoura-noiva-casamento.webp',
    '/images/maquiagem-duradoura-noiva-sorriso.webp',
  ],
};

const faqData = [
  {
    question: 'O que é a maquiagem duradoura para noivas?',
    answer: 'A maquiagem duradoura para noivas utiliza produtos de alta performance e técnicas que garantem que o visual permaneça impecável por até 12 horas até mais dependendo, mesmo em ambientes com calor e umidade.',
  },
  {
    question: 'Como garantir que a maquiagem dure o dia todo?',
    answer: 'Utilizamos primers específicos, bases de longa duração, e técnicas de fixação que mantêm a maquiagem no lugar, mesmo com lágrimas de emoção e o calor do evento.',
  },
  {
    question: 'Quais produtos são usados na maquiagem duradoura para noivas?',
    answer: 'No Studio Amendolla, utilizamos produtos de marcas renomadas e resistentes à água, além de fixadores de maquiagem que garantem um acabamento perfeito e duradouro.',
  },
  {
    question: 'Qual é o valor da maquiagem duradoura para noivas?',
    answer: 'O valor da maquiagem duradoura para noivas valores sob consulta, dependendo das especificidades de cada noiva. Agende uma consulta para personalizar seu pacote e garantir a melhor experiência.',
  },
];

const MaquiagemNoivaDuradouraPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem Duradoura para Noivas no Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-10',
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
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Maquiagem Duradoura para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-duradoura-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem Duradoura para Noivas no Studio Amendolla - Beleza que Dura Todo o Dia`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} de Maquiagem Duradoura para Noivas`, // Nome da imagem
      datePublished: '2024-10-10', // Data de publicação da imagem
      author: 'Studio Amendolla', // Nome do autor da imagem
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp', // URL do logo do Studio Amendolla
        },
      },
      inLanguage: 'pt-BR', // Idioma da imagem
      license: 'https://creativecommons.org/licenses/by/4.0/', // Licença de uso
    })),
  };
  

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem Duradoura para Noivas - Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem Duradoura para Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem Duradoura para Noivas</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Duradoura</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaDuradouraPage;
