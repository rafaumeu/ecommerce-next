'use client'
import { createContext, useContext, useState } from "react";

interface CartItem {
  productsId: string
  quantity: number
}
interface CartContextType {
  items: CartItem[]
  addToCart: (productsId: string) => void
}
const CartContext = createContext({} as CartContextType);

export function CartProvider({children}: {children: React.ReactNode}) {
  const [cartItems, setCartItem] = useState<CartItem[]>([])
  function addToCart(productsId: string) {
    setCartItem(state => {
      const productInCart = state.some(item => item.productsId === productsId)
      if(productInCart) {
        return state.map(item => {
          if(item.productsId === productsId) {
            return {...item, quantity: item.quantity + 1}
          }
          return item
        })
      }else {
        return[...state, {productsId, quantity: 1}]
      }
    })
  }
  return <CartContext.Provider value={{items: cartItems, addToCart}}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)