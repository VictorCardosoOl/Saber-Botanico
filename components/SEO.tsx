import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const baseTitle = "Saber Botânico";
  const fullTitle = title === baseTitle ? title : `${title} | ${baseTitle}`;
  const defaultDesc = "Uma aplicação de estilo de vida botânico de luxo apresentando coleções de plantas curadas, rituais de cuidado e conteúdo editorial.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
    </Helmet>
  );
};

export default SEO;