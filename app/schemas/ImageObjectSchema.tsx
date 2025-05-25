
import { useEffect } from 'react';

interface ImageObjectProps {
  url: string;
  description: string;
  width: number;
  height: number;
  // Campos adicionais para melhor SEO
  name?: string;
  caption?: string;
  representativeOfPage?: boolean;
  license?: string;
  creator?: {
    name: string;
    url?: string;
  };
  datePublished?: string;
}

export const ImageObjectSchema: React.FC<{ data: ImageObjectProps }> = ({ data }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `https://www.studioamendollanoivas.com.br${data.url}`,
      description: data.description,
      width: data.width,
      height: data.height,
      name: data.name || data.description,
      caption: data.caption,
      representativeOfPage: data.representativeOfPage || true,
      license: data.license || 'https://creativecommons.org/licenses/by/4.0/',
      creator: {
        '@type': 'Organization',
        name: data.creator?.name || 'Studio Amendolla Noivas',
        url: data.creator?.url || 'https://www.studioamendollanoivas.com.br'
      },
      datePublished: data.datePublished || new Date().toISOString(),
      encodingFormat: data.url.split('.').pop()?.toLowerCase() === 'webp' ? 'image/webp' : 'image/jpeg'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'image-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('image-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default ImageObjectSchema;
