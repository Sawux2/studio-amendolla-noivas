import React from 'react';

interface SchemaProps {
    type: string;
    name: string;
    url: string;
    priceRange?: string;
    description?: string;
    image?: string; // Nova propriedade para imagem
    video?: string; // Nova propriedade para vídeo
}

const Schema: React.FC<SchemaProps> = ({ type, name, url, priceRange, description, image, video }) => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': type,
        name,
        url,
        description,
        ...(priceRange && { offers: { '@type': 'Offer', price: priceRange } }),
        ...(image && { image }),
        ...(video && { video: { '@type': 'VideoObject', contentUrl: video } }),
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};

export default Schema;
