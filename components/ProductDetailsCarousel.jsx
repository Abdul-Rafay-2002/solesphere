import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { urlFor } from '@/lib/client';


const ProductDetailsCarousel = ({ images }) => {
	return (
		<div className='w-full sticky max-w-[1200px] max-auto top-[50px]'>
			<Carousel
				className='productCarousel'
				showArrows={false}
				showStatus={false}
				infiniteLoop={true}
				autoFocus={true}
				showIndicators={false}
				thumbWidth={65}>
				{images.map((image, i) => (
					<img className='w-full h-96 object-contain' src={urlFor(image && image.asset && image.asset._ref)} alt='feature-images' key={i}/>
				))}
				
			</Carousel>
		</div>
	);
};

export default ProductDetailsCarousel;
