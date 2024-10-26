"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Noiva Natural - Studio Amendolla',
  description: 'A Maquiagem para Noiva Natural do Studio Amendolla realça a beleza natural com um toque suave, ideal para casamentos ao ar livre e diurnos.',
  detailedDescription: `No Studio Amendolla, entendemos que cada noiva busca refletir sua essência no grande dia. A maquiagem para noiva natural é perfeita para aquelas que desejam um visual suave e elegante, sem perder sua personalidade. 
  Utilizamos produtos de longa duração e técnicas que realçam a pele, mantendo um acabamento leve e radiante. Nossos serviços incluem preparação de pele, correções sutis e destaque para os olhos e lábios de forma suave, garantindo um resultado encantador e natural.`,
  image: '/images/maquiagem-noiva-natural.webp',
  images: [
    '/images/maquiagem-noiva-natural.webp',
    '/images/maquiagem-noiva-natural-olhos.webp',
    '/images/maquiagem-noiva-natural-sorriso.webp',
  ],
};

const faqData = [
  {
    question: 'O que é a maquiagem para noiva natural?',
    answer: 'A maquiagem para noiva natural é uma abordagem suave que busca realçar a beleza da noiva de forma leve, sem exageros, ideal para casamentos durante o dia.',
  },
  {
    question: 'Quais técnicas são usadas na maquiagem para noiva natural?',
    answer: 'Utilizamos técnicas como preparação da pele com produtos leves, uso de sombras neutras, cílios realçados e batons em tons naturais que combinam com a cor dos lábios.',
  },
  {
    question: 'A maquiagem natural dura o dia todo?',
    answer: 'Sim, nossa maquiagem para noivas usa produtos de longa duração que garantem uma pele bonita e fresca durante toda a cerimônia e recepção.',
  },
  {
    question: 'Qual o valor da maquiagem para noiva natural?',
    answer: 'O valor da maquiagem para noiva natural sob. Consulte, dependendo das necessidades de cada noiva. Oferecemos pacotes personalizados para atender todos os desejos.',
  },
];

const MaquiagemNoivaNaturalPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem para Noiva Natural no Studio Amendolla',
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
      { name: 'Maquiagem para Noiva Natural', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-natural' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem para Noiva Natural no Studio Amendolla - Realce Natural e Beleza`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} de Maquiagem para Noiva Natural`, // Nome único para cada imagem
      datePublished: '2024-10-10', // Data de publicação
      author: 'Studio Amendolla', // Autor da imagem
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
      <h1>Maquiagem para Noiva Natural - Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem para Noiva Natural - ${currentImage + 1}`}
                width={400}
                height={300}
                className={styles.serviceImage}
                quality={80}
                priority={currentImage === 0} // Dá prioridade à primeira imagem para melhorar o LCP
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noiva Natural</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Natural</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaNaturalPage;
