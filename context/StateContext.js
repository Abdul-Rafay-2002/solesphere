import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [cartItems, setcartItems] = useState([]);
	const [totalPrice, settotalPrice] = useState(0);
	const [totalQuantity, settotalQuantity] = useState(0);
	const [prdctQunatity, setprdctQunatity] = useState(1);
	let foundProduct;

	const onAddtoCart = (products, quantity) => {
		const checkProductInCart = cartItems.find(
			(item) => item._id === products._id
		);
		settotalPrice(
			(prevTotalPrice) => prevTotalPrice + products.productNewPrice * quantity
		);
		settotalQuantity((prevTotalQuantites) => prevTotalQuantites + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === products._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});

			setcartItems(updatedCartItems);
		} else {
			products.quantity = quantity;
			setcartItems([...cartItems, { ...products }]);
		}
		toast.success(
			`${prdctQunatity} piece of ${products.productTitle} added to the cart`
		);
	};
	
	//Remove Item from the cart functionality
	const onRemoveCartItem = (products) => {
		foundProduct = cartItems.find((item) => item._id === products._id);
		const newCartItems = cartItems.filter((item) => item._id !== products._id);

		settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
		settotalQuantity(prevTotalQuantites => prevTotalQuantites - foundProduct.quantity);
		setcartItems(newCartItems);
	}


	//----------------- Increase and Deacrease product Quantity functions -------------/
	const increaseQty = () => {
		setprdctQunatity((prevQty) => prevQty + 1);
	};
	const descreaseQty = () => {
		setprdctQunatity((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};
	return (
		<Context.Provider
			value={{
				onAddtoCart,
				totalPrice,
				cartItems,
				totalQuantity,
				settotalQuantity,
				prdctQunatity,
				increaseQty,
				descreaseQty,
				onRemoveCartItem
			}}>
			{children}
		</Context.Provider>
	);
};
//Convert exporting
export const useStateContext = () => useContext(Context);
