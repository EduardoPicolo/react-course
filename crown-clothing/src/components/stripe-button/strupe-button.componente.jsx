import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import Logo from '../../assets/crown.svg'
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51I8UIuIQhO1uBxqLbZodmglUqDpdOPHBq1aGx7j64MLVv4we6ddnCUUmBkWR40VZSb1OzDfnwZBtwZwzoXbJgEVo00x2ataa3h'

   const onToken = token => {
      console.log(token);
      toast.success('Payment Successful!', { position: "top-center", autoClose: false })
   }

   return (
      <StripeCheckout
         label='Pay Now'
         name='CROWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image={Logo}
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
}

export default StripeCheckoutButton;