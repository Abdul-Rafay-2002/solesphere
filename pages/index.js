import { HeroBanner, Product } from '@/components';
import { client } from '../lib/client';
import React from 'react';

const Home = ({ heroData }) => {
	return (
		<main className=''>
			<HeroBanner heroData={heroData} />
			<Product />
		</main>
	)
}

export const getServerSideProps = async () => {
	const heroQuery = '*[_type == "hero"]';
	const heroData = await client.fetch(heroQuery);
	return {
		props: {
			heroData,
		},
	};
};

export default Home;
