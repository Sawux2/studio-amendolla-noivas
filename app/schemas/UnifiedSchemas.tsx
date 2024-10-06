import React from 'react';

// Tipos para cada schema (exemplo simplificado)
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

// Interface para o conjunto de dados da página (pageData)
interface PageData {
  article?: ArticleProps;
  faq?: FAQItem[];
  services?: ServiceItem[];
  breadcrumb?: Breadcrumb[];
  image?: ImageObjectProps;
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

export const generateImageObjectSchema = (imageData: ImageObjectProps) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: imageData.url,
  description: imageData.description,
  width: imageData.width,
  height: imageData.height,
});

// Schema Component (to render in your pages)
const UnifiedSchemas: React.FC<{ pageData: PageData }> = ({ pageData }) => {
  const schemaData = {
    article: pageData.article ? generateArticleSchema(pageData.article) : null,
    breadcrumb: pageData.breadcrumb ? generateBreadcrumbSchema(pageData.breadcrumb) : null,
    faq: pageData.faq ? generateFAQSchema(pageData.faq) : null,
    services: pageData.services ? generateServiceSchema(pageData.services) : null,
    imageObject: pageData.image ? generateImageObjectSchema(pageData.image) : null,
  };

  return (
    <>
      {Object.values(schemaData).map((schema, index) =>
        schema ? (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ) : null
      )}
    </>
  );
};

export default UnifiedSchemas;
