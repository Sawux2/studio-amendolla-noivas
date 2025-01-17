"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Festa de Casamento - Studio Amendolla',
  description: 'A maquiagem para festa de casamento é perfeita para noivas e convidadas que desejam um look sofisticado e elegante para o grande dia. Oferecemos um acabamento impecável e duradouro, com produtos de alta qualidade.',
  detailedDescription: `
    A maquiagem para festa de casamento é criada para proporcionar um visual deslumbrante, com técnicas que garantem um look impecável durante todo o evento. Usamos produtos de longa duração e com alta fixação, para que a maquiagem se mantenha perfeita o dia todo. Seja para noivas, madrinhas ou convidadas, nossa proposta é realçar a beleza de cada mulher, respeitando sua personalidade e o estilo do evento. Com técnicas de maquiagem personalizadas, garantimos um look único e sofisticado.`,
  image: '/images/maquiagem-festa-casamento.webp',
  images: [
    '/images/maquiagem-festa-casamento-1.webp',
    '/images/maquiagem-festa-casamento-2.webp',
  ],
};

const faqData = [
  {
    question: 'Qual é a maquiagem ideal para uma festa de casamento?',
    answer: 'A maquiagem ideal para uma festa de casamento depende do estilo da noiva e do evento. Para noivas, usamos técnicas que valorizam os traços e garantem um acabamento perfeito, enquanto para convidadas, o objetivo é criar um look sofisticado e elegante. Produtos de longa duração são essenciais para garantir a maquiagem impecável durante todo o evento.',
  },
  {
    question: 'Quais são os cuidados que devo ter com a maquiagem para festa de casamento?',
    answer: 'Para garantir que a maquiagem se mantenha impecável, é importante hidratar a pele antes do procedimento. Além disso, o uso de primers e fixadores é fundamental para garantir a durabilidade. Recomendamos também que a maquiagem seja feita de acordo com o estilo do evento, levando em conta a paleta de cores e o visual geral do casamento.',
  },
  {
    question: 'A maquiagem para festa de casamento é resistente ao calor?',
    answer: 'Sim, utilizamos produtos de alta qualidade e resistentes ao calor, garantindo que a maquiagem permaneça perfeita durante toda a festa, mesmo em ambientes mais quentes.',
  },
  {
    question: 'Posso incluir algum estilo de maquiagem específico?',
    answer: 'Sim, podemos personalizar o estilo de maquiagem de acordo com a sua preferência, seja um look mais clássico, romântico ou moderno. Trabalhamos para realçar sua beleza e garantir que você se sinta maravilhosa no grande dia.',
  },
];

const MaquiagemParaFestaDeCasamentoPage = () => {
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
      { name: 'Maquiagem para Festa de Casamento', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-festa-de-casamento' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Festa de Casamento - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Festa de Casamento`,
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
                alt={`Maquiagem para Festa de Casamento - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Festa de Casamento</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Festa de Casamento</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaFestaDeCasamentoPage;
