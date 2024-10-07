// app/schemas/FAQSchema.tsx
interface FAQItem {
    question: string;
    answer: string;
  }
  
  export const generateFAQSchema = (faqItems: FAQItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });
  