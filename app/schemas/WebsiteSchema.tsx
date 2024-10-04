import React from 'react';

const WebsiteSchema = () => {
    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Studio Amendolla Noivas',
        url: 'https://www.studioamendollanoivas.com.br',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.studioamendollanoivas.com.br/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(websiteData)}
        </script>
    );
};

export default WebsiteSchema;
