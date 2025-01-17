"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Maquiagem de Noiva para Pele Negra - Studio Amendolla, Zona Norte SP',
  description: 'Especialistas em maquiagem para noivas de pele negra, o Studio Amendolla oferece serviços personalizados para garantir um look radiante e duradouro no seu grande dia.',
  detailedDescription: `No **Studio Amendolla**, oferecemos serviços exclusivos de maquiagem para noivas de pele negra, com foco em realçar sua beleza natural. Sabemos como é importante escolher os produtos e técnicas certas para garantir que sua maquiagem seja impecável, seja sob luz natural ou flash de câmera. 
  Utilizamos bases e corretivos de alta cobertura que se adaptam perfeitamente ao tom de pele, além de técnicas de contorno que evidenciam a beleza e a naturalidade da noiva. Nosso compromisso é criar um look que realce suas melhores características, deixando-a radiante e confiante no grande dia.
  Localizado na **Zona Norte de São Paulo**, o Studio Amendolla é o lugar perfeito para as noivas que buscam um atendimento especializado e personalizado para o Dia da Noiva.`,
  image: '/images/maquiagem-noiva-pele-negra.webp',
  images: [
    '/images/maquiagem-noiva-pele-negra.webp',
    '/images/maquiagem-noiva-penteado-negro.webp',
    '/images/maquiagem-noiva-pele-negra-close.webp',
  ],
};

const faqData = [
  {
    question: 'Quais cuidados a maquiagem para pele negra exige?',
    answer: 'A maquiagem para pele negra exige o uso de produtos que sejam adequados ao tom de pele, como bases com alta cobertura e corretivos que não deixem o rosto opaco. Também é importante trabalhar com contornos e iluminadores que valorizem as características da pele negra, criando um visual harmônico e natural.',
  },
  {
    question: 'Como é feito o atendimento para maquiagem de noiva no Studio Amendolla?',
    answer: 'O atendimento é totalmente personalizado. Realizamos uma consulta inicial para entender o estilo da noiva e suas preferências, além de testes de maquiagem para garantir o resultado perfeito no grande dia. No dia do evento, nossa equipe de especialistas cuida de cada detalhe para que a noiva esteja impecável.',
  },
  {
    question: 'Quais produtos são utilizados para maquiagem de pele negra?',
    answer: 'Utilizamos produtos de alta qualidade, como bases, corretivos e iluminadores que são específicos para pele negra, com alta durabilidade e cobertura. Todos os produtos são escolhidos para garantir que a maquiagem dure o dia inteiro e resista a diferentes condições de luz.',
  },
  {
    question: 'Como posso garantir que minha maquiagem será duradoura?',
    answer: 'Além de usar produtos de alta qualidade, aplicamos técnicas que ajudam a fixar a maquiagem, como o uso de primer e sprays fixadores. A nossa maquiagem é feita para resistir ao longo do dia, mantendo o visual perfeito durante o casamento.',
  },
];

const MaquiagemNoivaPeleNegraPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem de Noiva para Pele Negra - Studio Amendolla, Zona Norte SP',
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
      { name: 'Maquiagem de Noiva para Pele Negra', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-noiva-pele-negra' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Maquiagem de Noiva para Pele Negra no Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Maquiagem de Noiva para Pele Negra`,
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
      <h1>Maquiagem de Noiva para Pele Negra - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Maquiagem de Noiva para Pele Negra - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem de Noiva para Pele Negra</h2>
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
          <h2>Solicite um Orçamento para Maquiagem de Noiva para Pele Negra</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default MaquiagemNoivaPeleNegraPage;
