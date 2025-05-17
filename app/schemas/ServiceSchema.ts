import { useEffect } from 'react';

interface ServiceProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  // Campos adicionais para melhor SEO
  image?: string[];
  url?: string;
  price?: {
    amount: number;
    currency: string;
  };
  availability?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  serviceType?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom?: string;
  }[];
}

export const ServiceSchema: React.FC<{ data: ServiceProps }> = ({ data }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      provider: {
        '@type': 'Organization',
        name: data.provider
      },
      areaServed: data.areaServed,
      ...(data.image && {
        image: data.image.map(img => 
          `https://www.studioamendollanoivas.com.br${img}`
        )
      }),
      ...(data.url && { 
        url: `https://www.studioamendollanoivas.com.br${data.url}` 
      }),
      ...(data.price && {
        offers: {
          '@type': 'Offer',
          price: data.price.amount,
          priceCurrency: data.price.currency,
          availability: data.availability || 'https://schema.org/InStock'
        }
      }),
      ...(data.aggregateRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ...data.aggregateRating
        }
      }),
      ...(data.serviceType && { serviceType: data.serviceType }),
      ...(data.offers && {
        offers: data.offers.map(offer => ({
          '@type': 'Offer',
          ...offer,
          url: `https://www.studioamendollanoivas.com.br${data.url}`
        }))
      })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'service-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('service-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default ServiceSchema;