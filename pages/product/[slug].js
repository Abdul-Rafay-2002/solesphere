import { Wrapper, ProductDetailsCarousel, RealtedProduct } from '@/components';
import { useStateContext } from '@/context/StateContext';
import { client } from '@/lib/client';
import React from 'react';
import { BsFillBagCheckFill, BsFillHeartFill } from 'react-icons/bs';

const ProductDetail = ({ product, products, categoryData }) => {
	const {
		images,
		productTitle,
		productNewPrice,
		category,
		slug,
		tags,
		productDescription,
	} = product;

	const { onAddtoCart, prdctQunatity} = useStateContext();

	return (
		<div className='w-full md:py-20'>
			<Wrapper>
				{console.log(categoryData)}
				{/* {console.log(tags)} */}
				{/* Product Slider */}
				<div className='flex items-start flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[70px] md:gap-[30px]'>
					<div className='w-full md:w-auto relative flex-[1.5] max-w-[550px] lg:max-full max-auto lg:mx-0'>
						<ProductDetailsCarousel images={images} />
					</div>
					{/* Product Slider */}
					{/* Product Description */}
					<div className='flex-[1] md:pb-3 w-full mb-20'>
						<h2 className='text-center md:text-left'>{productTitle}</h2>
						<h5 className='text-center md:text-left text-lg font-semibold m-0 '>{category._ref}</h5>
						<h6 className='text-center md:text-left pt-3'>
							${productNewPrice}.00
						</h6>
						<p className='text-center md:text-left capitalize'>
							incl. of texas
						</p>
						<p className='text-center md:text-left capitalize text-sm'>{`(Also includes all applicable duties)`}</p>
						{/* Product Details */}
						<div className='my-7'>
							<h5 className='font-bold my-2'>Product Details:</h5>
							<p className='my-2'>{productDescription}</p>
							{/* <p className='my-2'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p> */}
						</div>
						{/* Product Details */}
						{/* Product Range */}
						<div className='my-8'>
							<div className='flex justify-between mb-2'>
								<div className='font-semibold mb-2'>Select Sizes</div>
								<div className='font-semibold mb-2 text-gray-400'>
									Select Guide
								</div>
							</div>
							<div className=' grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
								{tags.map((tag, i) => (
									<button key={i} className='border px-1 py-2 font-semibold rounded-md hover:text-gray-50 hover:border-sky-600 hover:transition-all hover:bg-sky-500/60'>
										{tag}
									</button>
								))}
								<button className='border px-1 py-2 font-semibold rounded-md text-gray-300 border-gray-200 hover:transition-all bg-black/5 cursor-not-allowed'>
									Uk6 Disable
								</button>
							</div>
							{/* SHOW ERROR MESSAGE  */}
							<div className=' text-sm md:text-base my-2 text-red-600'>
								*Size selection is required*
							</div>
							{/* SHOW ERROR MESSAGE  */}
						</div>
						{/* Product Range */}
						{/* Add to Cart button */}
						<button className=' flex mb-3 rounded-3xl justify-center w-full border bg-sky-900 text-sky-50 active:text-gray-50 hover:text-gray-50 hover:bg-sky-600 transition-all hover:opacity-70' onClick={() => onAddtoCart(product, prdctQunatity)}>
							Add to Cart <BsFillBagCheckFill size={18} className='mx-4' />
						</button>
						{/* Add to Cart button */}
						{/*WishList button */}
						<button className=' flex justify-center rounded-3xl  w-full border bg-sky-900 text-sky-50 active:text-gray-50 hover:text-gray-50 hover:bg-sky-600 transition-all hover:opacity-70'>
							Add to Wishlist <BsFillHeartFill size={18} className='mx-4' />
						</button>
						{/* WishList button */}
					</div>
				</div>
				{/* Product Description */}
				{/* Related product carousle*/}
				<RealtedProduct products={products} />
				{/* Related product carousle */}
			</Wrapper>
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = '*[_type == "product"]';
	const categoryQuery = '*[_type == "category"]';

	try {
		const product = await client.fetch(query);
		const products = await client.fetch(productsQuery);
		const categoryData = await client.fetch(categoryQuery);
		return {
			props: { products, product, categoryData },
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				error: {
					message: 'Unable to fetch product data',
				},
			},
		};
	}
};
export default ProductDetail;
