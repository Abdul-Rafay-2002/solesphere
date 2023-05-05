import { Product, Wrapper, ProductCart } from '@/components';
import { client } from '@/lib/client';
import React from 'react';


const index = ({ productData }) => {
	return (
		<div className='my-20'>
			<Wrapper>
				<div className='text-center text-gray-950 max-w-[800px] m-auto pb-8'>
					<h2>Our Products</h2>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[25px] md:px-0 '>
					{productData?.reverse().map((product) => <ProductCart key={product._id} product={product} />)}
				</div>
			</Wrapper>
		</div>
	);
};
export const getServerSideProps = async () => {
	const productQuery = '*[_type == "product"]';
	const productData = await client.fetch(productQuery);
	return {
		props: {
			productData,
		},
	};
};
export default index;
