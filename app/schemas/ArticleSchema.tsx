// app/schemas/ArticleSchema.tsx
import { useEffect } from 'react';

interface ArticleProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  image: string[];
  url?: string;
  publisher?: {
    name: string;
    logo: string;
  };
}

export const ArticleSchema: React.FC<{ data: ArticleProps }> = ({ data }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      description: data.description,
      author: {
        '@type': 'Person',
        name: data.author,
      },
      datePublished: data.datePublished,
      image: data.image,
      url: data.url || 'https://www.studioamendollanoivas.com.br',
      publisher: {
        '@type': 'Organization',
        name: data.publisher?.name || 'Studio Amendolla Noivas',
        logo: {
          '@type': 'ImageObject',
          url: data.publisher?.logo || 'https://www.studioamendollanoivas.com.br/logo.png'
        }
      }
    };

    // Adiciona o schema ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'article-schema';
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById('article-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default ArticleSchema;
