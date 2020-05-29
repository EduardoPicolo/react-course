import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custon-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.lenght ?
        cartItems.map(item =>
          <CartItem key={item.id} item={item} />)
        :
        <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
