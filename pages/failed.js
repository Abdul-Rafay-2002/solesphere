import { Wrapper } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const failed = () => {
	return (
        <div className='bg-gray-950 py-20 text-center flex flex-col items-center justify-center'>
			<Wrapper>
				<Image src='/failed.svg' width={300} height={300} className='m-auto'/>
                <h3 className='text-gray-50 my-4'>Payment Failed!</h3>
                <p className='text-gray-50'>
					For any other query drop an email to{' '}
					<Link
                        className='underline font-semibold text-gray-50'
						href='mailto:rafaymalick68@gmail.com'>
						rafaymalick68@gmail.com
					</Link>
				</p>
                <Link href='/' className='text-gray-50 table my-6 m-auto border px-4 py-3.5 rounded-md hover:bg-sky-800 hover:transition'>
                        Continue Shopping ?
                    </Link>
			</Wrapper>
		</div>
	);
};

export default failed;
