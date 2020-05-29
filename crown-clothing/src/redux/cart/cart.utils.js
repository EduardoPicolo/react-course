export const addItemToCart = (cart, itemToAdd) => {
  const existingCartItem = cart.find(item => item.id === itemToAdd.id)

  if (existingCartItem) {
    return cart.map(item => (
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  return [...cart, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cart, itemToRemove) => {
  const existingCartItem = cart.find(item => item.id === itemToRemove.id)

  if (existingCartItem.quantity === 1) {
    // return cart.filter(item => item.id !== itemToRemove.id)
    return cart
  }

  return cart.map(item => (
    item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  ))
}