// app/schemas/VideoObjectSchema.tsx
interface VideoObjectProps {
    url: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
  }
  
  export const generateVideoObjectSchema = (videoData: VideoObjectProps) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    contentUrl: videoData.url,
    description: videoData.description,
    thumbnailUrl: videoData.thumbnailUrl,
    uploadDate: videoData.uploadDate,
  });
  