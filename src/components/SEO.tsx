import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  jsonLd?: Record<string, any>;
  /** Additional JSON-LD schemas (e.g., FAQPage) injected as separate script blocks */
  additionalSchemas?: Record<string, any>[];
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, jsonLd, additionalSchemas, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      {additionalSchemas?.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
