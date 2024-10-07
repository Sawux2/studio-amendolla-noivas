// app/schemas/ServiceSchema.ts
interface ServiceItem {
    title: string;
    description: string;
    image: string;
  }
  
  export const generateServiceSchema = (services: ServiceItem[]) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: services.map(service => service.title).join(', '),
    provider: {
      "@type": "Organization",
      "name": "Studio Amendolla Noivas",
      "url": "https://www.studioamendollanoivas.com.br",
    },
    offers: services.map(service => ({
      "@type": "Offer",
      "description": service.description,
      "image": service.image,
      "priceCurrency": "BRL",
      "price": "Consultar",
      "url": "https://www.studioamendollanoivas.com.br/servicos"
    })),
  });
  