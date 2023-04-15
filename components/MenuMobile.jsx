import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi2';

const data = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '/about' },
	{ id: 3, name: 'Products', url: '/products', subMenu: true },
	{ id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
	{ id: 1, name: 'Jordan', doc_count: 11 },
	{ id: 2, name: 'Sneakers', doc_count: 8 },
	{ id: 3, name: 'Running shoes', doc_count: 64 },
	{ id: 4, name: 'Football shoes', doc_count: 84 },
];

const MenuMobile = ({
	showCategoryMenu,
	setShowCategoryMenu,
	setMobileMenu,
}) => {
	return (
		<ul className='flex flex-col md:hidden fixed top-24 px-4 right-0 bg-black w-full h-[100vh] pt-6'>
			{data.map((item) => {
				return (
					<React.Fragment key={item.id}>
						{!!item?.subMenu ? (
							<li
                                className='cursor-pointer font-light w-full border-b py-4 flex flex-col text-gray-50  relative'
								onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
                                <div className='flex justify-between items-center px-5 text-sm md:text-[16px]'>
									<Link href={`${item.url}`}>{item.name}</Link>
									<HiOutlineChevronDown size={15} />
								</div>
								{showCategoryMenu && (
                                    <ul className='bg-sky-900 w-full mt-4 -mb-4'>
										{subMenuData.map((subMenuItem) => {
											return (
												<Link
													key={subMenuItem.id}
													href={`${subMenuItem?.url}`}
													onClick={() => {
														setShowCategoryMenu(false), setMobileMenu(false);
													}}>
                                                    <li className='py-4 px-8 border-t flex justify-between hover:bg-sky-400'>
														{subMenuItem.name}
                                                        <span className='text-xs w-[26px] h-[26px] p-[5px] font-bold opacity-50 text-gray-800 bg-gray-200 text-center rounded-full md:text-[12px]'>
															{subMenuItem.doc_count}
														</span>
													</li>
												</Link>
											);
										})}
									</ul>
								)}
							</li>
						) : (
                                <li className='py-4 px-5 border-b w-full text-gray-50'>
								<Link
									className='capitalize'
									href={`${item?.url}`}
									onClick={() => setMobileMenu(false)}>
									{item.name}
								</Link>
							</li>
						)}
					</React.Fragment>
				);
			})}
		</ul>
	);
};

export default MenuMobile;
