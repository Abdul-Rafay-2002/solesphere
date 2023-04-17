import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
	return (
		<div className='w-full sticky max-w-[1200px] max-auto top-[50px]'>
			<Carousel
				className='productCarousel'
				showArrows={false}
				showStatus={false}
				infiniteLoop={true}
				autoFocus={true}
				showIndicators={false}
                thumbWidth={65}
                >
                    {/* Paste Product Images... */}
                </Carousel>
		</div>
	);
};

export default ProductDetailsCarousel;
