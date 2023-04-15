import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Wrapper from './Wrapper';

const Footer = () => {
	return (
		<footer className='bg-sky-700 text-white pt-14 pb-3'>
			<Wrapper className='flex justify-between flex-col md:flex-row gap-[50px] md:gap-0'>
				{/* LEFT START */}
				<div className='flex gap-[50px] md:gap-[25px] lg:gap-[10px] flex-col md:flex-row w-full md:w-[60%]'>
					{/* <div className='md:w-28'>
						<Link href='/'><img src='/adidas.png' /></Link>
					</div> */}


					{/* NORMAL MENU START */}
					<div className='flex gap-[50px] md:gap-[25px] lg:gap-[60px] shrink-0  w-full md:w-[80%]'>
						{/* MENU START */}
						<div className='flex flex-col gap-3 w-[50%]'>
							<div className='font-oswald font-medium capitalize text-sm'>
								get help
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Order Status
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Delivery
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Returns
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Payment Options
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Contact Us
							</div>
						</div>
						{/* MENU END */}

						{/* MENU START */}
						<div className='flex flex-col gap-3 md:w-[50%] w-[50%]'>
							<div className='font-oswald font-medium capitalize text-sm'>
								About nike
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								News
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Careers
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Investors
							</div>
							<div className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
								Sustainability
							</div>
						</div>
						{/* MENU END */}
					</div>
					{/* MENU START */}
					<div className='flex flex-col gap-3 shrink-0 w-[50%]'>
						<div className='font-oswald font-medium capitalize text-sm cursor-pointer'>
							Find a store
						</div>
						<div className='font-oswald font-medium capitalize text-sm cursor-pointer'>
							become a partner
						</div>
						<div className='font-oswald font-medium capitalize text-sm cursor-pointer'>
							sign up for email
						</div>
					</div>
					{/* MENU END */}
					{/* NORMAL MENU END */}
				</div>
				{/* LEFT END */}

				{/* RIGHT START */}
				<div className='flex gap-4 justify-center md:justify-start'>
					<div
						onClick={() => window.open('https://facebook.com', '_blank')}
						className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer'>
						<FaFacebookF size={20} />
					</div>
					<Link
						href='https://twitter.com'
						className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer'>
						<FaTwitter size={20} />
					</Link>
					<div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer'>
						<FaYoutube size={20} />
					</div>
					<div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer'>
						<FaInstagram size={20} />
					</div>
				</div>
				{/* RIGHT END */}
			</Wrapper>
			<Wrapper className='flex border-t border-white/40 pt-4 justify-center md:justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0'>
				{/* LEFT START */}
				<div className='text-[12px] flex items-center gap-2 justify-center md:justify-between text-white cursor-pointer text-center md:text-left'>
					© {new Date().getFullYear()} Adidas, Inc. All Rights Reserved by <Link href='https://abdulrafayportfolio.vercel.app/' target='_blank'><img src='/footer-logo.png' width='40px' /></Link>
				</div>
				{/* LEFT END */}

				{/* RIGHT START */}
				<div className='flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center'>
					<div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
						Guides
					</div>
					<div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
						Terms of Sale
					</div>
					<div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
						Terms of Use
					</div>
					<div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
						Privacy Policy
					</div>
				</div>
				{/* RIGHT END */}
			</Wrapper>
		</footer>
	);
};

export default Footer;
