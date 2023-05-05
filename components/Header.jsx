import React, { useState, useEffect } from 'react';
import { Wrapper, Menu, MenuMobile } from '../components/';
import Link from 'next/link';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { FaAlignRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [showCategoryMenu, setShowCategoryMenu] = useState(false);
	const [show, setShow] = useState('translate-y-0');
	const [lastScrollY, setLastScrollY] = useState(0);

	const {totalQuantity} = useStateContext();

	const controlNavigationBar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow('-translate-y-[96px]');
			} else {
				setShow('shadow-sm');
			}
		} else {
			setShow('translate-y-0');
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavigationBar);
		return () => {
			window.removeEventListener('scroll', controlNavigationBar);
		};
	}, [lastScrollY]);
 
	return (
		<header
			className={`w-full h-auto sm:h-24 bg-sky-600 flex items-center shadow-xl justify-between z-[1001] sticky top-0 transition-transform duration-200 ${show}`}>
			<Wrapper className='flex justify-between items-center'>
				<div className='w-24 md:w-20 grayscale invert'>
					<Link href='/'>
						<img src='/adidas.png' alt='logo' />
					</Link>
				</div>
				<Menu
					showCategoryMenu={showCategoryMenu}
					setShowCategoryMenu={setShowCategoryMenu}
				/>
				{mobileMenu && (
					<MenuMobile
						showCategoryMenu={showCategoryMenu}
						setShowCategoryMenu={setShowCategoryMenu}
						setMobileMenu={setMobileMenu}
					/>
				)}
				<div className='flex items-center gap-5'>
					<div className='relative w-8 cursor-pointer'>
						<FiHeart
							size={28}
							className='text-gray-50  hover:scale-90 transition-all'
						/>
                        <span className='text-[10px] leading-3 font-medium px-1.5 right-[-9px] absolute top-[-13px] text-gray-50 bg-red-600 p-1 rounded-full'>
							5
						</span>
					</div>
					<Link href={`/cart`}>
					<div className='relative w-8 cursor-pointer'>
						<FiShoppingBag
							size={28}
							className='text-gray-50  hover:scale-90 transition-all'
						/>
                        <span className='text-[10px] leading-3 font-medium px-1.5 right-[-9px] absolute top-[-13px] text-gray-50 bg-red-600 p-1 rounded-full'>
							{totalQuantity}
						</span>
					</div>
					</Link>
					<div className='md:hidden relative w-8 cursor-pointer'>
						{mobileMenu ? (
							<AiOutlineClose
								size={26}
								className='text-gray-50 '
								onClick={() => setMobileMenu(false)}
							/>
						) : (
							<FaAlignRight
								size={26}
								className='text-gray-50 '
								onClick={() => setMobileMenu(true)}
							/>
						)}
					</div>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
