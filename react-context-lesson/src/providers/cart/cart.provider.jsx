import React, { createContext, useState, useEffect } from 'react';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	getCartItemsCount,
	getCartTotal
} from './cart.utils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItem: () => {},
	cartItemsCount: 0,
	total: 0
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const toggleHidden = () => setHidden(!hidden);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [total, setTotal] = useState(0);

	const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
	const removeItem = (item) =>
		setCartItems(removeItemFromCart(cartItems, item));
	const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
		setTotal(getCartTotal(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				cartItemsCount,
				addItem,
				removeItem,
				clearItem,
				total
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
