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

export interface ImageObjectProps {
  url: string;
  description: string;
  width: number;
  height: number;
  name: string;
  datePublished: string;
}

interface PageData {
  article?: ArticleProps;
  faq?: FAQItem[];
  services?: ServiceItem[];
  breadcrumb?: Breadcrumb[];
  images?: ImageObjectProps[];
}

// Geradores de schema (mantidos)
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
  serviceType: services.length > 1
    ? services.map(service => service.title).join(", ")
    : services[0].title,
  provider: {
    "@type": "Organization",
    "name": "Studio Amendolla Noivas",
    "url": "https://www.studioamendollanoivas.com.br",
  },
  offers: services.map(service => ({
    "@type": "Offer",
    "description": service.description,
    "image": service.image || "https://www.studioamendollanoivas.com.br/images/dia-da-noiva-1.webp", // Imagem padrão se não houver
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

export const generateImageObjectSchema = (images: ImageObjectProps[]) =>
  images.map(imageData => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: imageData.url,
    url: imageData.url,
    width: imageData.width,
    height: imageData.height,
    name: imageData.name,
    description: imageData.description,
    author: {
      '@type': 'Organization',
      name: 'Studio Amendolla Noivas',
    },
    datePublished: imageData.datePublished,
    inLanguage: 'pt-BR',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    publisher: {
      '@type': 'Organization',
      name: 'Studio Amendolla Noivas',
      logo: {
        '@type': 'ImageObject',
        url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.92451a70.png&w=128&q=75',
      },
    },
    creditText: 'Fotografia por Studio Amendolla Noivas',
    copyrightNotice: '© Studio Amendolla Noivas 2024',
    acquireLicensePage: 'https://www.studioamendollanoivas.com.br',
    creator: {
      '@type': 'Organization',
      name: 'Studio Amendolla Noivas',
    },
  }));

// Componente que adiciona schemas ao head
const UnifiedSchemas: React.FC<{ pageData: PageData }> = ({ pageData }) => {
  useEffect(() => {
    // Filtrando palavras comuns para keywords
    const stopWords = ['de', 'para', 'com', 'em', 'a', 'o', 'na', 'no']; // Exemplo de palavras comuns
    const keywordsContent = pageData.article?.headline
      .replace(/,|\./g, '')
      .split(' ')
      .filter(word => !stopWords.includes(word.toLowerCase()))
      .join(', ') || '';

    const schemaData = {
      article: pageData.article && generateArticleSchema(pageData.article),
      breadcrumb: pageData.breadcrumb && generateBreadcrumbSchema(pageData.breadcrumb),
      faq: pageData.faq && generateFAQSchema(pageData.faq),
      services: pageData.services && generateServiceSchema(pageData.services),
      images: pageData.images && generateImageObjectSchema(pageData.images),
    };

    // Adicionar schemas ao <head>
    Object.values(schemaData).forEach((schema, index) => {
      if (schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        script.id = `schema-${index}`;
        document.head.appendChild(script);
      }
    });

    // Adicionar metas dinâmicas ao <head>
    if (pageData.article) {
      document.title = pageData.article.headline;
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      
      const descriptionContent = pageData.article.description;

      if (metaDescription) {
        metaDescription.setAttribute('content', descriptionContent);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = descriptionContent;
        document.head.appendChild(newMetaDescription);
      }

      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywordsContent);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywordsContent;
        document.head.appendChild(newMetaKeywords);
      }
    }

    // Cleanup para remover scripts ao desmontar o componente
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
