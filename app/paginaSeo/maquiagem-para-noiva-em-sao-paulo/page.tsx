"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
    title: 'Maquiagem de Noiva - Studio Amendolla',
    description: 'Especialistas em maquiagem de noiva, proporcionando um look impecável, elegante e duradouro para o seu grande dia.',
    detailedDescription: `No Studio Amendolla, oferecemos serviços exclusivos de maquiagem para noivas, com foco em técnicas que garantem um visual natural e radiante. Com base nas necessidades específicas da pele da noiva, criamos um look que realça sua beleza única, garantindo que ela se sinta confiante e maravilhosa. Usamos produtos de alta qualidade para um acabamento perfeito e de longa duração, ideal para o dia mais especial da sua vida.`,
    image: '/images/maquiagem-noiva.webp',
    images: [
      '/images/maquiagem-noiva-1.webp',
      '/images/maquiagem-noiva-2.webp',
      '/images/maquiagem-noiva-3.webp',
    ],
};

const faqData = [
    {
      question: 'Como é feita a maquiagem de noiva no Studio Amendolla?',
      answer: 'A maquiagem de noiva é feita de acordo com o estilo e preferências da cliente, priorizando um look natural, elegante e duradouro. Utilizamos técnicas personalizadas para cada tipo de pele e tom de rosto, garantindo um visual impecável para o grande dia.',
    },
    {
      question: 'Quais produtos são usados na maquiagem de noiva?',
      answer: 'Utilizamos apenas produtos de alta qualidade, com foco em bases e corretivos de longa duração, além de iluminadores e blushes que proporcionam um efeito radiante, perfeito para o dia da noiva.',
    },
    {
      question: 'A maquiagem de noiva dura o dia todo?',
      answer: 'Sim, garantimos que a maquiagem de noiva tenha longa duração. Utilizamos produtos de alta fixação, além de técnicas de preparação de pele que ajudam a manter a maquiagem impecável até o final da celebração.',
    },
    {
      question: 'Quando devo fazer o teste da maquiagem de noiva?',
      answer: 'Recomendamos que o teste de maquiagem seja feito com pelo menos 2 semanas de antecedência ao casamento. Isso permite ajustar detalhes e garantir que o look final seja exatamente como a noiva deseja.',
    },
];

const MaquiagemDeNoivaPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
    };

    const handlePrevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
    };

    const pageData = {
      article: {
        headline: 'Maquiagem de Noiva - Studio Amendolla',
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
        { name: 'Maquiagem de Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-de-noiva' },
      ],
      images: serviceData.images.map((image, index) => ({
        url: `https://www.studioamendollanoivas.com.br${image}`,
        description: 'Maquiagem de Noiva - Studio Amendolla',
        width: 600,
        height: 400,
        name: `Imagem ${index + 1} - Maquiagem de Noiva`,
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
        <h1>Maquiagem de Noiva - Studio Amendolla</h1>
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
                  alt={`Maquiagem de Noiva - ${currentImage + 1}`}
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
              <h2>Perguntas Frequentes sobre Maquiagem de Noiva</h2>
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
            <h2>Solicite um Orçamento para Maquiagem de Noiva</h2>
            <OrcamentoForm />
          </div>
        </div>
      </div>
    );
};

export default MaquiagemDeNoivaPage;
