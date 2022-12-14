/* eslint-disable react/require-default-props */
import { FC } from 'react';

import Head from 'next/head';

type SEOProps = {
  title: string,
  description: string,
  image?: string,
};

const SEO: FC<SEOProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image || '/favicon.ico'} />
    </Head>
  );
};

export { SEO };
