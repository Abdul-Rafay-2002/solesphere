import { HeroBanner, Product } from '@/components';
import { client } from '../lib/client';
import React from 'react';

const Home = ({ heroData, productData }) => {
	return (
		<main className=''>
			<HeroBanner heroData={heroData} />
			<Product productData={productData} />
		</main>
	);
};

export const getServerSideProps = async () => {
	const heroQuery = '*[_type == "hero"]';
	const heroData = await client.fetch(heroQuery);
	
	const productQuery = '*[_type == "product"]';
	const productData = await client.fetch(productQuery);
	return {
		props: {
			heroData,
			productData,
		},
	};
};

export default Home;
