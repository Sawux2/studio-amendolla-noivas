"use client"; // Indica que este é um Client Component

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Penteados para Noivas em São Paulo',
  description: 'Penteados para noivas que buscam um visual elegante e sofisticado para o grande dia, realizados por profissionais experientes na zona norte de São Paulo.',
  detailedDescription: `No Studio Amendolla, somos referência em penteados para noivas na zona norte de São Paulo. 
  Oferecemos penteados clássicos, modernos e personalizados para realçar a beleza de cada noiva. 
  Nosso atendimento é especializado, garantindo que cada detalhe do penteado esteja perfeito para o seu dia especial. 
  Fazemos atendimento a domicílio, para maior conforto da noiva, com valores sob consulta. 
  A prévia de penteado e maquiagem é opcional, permitindo que a noiva visualize o resultado antes do grande dia.`,
  image: '/images/penteados-noivas-personalizados.webp',
  images: [    
    '/images/penteados-noivas-modernos.webp',
    '/images/penteados-noivas-personalizados.webp',
  ],
};

const faqData = [
  { question: 'Quais tipos de penteados para noivas vocês oferecem?', answer: 'Oferecemos penteados clássicos, modernos e personalizados para noivas, sempre de acordo com o estilo desejado.' },
  { question: 'Vocês realizam atendimento a domicílio?', answer: 'Sim, fazemos atendimento a domicílio na zona norte de São Paulo, garantindo conforto e comodidade. Valores adicionais são sob consulta.' },
  { question: 'É possível fazer uma prévia do penteado?', answer: 'Sim, a prévia de penteado e maquiagem é opcional, permitindo que a noiva visualize o resultado antes do grande dia.' },
  { question: 'Como agendar um horário para penteado de noiva?', answer: 'Entre em contato pelo WhatsApp ou telefone para verificar a disponibilidade e realizar seu agendamento.' },
];

const PenteadosNoivasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Penteados para Noivas - Studio Amendolla em São Paulo',
      description: serviceData.description,
      author: 'Priscila Amendolla',
      datePublished: '2024-10-12',
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
      { name: 'Penteados para Noivas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/penteados-noivas' },
    ],
    images: serviceData.images.map((image) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Penteados para noivas no Studio Amendolla - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Penteados para Noivas - Studio Amendolla Noivas em São Paulo</h1>
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
                alt={`Penteados para Noivas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Penteados para Noivas</h2>
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
          <h2>Solicite um Orçamento para Penteados de Noivas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PenteadosNoivasPage;
