// app/schemas/organizationSchema.ts
import { useEffect } from 'react';

export interface OrganizationSchema {
  name: string;
  url: string;
  description: string;
  logoUrl: string;
  telephone: string;
  contactType: string;
  areaServed: string;
  // Campos adicionais para melhor SEO
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  priceRange?: string;
}

export const OrganizationSchema: React.FC<{ data: OrganizationSchema }> = ({ data }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      url: data.url,
      logo: {
        '@type': 'ImageObject',
        url: `https://www.studioamendollanoivas.com.br${data.logoUrl}`,
        width: 112,
        height: 112,
        caption: `Logo ${data.name}`
      },
      description: data.description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.telephone,
        contactType: data.contactType,
        areaServed: data.areaServed,
        availableLanguage: ['Portuguese']
      },
      ...(data.sameAs && { sameAs: data.sameAs }),
      ...(data.address && {
        address: {
          '@type': 'PostalAddress',
          ...data.address
        }
      }),
      ...(data.openingHours && { openingHoursSpecification: data.openingHours }),
      ...(data.priceRange && { priceRange: data.priceRange })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'organization-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('organization-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default OrganizationSchema;
