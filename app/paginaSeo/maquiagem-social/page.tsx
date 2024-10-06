'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/PaginaSeo.module.css'; // Importando o CSS unificado para páginas SEO

// Importando os schemas unificados
import { generateArticleSchema, generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '../../schemas/UnifiedSchemas';

const MaquiagemSocialPage = () => {
  useEffect(() => {
    // Dados para os schemas
    const articleData = {
      headline: 'Maquiagem Social no Studio Amendolla Noivas',
      description: 'Realce sua beleza com a maquiagem social oferecida pelo Studio Amendolla.',
      author: 'Priscila Amendolla',
      datePublished: '2024-10-05',
      image: '/images/maquiagem-social.webp',
    };

    const faqData = [
      { question: 'Quanto tempo dura a maquiagem?', answer: 'Dura de 8 a 12 horas.' },
      { question: 'Qual o preço?', answer: 'A partir de R$150.' },
    ];

    const serviceData = [
      {
        title: 'Maquiagem Social',
        description: 'Realce sua beleza natural com nossa maquiagem social.',
        image: '/images/maquiagem-social.webp',
      }
    ];

    const breadcrumbData = [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Maquiagem Social', url: 'https://www.studioamendollanoivas.com.br/maquiagem-social' },
    ];

    // Gera os schemas
    const schemas = [
      generateArticleSchema(articleData),
      generateFAQSchema(faqData),
      generateServiceSchema(serviceData),
      generateBreadcrumbSchema(breadcrumbData),
    ];

    // Adiciona os schemas no <head> para SEO
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Remove os schemas ao desmontar o componente
      document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
        script.remove();
      });
    };
  }, []);

  return (
    <div className={styles.servicePage}>
      <h1>Maquiagem Social</h1>
      <div className={styles.serviceContent}>
        <div className={styles.serviceDetails}>
          <p>Realce sua beleza natural com nossa <strong>Maquiagem Social</strong>. Ideal para eventos especiais!</p>
          <p>Profissionais altamente qualificados garantem que você fique impecável em qualquer ocasião.</p>
          <p><strong>Faixa de Preço:</strong> R$150 - R$300</p>
        </div>
        <div className={styles.serviceImage}>
          <Image
            src="/images/maquiagem-social.webp"
            alt="Maquiagem Social"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* Seção de FAQ */}
      <div className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <ul>
          <li><strong>Quanto tempo dura a maquiagem?</strong> Dura de 8 a 12 horas.</li>
          <li><strong>Qual o preço?</strong> A partir de R$150.</li>
        </ul>
      </div>

      {/* Seção de formulário de orçamento */}
      <div className={styles.formSection}>
        <h2>Solicite um Orçamento</h2>
        {/* Inclua o formulário de orçamento aqui */}
      </div>
    </div>
  );
};

export default MaquiagemSocialPage;
