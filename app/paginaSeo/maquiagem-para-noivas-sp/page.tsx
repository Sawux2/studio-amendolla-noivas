"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Maquiagem para Noivas SP',
  description: 'O Studio Amendolla Noivas é referência em maquiagem e penteados para noivas em São Paulo. Oferecemos um atendimento personalizado para tornar o seu grande dia ainda mais especial, com opções de atendimento a domicílio na Zona Norte de SP.',
  detailedDescription: `No Studio Amendolla, nossa especialidade é transformar seu dia especial em uma experiência inesquecível. 
  Com atendimento a domicílio para sua comodidade, garantimos que noivas e madrinhas recebam um cuidado exclusivo, com maquiagem de longa duração e penteados sofisticados.
  Localizado na Zona Norte de São Paulo, nosso espaço também é um refúgio para o Dia da Noiva, onde cada detalhe é pensado para que você se sinta deslumbrante.
  Explore nossos pacotes *Essencial*, *Premium* e *Luxo*, cada um pensado para atender diferentes estilos e necessidades.`,
  image: '/images/maquiagem-para-noivas-sp.webp',
  images: [
    '/images/maquiagem-para-noivas-essencial.webp',
    '/images/maquiagem-para-noivas-sp.webp',
    '/images/maquiagem-para-noivas-luxo.webp',
  ],
};

const faqData = [
  { question: 'Vocês oferecem atendimento a domicílio?', answer: 'Sim, realizamos atendimento a domicílio na Zona Norte de São Paulo e região, com opções sob consulta.' },
  { question: 'Quais os valores dos pacotes de maquiagem para noivas?', answer: 'Nossos pacotes variam de acordo com as necessidades de cada noiva, consulte nossos valores e pacotes.' },
  { question: 'O que está incluído no Dia da Noiva?', answer: 'Nosso pacote de Dia da Noiva inclui maquiagem, penteado, cuidados com a pele, previas de maquiagem e penteado e um ambiente exclusivo para relaxar antes da cerimônia.' },
  { question: 'Como agendar uma avaliação?', answer: 'Entre em contato conosco pelo WhatsApp ou telefone para agendar uma avaliação personalizada.' },
];

const MaquiagemNoivasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Maquiagem para Noivas em São Paulo - Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-07',
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
      { name: 'Maquiagem para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/maquiagem-para-noivas' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Maquiagem para noivas no Studio Amendolla - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} de Maquiagem para Noivas`, // Nome único para cada imagem
      datePublished: '2024-10-07', // Data de publicação
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
      <h1>Maquiagem para Noivas SP - Studio Amendolla Noivas</h1>
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
                alt={`Maquiagem para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Maquiagem para Noivas</h2>
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


export default MaquiagemNoivasPage;
