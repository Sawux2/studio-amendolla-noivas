// app/schemas/BreadcrumbSchema.tsx
interface Breadcrumb {
    name: string;
    url: string;
  }
  
  export const generateBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  });
  