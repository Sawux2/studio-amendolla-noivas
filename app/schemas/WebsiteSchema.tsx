import React, { useEffect } from 'react';

interface WebsiteProps {
  name: string;
  url: string;
  description?: string;
  inLanguage?: string;
  keywords?: string[];
  sameAs?: string[];
  searchTemplate?: string;
}

export const WebsiteSchema: React.FC<{ data?: WebsiteProps }> = ({ data }) => {
  useEffect(() => {
    const defaultData = {
      name: 'Studio Amendolla Noivas',
      url: 'https://www.studioamendollanoivas.com.br',
      description: 'Especialistas em maquiagem e penteados para noivas em São Paulo',
      inLanguage: 'pt-BR',
      keywords: ['maquiagem noiva', 'penteado noiva', 'São Paulo'],
      searchTemplate: 'https://www.studioamendollanoivas.com.br/search?q={search_term_string}'
    };

    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data?.name || defaultData.name,
      url: data?.url || defaultData.url,
      description: data?.description || defaultData.description,
      inLanguage: data?.inLanguage || defaultData.inLanguage,
      ...(data?.keywords && { keywords: data.keywords }),
      ...(data?.sameAs && { sameAs: data.sameAs }),
      potentialAction: {
        '@type': 'SearchAction',
        target: data?.searchTemplate || defaultData.searchTemplate,
        'query-input': 'required name=search_term_string'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(websiteData);
    script.id = 'website-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('website-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default WebsiteSchema;
