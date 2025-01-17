"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Penteado de Noiva - Studio Amendolla, Zona Norte SP',
  description: 'No Studio Amendolla, oferecemos penteados de noiva exclusivos, com foco em elegância e sofisticação, para garantir que você esteja deslumbrante no seu grande dia.',
  detailedDescription: `No **Studio Amendolla**, sabemos que o penteado da noiva é um dos detalhes mais importantes do casamento. Por isso, oferecemos penteados personalizados, criando looks que harmonizam com o estilo da noiva e o tema do casamento, além de garantir que o visual permaneça perfeito durante todo o evento.
  Nossa equipe de profissionais é especializada em técnicas modernas e criativas, seja para penteados clássicos, românticos ou mais ousados, sempre com produtos de alta qualidade para garantir a durabilidade e o conforto da noiva durante toda a cerimônia.
  O nosso salão, localizado na **Zona Norte de São Paulo**, é o ambiente ideal para experimentar diferentes estilos e encontrar o penteado perfeito, cuidando de cada detalhe para que você brilhe no seu casamento.`,
  image: '/images/penteado-noiva-romantico.webp',
  images: [
    '/images/penteado-noiva-romantico.webp',
    '/images/penteado-noiva-clasico.webp',
    '/images/penteado-noiva-tradicional.webp',
  ],
};

const faqData = [
  {
    question: 'Como escolher o penteado ideal para o casamento?',
    answer: 'A escolha do penteado ideal depende do estilo da noiva, do tipo de vestido e do tema do casamento. No Studio Amendolla, realizamos uma consulta para entender seu estilo e escolher o penteado que realce ainda mais sua beleza.',
  },
  {
    question: 'Quando devo fazer o teste de penteado?',
    answer: 'Recomendamos que o teste de penteado seja realizado pelo menos 1 mês antes do casamento. Isso dá tempo suficiente para realizar ajustes e garantir que o penteado escolhido seja o ideal para você.',
  },
  {
    question: 'Os penteados são feitos para todos os tipos de cabelo?',
    answer: 'Sim, nossos profissionais são especializados em penteados para todos os tipos de cabelo, desde os mais lisos até os mais cacheados ou volumosos, utilizando técnicas e produtos específicos para garantir um resultado perfeito.',
  },
  {
    question: 'Qual a durabilidade do penteado de noiva?',
    answer: 'Nós usamos produtos de alta qualidade que garantem a durabilidade do penteado durante todo o evento. Se necessário, fazemos retoques para garantir que o seu penteado se mantenha impecável durante o casamento.',
  },
];

const PenteadoNoivaPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Penteado de Noiva - Studio Amendolla, Zona Norte SP',
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
      { name: 'Penteado de Noiva', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/penteado-noiva' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: 'Penteado de Noiva no Studio Amendolla',
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} - Penteado de Noiva`,
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
      <h1>Penteado de Noiva - Studio Amendolla, Zona Norte SP</h1>
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
                alt={`Penteado de Noiva - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteado de Noiva</h2>
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
          <h2>Solicite um Orçamento para o Penteado de Noiva</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PenteadoNoivaPage;
