"use client";

import React, { useEffect } from 'react';

// Tipos para cada schema
interface ArticleProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface ImageObjectProps {
  url: string;
  description: string;
  width: number;
  height: number;
}

interface PageData {
  article?: ArticleProps;
  faq?: FAQItem[];
  services?: ServiceItem[];
  breadcrumb?: Breadcrumb[];
  images?: ImageObjectProps[]; // Atualizado para lidar com múltiplas imagens
}

// Geradores de schema
export const generateArticleSchema = (articleData: ArticleProps) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: articleData.headline,
  description: articleData.description,
  author: {
    '@type': 'Person',
    name: articleData.author,
  },
  datePublished: articleData.datePublished,
  image: articleData.image,
});

export const generateFAQSchema = (faqItems: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const generateServiceSchema = (services: ServiceItem[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: services.map(service => service.title).join(', '),
  provider: {
    "@type": "Organization",
    "name": "Studio Amendolla Noivas",
    "url": "https://www.studioamendollanoivas.com.br",
  },
  offers: services.map(service => ({
    "@type": "Offer",
    "description": service.description,
    "image": service.image,
    "priceCurrency": "BRL",
    "price": "Consultar",
    "url": "https://www.studioamendollanoivas.com.br/servicos"
  })),
});

export const generateBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

// Função para gerar múltiplos ImageObject
export const generateImageObjectSchema = (images: ImageObjectProps[]) =>
  images.map((imageData) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: imageData.url,
    description: imageData.description,
    width: imageData.width,
    height: imageData.height,
  }));

// Componente que adiciona schemas ao head
const UnifiedSchemas: React.FC<{ pageData: PageData }> = ({ pageData }) => {
  useEffect(() => {
    const schemaData = {
      article: pageData.article ? generateArticleSchema(pageData.article) : null,
      breadcrumb: pageData.breadcrumb ? generateBreadcrumbSchema(pageData.breadcrumb) : null,
      faq: pageData.faq ? generateFAQSchema(pageData.faq) : null,
      services: pageData.services ? generateServiceSchema(pageData.services) : null,
      images: pageData.images ? generateImageObjectSchema(pageData.images) : null,
    };

    Object.values(schemaData).forEach((schema, index) => {
      if (schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        script.id = `schema-${index}`;
        document.head.appendChild(script);
      }
    });

    return () => {
      Object.keys(schemaData).forEach((_, index) => {
        const existingScript = document.getElementById(`schema-${index}`);
        if (existingScript) existingScript.remove();
      });
    };
  }, [pageData]);

  return null;
};

export default UnifiedSchemas;
