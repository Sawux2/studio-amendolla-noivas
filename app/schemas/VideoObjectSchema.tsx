import React from 'react';
import Script from 'next/script';

interface VideoSchemaProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
}

const VideoSchema: React.FC<VideoSchemaProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  uploadDate,
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: videoUrl,
    embedUrl: videoUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Portão 7 Pacaembu Eventos',
    },
  };

  return (
    <Script
      id="video-schema-script" // Adicionando um ID único ao script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default VideoSchema;