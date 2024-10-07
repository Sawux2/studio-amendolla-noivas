import React from 'react';

interface Address {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
}

interface SchemaProps {
    type: string;
    name: string;
    description: string;
    url: string;
    address?: Address; // Adicionando a propriedade address como opcional
    telephone?: string;
    openingHours?: string;
    sameAs?: string[];
    image?: string; // Adicionando uma propriedade opcional para a imagem
    priceRange?: string; // Adicionando a propriedade priceRange
}

const Schema: React.FC<SchemaProps> = ({ 
    type, 
    name, 
    description, 
    url, 
    address, 
    telephone, 
    openingHours, 
    sameAs, 
    image, 
    priceRange 
}) => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': type,
        name,
        description,
        url,
        address: address ? {
            '@type': 'PostalAddress',
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        } : undefined,
        telephone,
        openingHours,
        sameAs,
        image,
        priceRange, // Adicionando priceRange ao objeto schemaData
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};

export default Schema;
