import { useState, useCallback } from 'react'

// Input validation helper
const validateCartItem = (item) => {
  if (!item || typeof item !== 'object') return false
  if (!item.id || typeof item.id !== 'number') return false
  if (!item.name || typeof item.name !== 'string' || item.name.length > 100) return false
  if (!item.price || typeof item.price !== 'number' || item.price < 0 || item.price > 100000) return false
  if (item.description && typeof item.description !== 'string') return false
  if (item.category && typeof item.category !== 'string') return false
  return true
}

export const useCart = () => {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((item) => {
    // Validate input before adding to cart
    if (!validateCartItem(item)) {
      console.warn('Invalid cart item rejected:', item)
      return
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        // Prevent quantity overflow
        const newQuantity = Math.min(existingItem.quantity + 1, 99)
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((itemId) => {
    // Validate itemId
    if (!itemId || typeof itemId !== 'number') return
    setCart(prevCart => prevCart.filter(item => item.id === itemId))
  }, [])

  const updateQuantity = useCallback((itemId, newQuantity) => {
    // Validate inputs
    if (!itemId || typeof itemId !== 'number') return
    if (typeof newQuantity !== 'number' || newQuantity < 0 || newQuantity > 99) return
    
    if (newQuantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount
  }
}
