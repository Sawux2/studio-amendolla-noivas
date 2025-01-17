"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Pele Oleosa - Studio Amendolla',
  description: 'A maquiagem para pele oleosa é projetada para controlar o brilho excessivo e garantir um acabamento perfeito durante todo o dia. Ideal para quem busca uma pele mate e duradoura.',
  detailedDescription: `
    A maquiagem para pele oleosa tem como objetivo controlar o brilho e manter a pele com aparência fresca e mate. No Studio Amendolla, utilizamos técnicas e produtos que ajudam a minimizar a oleosidade, mantendo a pele perfeita por mais tempo. Usamos primers e bases com fórmulas oil-free, que criam uma camada de proteção contra a oleosidade, garantindo que sua maquiagem permaneça intacta. Além disso, aplicamos um pó finalizador para matificar e evitar que o brilho excessivo apareça durante o dia.`,
  image: '/images/maquiagem-oleosa.webp',
  images: [
    '/images/maquiagem-oleosa-1.webp',
    '/images/maquiagem-oleosa-2.webp',
    '/images/maquiagem-oleosa-3.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem para pele oleosa?',
    answer: 'A maquiagem para pele oleosa é caracterizada por produtos que ajudam a controlar o brilho e a oleosidade da pele, utilizando fórmulas oil-free e produtos matificantes. A aplicação de primers e pós específicos ajuda a garantir uma aparência mate e duradoura.',
  },
  {
    question: 'Quais produtos são indicados para pele oleosa?',
    answer: 'Para a pele oleosa, recomendamos o uso de primers matificantes, bases oil-free e pós translúcidos. Esses produtos ajudam a controlar o excesso de sebo e garantem que a maquiagem permaneça impecável por mais tempo.',
  },
  {
    question: 'A maquiagem para pele oleosa é indicada para todos os tipos de pele?',
    answer: 'Embora a maquiagem para pele oleosa seja especialmente indicada para quem tem esse tipo de pele, também pode ser usada por pessoas com pele mista ou até seca, desde que o produto seja adaptado para cada tipo de pele.',
  },
  {
    question: 'Qual o segredo para uma maquiagem duradoura em pele oleosa?',
    answer: 'O segredo para uma maquiagem duradoura em pele oleosa está na preparação da pele. Usar um primer matificante, escolher uma base de longa duração e finalizar com um pó leve ajuda a controlar a oleosidade e a manter o visual fresco durante o dia.',
  },
];

const MaquiagemParaPeleOleosaPage = () => {
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
      { name: 'Início', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
      { name: 'Maquiagem para Pele Oleosa', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-pele-oleosa' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Pele Oleosa - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Pele Oleosa`,
      datePublished: '2024-10-10',
      author: 'Studio Amendolla',
      publisher: {
        '@type': 'Organization',
        name: 'Studio Amendolla',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.studioamendollanoivas.com.br/images/logo.webp',
        },
      },
      inLanguage: 'pt-BR',
      license: 'https://creativecommons.org/licenses/by/4.0/',
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
                alt={`Maquiagem para Pele Oleosa - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Pele Oleosa</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Pele Oleosa</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaPeleOleosaPage;
