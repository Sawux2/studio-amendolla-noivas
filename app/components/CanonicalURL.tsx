import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { buildAbsoluteUrl } from '@/lib/site-config';

const CanonicalURL = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = buildAbsoluteUrl(`${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`);

  React.useEffect(() => {
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', currentUrl);
      document.head.appendChild(link);
    }
  }, [currentUrl]);

  return null;
};

// Envolvendo com Suspense para garantir o suporte à SSR
const CanonicalURLWithSuspense = () => (
  <Suspense fallback={null}>
    <CanonicalURL />
  </Suspense>
);

export default CanonicalURLWithSuspense;
