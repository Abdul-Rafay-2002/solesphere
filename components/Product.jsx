import React from 'react';
import { ProductCart, Wrapper } from '.';

const Product = () => {
	return (
		<div id='Product' className='py-20 bg-gray-950'>
			<Wrapper>
				<div className='text-center text-gray-100 max-w-[800px] m-auto pb-8'>
					<h2>Quality Shoes that Last: Shop Our Collection Today</h2>
					<p>
						Each pair of shoes is crafted with care and attention to detail,
						ensuring both comfort and durability. With our selection, you'll
						step out in style no matter where you go.
					</p>
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

export default Product;
