"use client";

import Image from 'next/image';
import { useState } from 'react';
import OrcamentoForm from 'app/components/OrcamentoForm';
import styles from 'app/styles/PaginaSeo.module.css';
import CanonicalURL from 'app/components/CanonicalURL'; // Componente para URL canônica
import UnifiedSchemas from 'app/schemas/UnifiedSchemas'; // Componente unificado de schemas

const serviceData = {
  title: 'Combos para Madrinhas',
  description: 'Garanta que suas madrinhas estejam deslumbrantes com os combos exclusivos do Studio Amendolla. Inclui maquiagem e penteados personalizados para um visual impecável.',
  detailedDescription: `No Studio Amendolla, oferecemos combos especiais para madrinhas que buscam um visual harmonioso e elegante no grande dia da noiva. 
  Cada pacote inclui maquiagem de longa duração, penteados sofisticados e um atendimento exclusivo para garantir que cada madrinha se sinta única. Escolha entre nossos pacotes *Essencial*, *Premium* e *Luxo*, com opções para todos os estilos e necessidades.`,
  image: '/images/combos-para-madrinhas.webp',
  images: [
    '/images/combos-para-madrinhas-essencial.webp',
    '/images/combos-para-madrinhas-premium.webp',
    '/images/combos-para-madrinhas-luxo.webp',
  ],
};

const faqData = [
  { question: 'O que está incluído nos combos para madrinhas?', answer: 'Os combos incluem maquiagem profissional e penteado personalizado para cada madrinha.' },
  { question: 'Qual o valor dos combos para madrinhas?', answer: 'Os valores variam conforme o pacote escolhido, com preços a partir de R$170 por madrinha.' },
  { question: 'Vocês fazem atendimento a domicílio?', answer: 'Sim, realizamos atendimento a domicílio para maior comodidade das madrinhas, com valores adicionais sob consulta.' },
  { question: 'Como agendar um horário para as madrinhas?', answer: 'Entre em contato pelo WhatsApp ou telefone para verificar a disponibilidade e realizar seu agendamento.' },
];

const CombosMadrinhasPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % serviceData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + serviceData.images.length) % serviceData.images.length);
  };

  const pageData = {
    article: {
      headline: 'Combos para Madrinhas no Studio Amendolla',
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
      { name: 'Combos para Madrinhas', url: 'https://www.studioamendollanoivas.com.br/paginaSeo/combos-para-madrinhas' },
    ],
    images: serviceData.images.map((image, index) => ({
      url: `https://www.studioamendollanoivas.com.br${image}`,
      description: `Combos para madrinhas no Studio Amendolla - ${image.split('-')[2].replace('.webp', '')}`,
      width: 600,
      height: 400,
      name: `Imagem do combo ${index + 1}`, // Adicionando o nome da imagem
      datePublished: '2024-10-07', // Adicionando uma data fixa ou dinâmica
      author: 'Studio Amendolla', // Adicionando o autor da imagem
      publisher: 'Studio Amendolla', // Adicionando o publisher
    })),
  };

  return (
    <div className={styles.servicePage}>
      <h1>Combos para Madrinhas - Studio Amendolla Noivas</h1>
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
                alt={`Combos para Madrinhas - ${currentImage + 1}`}
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
            <h2>Perguntas Frequentes sobre Combos para Madrinhas</h2>
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
          <h2>Solicite um Orçamento para Combos de Madrinhas</h2>
          <OrcamentoForm />
        </div>
      </div>
    </div>
  );
};

export default CombosMadrinhasPage;
