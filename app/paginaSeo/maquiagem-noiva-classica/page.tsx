"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem de Noiva Clássica - Studio Amendolla',
  description: 'A Maquiagem de Noiva Clássica do Studio Amendolla é a escolha perfeita para um visual atemporal e sofisticado, destacando a beleza natural da noiva com elegância.',
  detailedDescription: `A maquiagem de noiva clássica é ideal para aquelas que desejam um look sofisticado e elegante no seu grande dia. No Studio Amendolla, utilizamos técnicas que realçam a beleza da noiva, focando em uma pele impecável, olhos marcantes e lábios em tons neutros ou vermelhos clássicos. 
  Nossos serviços incluem preparação completa da pele, correção e contorno suaves, além de produtos de alta qualidade que garantem uma maquiagem duradoura para toda a cerimônia e recepção. A maquiagem clássica é perfeita para qualquer estilo de casamento, desde celebrações tradicionais até eventos mais formais.`,
  image: '/images/maquiagem-noiva-classica.webp',
  images: [
    '/images/maquiagem-noiva-classica.webp',
    '/images/maquiagem-noiva-classica-pele.webp',
    '/images/maquiagem-noiva-classica-olhos.webp',
    '/images/maquiagem-noiva-classica-batom.webp',
  ],
};

const faqData = [
  {
    question: 'O que caracteriza a maquiagem de noiva clássica?',
    answer: 'A maquiagem de noiva clássica é marcada por uma pele bem preparada, olhos com sombras neutras e delineado suave, cílios volumosos e batom em tons clássicos como nude ou vermelho.',
  },
  {
    question: 'Qual é a durabilidade da maquiagem clássica para noivas?',
    answer: 'Utilizamos produtos de alta qualidade que garantem uma maquiagem de longa duração, mantendo a noiva impecável durante toda a cerimônia e a recepção.',
  },
  {
    question: 'A maquiagem de noiva clássica é indicada para todos os tipos de pele?',
    answer: 'Sim, a maquiagem de noiva clássica é adaptável para todos os tons e tipos de pele, realçando a beleza natural de cada noiva com técnicas personalizadas.',
  },
  {
    question: 'Qual é o valor da maquiagem de noiva clássica?',
    answer: 'O valor do serviço de maquiagem de noiva clássica valores sob consulta. Oferecemos pacotes personalizados , adicione a prévia de maquiagem (consulte valor) e atendimento no dia do casamento.',
  },
];

const MaquiagemNoivaClassicaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem de Noiva Clássica no Studio Amendolla',
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
      { name: 'Maquiagem de Noiva Clássica', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-classica' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem de Noiva Clássica no Studio Amendolla - Elegância e Sofisticação`,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem de Noiva Clássica - Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem de Noiva Clássica - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem de Noiva Clássica</h2>
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
          <h2>Solicite um Orçamento para Maquiagem Clássica</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaClassicaPage;
