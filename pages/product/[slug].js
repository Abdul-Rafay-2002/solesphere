import { Wrapper, ProductDetailsCarousel } from '@/components';
import React from 'react';

const ProductDetail = () => {
	return (
		<div className='w-full md:py-20'>
			<Wrapper>
				<div className='flex items-center flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[80px] '>
					<div className='w-full md:w-auto flex-[1.5] max-w-[550px] lg:max-full max-auto lg:mx-0'>
						<ProductDetailsCarousel />
					</div>
					<div className='flex-[1] py-3'>right</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default ProductDetail;
