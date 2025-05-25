"use client";

import { useEffect } from 'react';

interface ImageObjectProps {
  url: string;
  contentUrl: string; // Adicionar esta propriedade
  description: string;
  width: number;
  height: number;
  name: string;
  caption: string;
}

const ImageObjectSchema = ({ data }: { data: ImageObjectProps }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: data.contentUrl, // Usar a nova propriedade
      url: data.url,
      width: data.width,
      height: data.height,
      name: data.name,
      caption: data.caption,
      description: data.description
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export default ImageObjectSchema;
