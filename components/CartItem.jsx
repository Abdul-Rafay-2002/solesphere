import { useStateContext } from '@/context/StateContext';
import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
const CartItem = ({ cartItems }) => {
	const { increaseQty, descreaseQty, prdctQunatity } = useStateContext;
	return (
		<>
			{cartItems?.map((item) => (
				<div  className='flex py-8 gap-2 md:gap-4 border-b border-gray-700 mx-3 relative flex-col md:flex-row items-center md:items-start'>
					{/* {cartItems.length >= 1 && */}
					<div className='shrink-0 aspect-square w-[150px] h-24 md:w-[100px] bg-slate-600 p-3 rounded-xl my-0'>
						<img
							src={urlFor(item?.images[0])}
							className='object-cover hover:scale-110 w-full h-full transition-all'
						/>
					</div>
					<div className='flex flex-col w-full items-center md:items-start'>
						<div className='flex flex-col md:flex-row justify-between w-full '>
							<h6 className='font-semibold text-center md:text-left'>
								{item.productTitle}
							</h6>
							<p className='text-sm font-semibold text-center md:text-left text-gray-400 md:hidden'>
								Men's Category
							</p>
							<h5 className='text-sm font-semibold text-gray-400 text-center md:text-left my-2 md:my-0'>
								${item.productNewPrice}.00
							</h5>
						</div>
						<p className='hidden md:block text-sm font-semibold mb-5 text-gray-400 '>
							Men's Category
						</p>
						<div className='flex gap-8 my-5 md:my-0 w-full justify-center md:justify-start'>
							<div className=''>
								<label htmlFor='Size' className='font-semibold text-sm'>
									Size :{' '}
								</label>
								<select className='text-gray-50 outline-none text-xs rounded-md bg-slate-600 px-2 py-1 border-none'>
									{item.tags.map((sizeTag) => (
										<option value={sizeTag}>{sizeTag}</option>
									))}
								</select>
							</div>
							<div className='flex gap-2'>
								<label htmlFor='Size' className='font-semibold text-sm'>
									Qty :{' '}
								</label>
								<div className='quantity-wrapper flex gap-3'>
									<span
										className='px-2 border cursor-pointer rounded'
										onClick={descreaseQty}>
										-
									</span>
									<span className='digit'> {prdctQunatity} </span>
									<span
										className='px-2 border cursor-pointer rounded'
										onClick={increaseQty}>
										+
									</span>
								</div>
							</div>

							<Link
								href={`/`}
								className=' absolute right-[0px] top-2 md:top-[inherit]'>
								<RiCloseCircleLine
									size={25}
									className='cursor-pointer hover:text-red-500'
								/>
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default CartItem;
