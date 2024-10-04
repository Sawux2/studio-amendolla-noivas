import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    url: string;
    image?: string;
}

const SEO = ({ title, description, keywords, url, image }: SEOProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}
        </Head>
    );
};

export default SEO;
