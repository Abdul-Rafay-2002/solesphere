import { Wrapper, ProductCart } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';

const Products = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className='w-full md: py-20'>
			<Wrapper>
				<div className='text-center text-gray-950 max-w-[800px] m-auto pb-8'>
					<h1>Running Shoes</h1>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[25px] md:px-0 '>
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
					<ProductCart />
				</div>
			</Wrapper>
		</div>
	);
};

export default Products;
