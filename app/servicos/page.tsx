"use client"; // Indica que este é um Client Component

import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import Link from "next/link"; // Importando o componente Link do Next.js
import styles from "../styles/Services.module.css"; // Atualize o caminho da importação
import UnifiedSchemas from "app/schemas/UnifiedSchemas"; // Componente unificado de schemas
import CanonicalURL from 'app/components/CanonicalURL';

const servicesData = [
  {
    title: "Maquiagem Social",
    description: "Realce sua beleza natural com nossa maquiagem social.",
    image: "/images/maquiagem-social.webp",
    alt: "Serviço de Maquiagem Social",
    link: "/maquiagem-social",
  },
  {
    title: "Pacotes para Noivas",
    description: "Maquiagem e Penteados para Noivas.",
    image: "/images/penteado-para-noivas.webp",
    alt: "Pacotes para Noivas",
    link: "/pacotes-noivas",
  },
  {
    title: "Combo para Madrinhas",
    description: "Maquiagem blindada e Penteados para todas as suas acompanhantes.",
    image: "/images/maquiagem-para-madrinhas.webp",
    alt: "Serviço de Maquiagem para Madrinhas",
    link: "/combo-madrinhas",
  },
  {
    title: "Nosso Espaço",
    description: "Contamos com um espaço exclusivo para atender Noivas e Madrinhas.",
    image: "/images/nosso-espaco-sala9-servicos.webp",
    alt: "Nosso Espaço para Noivas e Madrinhas",
    link: "/nosso-espaco",
  },
  {
    title: "Dia da Noiva",
    description: "Pacote completo para noivas, incluindo maquiagem, penteado e muito mais para o grande dia.",
    image: "/images/dia-da-noiva.webp",
    alt: "Pacote de Dia da Noiva",
    link: "/dia-da-noiva",
  },
  {
    title: "SPA",
    description: "Relaxe e prepare-se para o grande dia com nossa massagem relaxante.",
    image: "/images/massagem-relaxante.webp",
    alt: "Serviço de Massagem Relaxante",
    link: "/spa",
  },
];

const Services = () => {
  const pageData = {
    services: servicesData.map((service) => ({
      title: service.title,
      description: service.description,
      image: `https://www.studioamendollanoivas.com.br${service.image}`,
    })),
    images: servicesData.map((service, index) => ({
      url: `https://www.studioamendollanoivas.com.br${service.image}`,
      description: service.description,
      width: 400,
      height: 300,
      name: `Imagem ${index + 1} do serviço ${service.title}`, // Nome único para cada imagem
      datePublished: '2024-10-17', // Ajuste conforme necessário
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
    breadcrumb: [
      { name: 'Home', url: 'https://www.studioamendollanoivas.com.br' },
      { name: 'Serviços', url: 'https://www.studioamendollanoivas.com.br/servicos' },
    ],
  };

  return (
    <div className={styles.services}>
      <CanonicalURL />
      <UnifiedSchemas pageData={pageData} />
      <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
      <p className={styles.servicesDescription}>
        Descubra como podemos ajudar a tornar seu dia especial ainda mais perfeito.
      </p>
      <div className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <Link key={index} href={service.link} passHref legacyBehavior>
            <a className={styles.serviceLink}>
              <div className={styles.serviceCard}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                  quality={80}
                />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
