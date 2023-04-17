import Link from 'next/link';
import React from 'react';


const ProductCart = () => {
    return (
        <Link href={`/product/1`} className='border p-3 rounded-lg relative text-center bg-gray-900'>
            <img className='hover:scale-105 hover:transition-all' src='/product-cart.png' />
            <h6 className='capitalize text-gray-50 font-semibold my-2'>title</h6>
            <div className='flex items-center justify-center pb-3 mb-3'>
                <p className='mr-3 text-gray-500 font-semibold '>$50.00</p>
                <p className='text-gray-500 text-sm font-medium line-through'>$60.00</p>
                <p className='m-auto px-3 py-2 rounded-full text-sm text-gray-50 font-medium absolute top-[-15px] left-0 table right-0 bg-sky-600'>20% off</p>
            </div>
        </Link>
    );
};

export default ProductCart;
