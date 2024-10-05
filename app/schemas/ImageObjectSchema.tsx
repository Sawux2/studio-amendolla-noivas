// app/schemas/ImageObjectSchema.tsx
interface ImageObjectProps {
    url: string;
    description: string;
    width: number;
    height: number;
  }
  
  export const generateImageObjectSchema = (imageData: ImageObjectProps) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: imageData.url,
    description: imageData.description,
    width: imageData.width,
    height: imageData.height,
  });
  