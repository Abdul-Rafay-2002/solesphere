import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCart } from '.';

const RealtedProduct = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 520 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 520, min: 0 },
			items: 1,
		},
	};
	return (
		<div>
			<h3>Realted Products: </h3>
			<Carousel
				containerClass=''
				infinite={true}
				draggable={true}
				swipeable={false}
				autoPlaySpeed={1000}
				customTransition='all .5'
				removeArrowOnDeviceType={['mobile']}
				itemClass='px-[5px] py-[15px] relative inline-block'
				responsive={responsive}>
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
			</Carousel>
		</div>
	);
};

export default RealtedProduct;
