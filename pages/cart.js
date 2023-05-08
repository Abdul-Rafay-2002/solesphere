import { Wrapper, CartItem } from '@/components';
import { useStateContext } from '@/context/StateContext';
import Image from 'next/image';
import Link from 'next/link';
import React, {useRef} from 'react';

const Cart = () => {
	const cartRef = useRef();
	const {
		 totalPrice,
		 cartItems,
		 
	} = useStateContext();
	return (
		<div className='w-full py-20 bg-gray-950' ref={cartRef}>
			<Wrapper>
				<h2 className='text-center text-gray-100'>Shopping Cart</h2>
				<div className='flex flex-col-reverse lg:flex-row-reverse gap-10 py-10'>
					<div className='flex-[1] text-gray-50 bg-gray-700 rounded-xl h-full pb-8'>
						<h5 className='font-semibold my-5 mx-3 text-center md:text-left'>
							Summary
						</h5>
						<div className='flex items-center justify-between  bg-slate-900 px-3 py-3 '>
							<h6>Subtotal</h6>
							<p className='font-semibold'>${totalPrice}.00</p>
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
					<div className='text-gray-50 bg-gray-800 flex-[2] rounded-xl'>
						<h5 className='bg-slate-900 px-3 py-3 font-semibold my-5  text-center md:text-left'>
							Cart Items
						</h5>
						<div>
							<CartItem cartItems={cartItems} key={cartItems._id}  />
						</div>
{/* EMPTY SCREEN */}
				{cartItems.length < 1 && (
				<div key={cartItems.productTitle} className='flex flex-col items-center gap-[40px] pb-12 '>
								<Image src='/emptycart.svg' width={350} height={350} alt='empty-cart' priority={true} style={{ width: '350px', height: '350px' }} />
					<span>
						<h4 className=' text-gray-50 text-center'>Your cart is empty</h4>
						<p className=' text-gray-50 text-center'>
							Look like you have not added anything in your cart. <br /> Go
							ahead and explore top categories
						</p>
					</span>
					<Link href='/products' className='text-gray-50 border px-4 py-3.5 rounded-md hover:bg-sky-800 hover:transition'>
						Continue Shopping ?
					</Link>
				</div>
				)}
{/* EMPTY SCREEN */}
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default Cart;
