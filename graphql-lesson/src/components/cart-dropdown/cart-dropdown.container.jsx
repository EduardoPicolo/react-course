import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`;

const CartDropContainer = () => (
	<Mutation mutation={TOGGLE_CART_HIDDEN}>
		{(toggleCartHidden) => (
			<Query query={GET_CART_ITEMS}>
				{({ data }) => (
					<CartDropdown
						cartItems={data.cartItems}
						toggleCartHidden={toggleCartHidden}
					/>
				)}
			</Query>
		)}
	</Mutation>
);

export default CartDropContainer;
