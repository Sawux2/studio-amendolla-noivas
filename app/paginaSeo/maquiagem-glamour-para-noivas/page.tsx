"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem Glamour para Noivas - Studio Amendolla',
    description: 'A maquiagem glamour para noivas é a escolha perfeita para quem deseja um look sofisticado e marcante, com acabamentos impecáveis e destacando a beleza natural da noiva.',
    detailedDescription: `No Studio Amendolla, oferecemos a maquiagem glamour para noivas, com foco em realçar a beleza de forma sofisticada e marcante. Utilizamos técnicas avançadas para criar um visual radiante, com acabamentos perfeitos, que garantem durabilidade e elegância para o grande dia. A maquiagem é personalizada de acordo com o estilo e o tipo de casamento da noiva, com um toque especial que combina com a grandiosidade desse momento. As noivas que escolhem o Studio Amendolla recebem um atendimento exclusivo e dedicado, para que o look seja tão único quanto o dia do casamento.`,
    image: '/images/maquiagem-glamour-noiva.webp',
    images: [
      '/images/maquiagem-glamour-noiva-1.webp',
      '/images/maquiagem-glamour-noiva-2.webp',
      '/images/maquiagem-glamour-noiva-3.webp',
    ],
};

const faqData = [
    {
      question: 'O que caracteriza a maquiagem glamour para noivas?',
      answer: 'A maquiagem glamour para noivas é caracterizada por um visual sofisticado, com acabamentos perfeitos, como a pele impecável, olhos esfumados ou delineados marcantes e lábios definidos. O foco é criar um look impactante que se destaque durante o grande dia.',
    },
    {
      question: 'Qual o tipo de acabamento usado na maquiagem glamour para noivas?',
      answer: 'Usamos acabamentos de alta cobertura, com produtos que garantem um aspecto suave, mas com maior durabilidade. O uso de iluminadores, bronzers e contornos é essencial para criar um visual de pele perfeita e radiante.',
    },
    {
      question: 'A maquiagem glamour é indicada para todos os tipos de pele?',
      answer: 'Sim! A maquiagem glamour pode ser adaptada para todos os tipos de pele, com a escolha de produtos que atendem às necessidades específicas de cada noiva, garantindo um resultado impecável e duradouro.',
    },
    {
      question: 'Quais são os produtos usados na maquiagem glamour para noivas?',
      answer: 'Utilizamos produtos de alta qualidade, como bases de longa duração, corretivos de alta cobertura, sombras e delineadores à prova d\'água, além de iluminadores e batons que garantem um look sofisticado e radiante.',
    },
];

const MaquiagemGlamourParaNoivasPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem Glamour para Noivas - Studio Amendolla',
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
        { name: 'Maquiagem Glamour para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-glamour-para-noivas' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem Glamour para Noivas - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem Glamour para Noivas`,
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
        <h1>Maquiagem Glamour para Noivas - Studio Amendolla</h1>
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
                  alt={`Maquiagem Glamour para Noivas - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem Glamour para Noivas</h2>
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
            <h2>Solicite um Orçamento para Maquiagem Glamour para Noivas</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemGlamourParaNoivasPage;
