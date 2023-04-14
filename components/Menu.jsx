import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi2';

const data = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '/about' },
	{ id: 3, name: 'Categories', subMenu: true },
	{ id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
	{ id: 1, name: 'Jordan', doc_count: 11 },
	{ id: 2, name: 'Sneakers', doc_count: 8 },
	{ id: 3, name: 'Running shoes', doc_count: 64 },
	{ id: 4, name: 'Football shoes', doc_count: 84 },
];

const Menu = ({ showCategoryMenu, setShowCategoryMenu }) => {
	return (
		<ul className='hidden md:flex items-center gap-10'>
			{data.map((item) => {
				return (
					<React.Fragment key={item.id}>
						{!!item?.subMenu ? (
							<li
                                className='cursor-pointer font-light flex py-9 text-gray-50 items-center gap-1 relative'
								onMouseEnter={() => setShowCategoryMenu(true)}
								onMouseLeave={() => setShowCategoryMenu(false)}>
								{item.name}
								<HiOutlineChevronDown size={15} />
								{showCategoryMenu && (
                                    <ul className='bg-sky-900 absolute top-[95px] pt-4 pb-4 left-0 min-w-[300px] px-1 rounded-md shadow-lg'>
										{subMenuData.map((subMenuItem) => {
											return (
												<Link key={subMenuItem.id} href={`${subMenuItem?.url}`}>
                                                    <li className='flex h-12 font-light  text-gray-50 justify-between items-center px-3 hover:bg-sky-400 rounded-'>
														{subMenuItem.name}
                                                        <span className='text-xs w-[26px] h-[26px] p-[5px] font-medium opacity-50 text-gray-800 bg-gray-200 text-center rounded-full'>
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
                                <li className='cursor-pointer text-gray-50'>
								<Link className='capitalize' href={`${item?.url}`}>
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

export default Menu;
