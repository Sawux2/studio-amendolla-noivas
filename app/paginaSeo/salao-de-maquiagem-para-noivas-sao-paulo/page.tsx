"use client";

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL';
import UnifiedSchemas from 'app/schemas/UnifiedSchemas';

const serviceData = {
  title: 'Salão de Maquiagem para Noivas em São Paulo',
  description: 'Studio Amendolla é referência em maquiagem para noivas em São Paulo, oferecendo atendimento a domicílio e pacotes personalizados para o grande dia.',
  detailedDescription: `No Studio Amendolla, nossa missão é garantir que cada noiva brilhe no seu dia especial. Com atendimento personalizado na zona norte de São Paulo, 
  oferecemos serviços de maquiagem e penteados sofisticados, adaptados ao seu estilo e tema do evento. Além de um ambiente acolhedor no salão, realizamos atendimento a domicílio para maior comodidade. 
  A prévia de penteado e maquiagem é opcional, e nossos pacotes são elaborados sob consulta, garantindo um serviço exclusivo para cada cliente.`,
  image: '/images/salao-maquiagem-noivas-sao-paulo.webp',
  images: [
    '/images/salao-maquiagem-noivas-sao-paulo.webp',
    '/images/salao-maquiagem-noivas-domocilio.webp',
    '/images/salao-maquiagem-noivas-zona-norte.webp',
  ],
};

const faqData = [
  { question: 'Quais são os serviços oferecidos pelo Studio Amendolla?', answer: 'Oferecemos maquiagem para noivas, penteados sofisticados, e pacotes exclusivos para o dia da noiva.' },
  { question: 'Vocês realizam atendimento a domicílio?', answer: 'Sim, realizamos atendimento a domicílio em São Paulo, com valores adicionais sob consulta.' },
  { question: 'Posso realizar uma prévia da maquiagem e penteado?', answer: 'Sim, a prévia é opcional e permite que a noiva tenha uma ideia clara do visual final.' },
  { question: 'Como posso solicitar um orçamento?', answer: 'Entre em contato pelo WhatsApp ou telefone para solicitar um orçamento personalizado.' },
];

const SalaoMaquiagemPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Salão de Maquiagem para Noivas em São Paulo - Studio Amendolla',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-11',
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
      { name: 'Salão de Maquiagem para Noivas em São Paulo', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/salao-maquiagem-noivas-sao-paulo' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Studio Amendolla - Maquiagem para noivas em São Paulo - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
      name: `Imagem ${index + 1} de Maquiagem para Noivas no Studio Amendolla`, // Nome único para cada imagem
      datePublished: '2024-10-11', // Data de publicação
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
      <h1>Salão de Maquiagem para Noivas em São Paulo - Studio Amendolla</h1>
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
                alt={`Salão de Maquiagem para Noivas - ${currentImage + 1}`}
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
          <h2>Solicite um Orçamento para Maquiagem de Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default SalaoMaquiagemPage;
