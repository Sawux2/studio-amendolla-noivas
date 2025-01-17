"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem de Noiva - Studio Amendolla, Zona Norte SP',
  description: 'No Studio Amendolla, oferecemos maquiagem de noiva personalizada, com foco na naturalidade, elegância e longa durabilidade para o seu grande dia.',
  detailedDescription: `No **Studio Amendolla**, entendemos que a maquiagem da noiva precisa ser única e perfeita. Criamos looks personalizados, respeitando seu estilo e preferências, enquanto garantimos um visual impecável e duradouro.
  Nossos maquiadores são especializados em técnicas modernas e produtos de alta qualidade, escolhendo as melhores opções para cada tipo de pele e garantindo que você se sinta maravilhosa no dia mais especial da sua vida. Trabalhamos para proporcionar um acabamento suave, radiante e natural, com alta durabilidade, que permanecerá intacto durante toda a celebração.
  O nosso salão, localizado na **Zona Norte de São Paulo**, é o ambiente ideal para que você tenha uma experiência personalizada e exclusiva, cuidando de cada detalhe para que você se sinta ainda mais incrível no seu casamento.`,
  image: '/images/maquiagem-noiva-natural.webp',
  images: [
    '/images/maquiagem-noiva-natural.webp',
    '/images/maquiagem-noiva-glamour.webp',
    '/images/maquiagem-noiva-clasica.webp',
  ],
};

const faqData = [
  {
    question: 'Como escolher a maquiagem ideal para o casamento?',
    answer: 'A maquiagem ideal depende do estilo da noiva e do tipo de casamento. No Studio Amendolla, realizamos uma consulta para entender o estilo da noiva e adaptamos a maquiagem para destacar sua beleza de forma natural e elegante.',
  },
  {
    question: 'Quanto tempo antes do casamento devo agendar o teste de maquiagem?',
    answer: 'Recomendamos que o teste de maquiagem seja feito com pelo menos 1 mês de antecedência. Isso garante tempo suficiente para ajustes e para que a noiva se sinta segura e confortável com o look escolhido.',
  },
  {
    question: 'A maquiagem é feita para diferentes tipos de pele?',
    answer: 'Sim, trabalhamos com maquiagens adaptadas para todos os tipos de pele, seja ela seca, oleosa, mista ou sensível. Nossos maquiadores utilizam produtos específicos para cada tipo de pele, garantindo durabilidade e acabamento perfeito.',
  },
  {
    question: 'Qual é a durabilidade da maquiagem de noiva?',
    answer: 'Utilizamos produtos de alta qualidade e técnicas que garantem que a maquiagem permaneça intacta durante todo o evento, independente das condições de clima ou do tempo. A maquiagem de noiva no Studio Amendolla é feita para durar o dia todo.',
  },
];

const MaquiagemNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem de Noiva - Studio Amendolla, Zona Norte SP',
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
      { name: 'Maquiagem de Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem de Noiva no Studio Amendolla',
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
      <h1>Maquiagem de Noiva - Studio Amendolla, Zona Norte SP</h1>
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
          <h2>Solicite um Orçamento para a Maquiagem de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPage;
