import Link from 'next/link';
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';


const CartItem = () => {
    return (
        <div className='flex py-5 gap-2 md:gap-4 border-b border-gray-700 mx-3 relative flex-col md:flex-row items-center md:items-start'>
            <div className='shrink-0 aspect-square w-[150px] md:w-[100px] bg-slate-600 p-3 rounded-xl my-0'>
                <img src='/nike-blue1.png' className='object-cover hover:scale-110 transition-all' />
            </div>
            <div className='flex flex-col w-full items-center md:items-start'>
                <div className='flex flex-col md:flex-row justify-between w-full '>
                    <h6 className='font-semibold text-center md:text-left'>Nike Retro 6G</h6>
                    <p className='text-sm font-semibold text-center md:text-left text-gray-400 md:hidden'>
                        Men's Category
                    </p>
                    <h5 className='text-sm font-semibold text-gray-400 text-center md:text-left my-2 md:my-0'>$500.00</h5>
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
                            <option value='1'>Uk6</option>
                            <option value='2'>Uk6</option>
                            <option value='3'>Uk6</option>
                            <option value='4'>Uk6</option>
                            <option value='2'>Uk6</option>
                            <option value='2'>Uk6</option>
                            <option value='2'>Uk6</option>
                            <option value='2'>Uk6</option>
                        </select>
                    </div>
                    <div className=''>
                        <label htmlFor='Size' className='font-semibold text-sm'>
                            Qty :{' '}
                        </label>
                        <select className='text-gray-50 outline-none text-xs rounded-md bg-slate-600 px-2 py-1 border-none'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                        </select>
                    </div>

                    <Link href={`/`} className=' absolute right-[0px] top-2 md:top-[inherit]'>
                        <RiCloseCircleLine size={25} className='cursor-pointer hover:text-red-500' />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CartItem;
