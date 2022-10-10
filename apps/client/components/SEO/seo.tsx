import Head from "next/head";
import { FC } from "react";

type SEOProps = {
	title: string;
	description: string;
	image?: string;
};

const SEO: FC<SEOProps> = ({ title, description, image }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href={image || "/favicon.ico"} />
		</Head>
	);
};

export { SEO };
