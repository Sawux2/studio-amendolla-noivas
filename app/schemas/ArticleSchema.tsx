// app/schemas/ArticleSchema.tsx
interface ArticleProps {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    image: string;
  }
  
  export const generateArticleSchema = (articleData: ArticleProps) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.headline,
    description: articleData.description,
    author: {
      '@type': 'Person',
      name: articleData.author,
    },
    datePublished: articleData.datePublished,
    image: articleData.image,
  });
  