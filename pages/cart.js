import { Wrapper, CartItem } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cart = () => {
	return (
		<div className='w-full py-20 bg-gray-950 '>
			<Wrapper>
				<h2 className='text-center text-gray-100'>Shopping Cart</h2>

				<div className='flex flex-col lg:flex-row gap-10 py-10'>
					<div className='text-gray-50 bg-gray-800 flex-[2] rounded-xl'>
                        <h5 className='bg-slate-900 px-3 py-3 font-semibold my-5  text-center md:text-left'>
							Cart Items
						</h5>
						<div>
							<CartItem />
							<CartItem />
							<CartItem />
							<CartItem />
							<CartItem />
						</div>
					</div>
                    <div className='flex-[1] text-gray-50 bg-gray-700 rounded-xl h-full pb-8'>
						<h5 className='font-semibold my-5 mx-3 text-center md:text-left'>Summary</h5>
						<div className='flex items-center justify-between  bg-slate-900 px-3 py-3 '>
							<h6>Subtotal</h6>
							<p className='font-semibold'>$1200.00</p>
						</div>
						<p className='text-sky-100 px-8 py-6 text-center'>
							{' '}
							The subtotal reflects the total price of your order, including
							duties and taxes, before any applicable discounts. It does not
							include delivery costs and international transaction fees.
						</p>
                        <button className='bg-sky-600 m-auto text-center max-w-lg table hover:bg-sky-700 transition-all'>
                            Checkout
                        </button>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default Cart;
