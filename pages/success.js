import { Wrapper } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




const success = () => {
  return (
    <div className='flex items-center justify-center text-center max-w-[900px] m-auto py-20'>
        <Wrapper>
            <Image src='/success.gif' width={300} height={300} className='m-auto'/>
                <h3>Your Order has been placed successfully!</h3>
                <p>Thanks for shipping with us!</p>
              <p className=''>
                  For any other query drop an email to{' '}
                  <Link
                      className='underline font-semibold '
                      href='mailto:rafaymalick68@gmail.com'>
                      rafaymalick68@gmail.com
                  </Link>
              </p>
              <Link href='/products' className='text-sky-950 table my-6 m-auto border px-4 py-3.5 rounded-md hover:bg-sky-800 hover:transition hover:text-gray-100'>
                  Continue Shopping ?
              </Link>
        </Wrapper>
    </div>
  )
}

export default success;