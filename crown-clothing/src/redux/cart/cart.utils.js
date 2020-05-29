export const addItemToCart = (cart, itemToAdd) => {
  const existingCartItem = cart.find(item => item.id === itemToAdd.id)

  if (existingCartItem) {
    return cart.map(item => (
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  return [...cart, { ...itemToAdd, quantity: 1 }]
}