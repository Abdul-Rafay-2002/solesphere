import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Wrapper } from '.';

const HeroBanner = () => {
	return (
		<div className='Herobanner relative bg-gray-950 text-gray-50 pb-4'>
			<Wrapper className='px-0 md:px-0'>
				<Carousel
					dynamicHeight={true}
					showArrows={false}
					showStatus={false}
					autoPlay={true}
					infiniteLoop={true}
					autoFocus={true}
					showIndicators={false}>
					<div className='h-[450px] relative bg-gray-800 rounded-b-lg'>
						<img src='slide1.png' className='w-full h-full object-contain' />
						<div className='rounded-t-lg px-[15px] md:px-[40px] py-[10px] font-medium md:py[25px] bg-gray-950 text-Sky-50 absolute left-0 bottom-[0px] right-0 table m-auto uppercase cursor-pointer hover:transition-all hover:bg-sky-500'>
							Shop now
						</div>
					</div>
					<div className='h-[450px] relative bg-gray-900 rounded-b-lg'>
						<img src='slide2.png' className='w-full h-full object-contain' />
						<div className='rounded-t-lg px-[15px] md:px-[40px] py-[10px] font-medium md:py[25px] bg-gray-950 text-Sky-50 absolute left-0 bottom-[0px] right-0 table m-auto uppercase cursor-pointer hover:transition-all hover:bg-sky-500'>
							Shop now
						</div>
					</div>
					<div className='h-[450px] relative bg-gray-900 rounded-b-lg'>
						<img src='slide3.png' className='w-full h-full object-contain' />
						<div className='rounded-t-lg px-[15px] md:px-[40px] py-[10px] font-medium md:py[25px] bg-gray-950 text-Sky-50 absolute left-0 bottom-[0px] right-0 table m-auto uppercase cursor-pointer hover:transition-all hover:bg-sky-500'>
							Shop now
						</div>
					</div>
				</Carousel>
			</Wrapper>
		</div>
	);
};

export default HeroBanner;
