"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem para Olhos Pequenos - Studio Amendolla',
  description: 'A maquiagem para olhos pequenos é uma técnica especial que destaca e amplia o olhar, criando uma aparência marcante e equilibrada.',
  detailedDescription: `
    A maquiagem para olhos pequenos é projetada para realçar o olhar e criar a ilusão de olhos maiores. 
    No Studio Amendolla, utilizamos técnicas específicas, como o uso de sombras claras e esfumados estratégicos, 
    aplicação de lápis na linha d'água inferior e cílios alongados. 
    Nossos profissionais trabalham com produtos de alta qualidade para garantir um visual impecável e que valorize a beleza natural.
    Ideal para qualquer ocasião, desde eventos casuais até celebrações mais formais.
  `,
  image: '/images/maquiagem-olhos-pequenos.webp',
  images: [
    '/images/maquiagem-olhos-pequenos-1.webp',
    '/images/maquiagem-olhos-pequenos-2.webp',
  ],
};

const faqData = [
  {
    question: 'Quais técnicas ajudam a destacar olhos pequenos?',
    answer: 'Técnicas como esfumado claro no canto interno, delineado alongado e aplicação de cílios ajudam a destacar olhos pequenos.',
  },
  {
    question: 'Quais produtos são mais indicados para olhos pequenos?',
    answer: 'Sombras claras e neutras, lápis branco ou bege para a linha d’água, e máscaras de cílios alongadoras são os mais indicados.',
  },
  {
    question: 'A maquiagem para olhos pequenos é indicada para qualquer ocasião?',
    answer: 'Sim, as técnicas podem ser adaptadas para ocasiões casuais ou formais, dependendo do estilo desejado.',
  },
  {
    question: 'É possível combinar com outros estilos de maquiagem?',
    answer: 'Certamente! A maquiagem para olhos pequenos pode ser integrada a estilos clássicos, modernos ou românticos.',
  },
];

const MaquiagemParaOlhosPequenosPage = () => {
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
      { name: 'Maquiagem para Olhos Pequenos', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-olhos-pequenos' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem para Olhos Pequenos - Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem para Olhos Pequenos`,
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
                alt={`Maquiagem para Olhos Pequenos - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Olhos Pequenos</h2>
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
          <h2>Solicite um Orçamento para Maquiagem para Olhos Pequenos</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemParaOlhosPequenosPage;
