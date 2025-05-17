import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<{ data: BreadcrumbProps }> = ({ data }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.items.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        item: `https://www.studioamendollanoivas.com.br${item.item}`
      }))
    };

    // Adiciona o schema ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'breadcrumb-schema';
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};

export default BreadcrumbSchema;