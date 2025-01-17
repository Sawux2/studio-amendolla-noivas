"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Dia da Noiva com Beleza Natural - Studio Amendolla, Zona Norte SP',
  description: 'Realce sua beleza natural com um look de noiva fresco e leve, ideal para quem busca sofisticação sem excessos.',
  detailedDescription: `No Studio Amendolla, criamos um look de noiva que exalta a beleza natural de cada mulher. O Dia da Noiva com Beleza Natural é para aquelas que desejam um visual suave, elegante e atemporal, utilizando técnicas que valorizam o que há de mais autêntico na pele e nos traços da noiva. 
  Trabalhamos com maquiagem leve e penteados que realçam a beleza natural, utilizando produtos que promovem hidratação e leveza para garantir um visual impecável durante todo o evento. No Studio Amendolla, nosso foco é proporcionar um look fresco e sofisticado, ideal para noivas que buscam um estilo clássico e discreto, mas sem abrir mão da elegância.`,
  image: '/images/dia-da-noiva-beleza-natural.webp',
  images: [
    '/images/dia-da-noiva-beleza-natural.webp',
    '/images/noiva-pele-natural.webp',
    '/images/noiva-maquiagem-natural.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem de noiva com beleza natural?',
    answer: 'A maquiagem de noiva com beleza natural foca em um acabamento suave, com tons neutros que valorizam os traços naturais da noiva. Utilizamos produtos de alta qualidade para garantir durabilidade, sem pesar o visual.',
  },
  {
    question: 'Posso ter um penteado simples para o meu Dia da Noiva?',
    answer: 'Sim! Nosso objetivo é criar penteados leves e sofisticados, que combinem com a maquiagem natural e proporcionem conforto para a noiva durante todo o evento.',
  },
  {
    question: 'A maquiagem natural também é indicada para todos os tipos de pele?',
    answer: 'Sim! Trabalhamos com maquiagem personalizada para todos os tipos de pele, garantindo que o visual seja único e realce a beleza natural de cada noiva, independentemente de sua tonalidade de pele.',
  },
  {
    question: 'Quais são os cuidados para garantir que o look natural dure o dia todo?',
    answer: 'Usamos produtos de longa duração, primers hidratantes e fixadores para garantir que sua maquiagem e penteado se mantenham intactos durante todo o casamento, mesmo com a correria do grande dia.',
  },
];

const DiaDaNoivaBelezaNaturalPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Dia da Noiva com Beleza Natural - Studio Amendolla, Zona Norte SP',
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
      { name: 'Dia da Noiva com Beleza Natural', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/dia-da-noiva-beleza-natural' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Dia da Noiva com Beleza Natural - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Dia da Noiva com Beleza Natural`,
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
      <h1>Dia da Noiva com Beleza Natural - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Dia da Noiva - Beleza Natural ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre o Dia da Noiva com Beleza Natural</h2>
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
          <h2>Solicite um Orçamento para o Dia da Noiva com Beleza Natural</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default DiaDaNoivaBelezaNaturalPage;
