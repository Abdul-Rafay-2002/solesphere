import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React, { useState} from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';


const ProductCart = ({ product: { images, productTitle, productNewPrice, productOldPrice, productDiscount, slug } }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <Link href={`/product/${slug.current}`} className='border p-3 h-full block rounded-lg relative text-center bg-gray-900'>

            <span className={`text-white absolute right-2 z-10 p-2`} onClick={() => setToggle(!toggle)}>
                <BsFillSuitHeartFill className={`${!toggle ? '' : 'text-red-600'}`}  size={25} />
            </span>
            <img className='hover:scale-105 hover:transition-all h-60 w-full object-cover p-2' src={urlFor(images && images[0])} />
            <h6 className='capitalize text-gray-50 font-semibold my-2'>{productTitle}</h6>
            <div className='flex items-center justify-center pb-3 mb-3'>
                <p className='mr-3 text-gray-500 font-semibold '>${productNewPrice}.00</p>
                <p className='text-gray-500 text-sm font-medium line-through'>${productOldPrice}.00</p>
                <p className='m-auto px-3 py-2 rounded-full text-sm text-gray-50 font-medium absolute top-[-15px] left-0 table right-0 bg-sky-600'>{productDiscount}% off</p>
            </div>
        </Link>
    );
};

export default ProductCart;
