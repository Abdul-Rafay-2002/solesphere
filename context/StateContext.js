import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [cartItems, setcartItems] = useState([]);
	const [totalPrice, settotalPrice] = useState(0);
	const [totalQuantity, settotalQuantity] = useState(0);
	const [prdctQunatity, setprdctQunatity] = useState(1);

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
			}}>
			{children}
		</Context.Provider>
	);
};
//Convert exporting
export const useStateContext = () => useContext(Context);
