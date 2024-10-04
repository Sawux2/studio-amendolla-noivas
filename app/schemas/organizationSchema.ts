// app/schemas/organizationSchema.ts
export interface OrganizationSchema {
  name: string;
  url: string;
  description: string;
  logoUrl: string;
  telephone: string;
  contactType: string;
  areaServed: string;
}

export const generateOrganizationSchema = (data: OrganizationSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logoUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data.telephone,
      contactType: data.contactType,
      areaServed: data.areaServed,
    },
    description: data.description,
  };
};
