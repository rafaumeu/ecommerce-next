'use client'
import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  isOpen: boolean
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  mounted: boolean
}

const CartContext = createContext({} as CartContextType);

const CART_STORAGE_KEY = 'devstore-cart';

export function CartProvider({children}: {children: React.ReactNode}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setCartItems(JSON.parse(stored))
      }
    } catch {}
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
      } catch {}
    }
  }, [cartItems, mounted])

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(state => state.filter(item => item.productId !== productId))
  }, [])

  const addToCart = useCallback((productId: number) => {
    setCartItems(state => {
      const existing = state.find(item => item.productId === productId)
      if (existing) {
        return state.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { productId, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(state =>
      state.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const toggleCart = useCallback(() => setIsOpen(s => !s), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      isOpen,
      toggleCart,
      openCart,
      closeCart,
      mounted,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
