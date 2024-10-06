import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

interface PageProps {
  content: string;
}

export default function DynamicPage({ content }: PageProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paginaSeoDir = path.join(process.cwd(), 'pages/paginaSeo');
  const slugs = fs.readdirSync(paginaSeoDir).map((file) => {
    return {
      params: {
        slug: file.replace('.tsx', ''),
      },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'pages/paginaSeo', `${slug}.tsx`);
  const content = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      content,
    },
  };
};
