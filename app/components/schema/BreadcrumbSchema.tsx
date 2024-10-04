import React from 'react';

interface Breadcrumb {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    breadcrumbs: Breadcrumb[];
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ breadcrumbs }) => {
    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
        </script>
    );
};

export default BreadcrumbSchema;
