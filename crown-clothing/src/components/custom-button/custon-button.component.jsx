import React from 'react'

import './custon-button.styles.scss'


const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton