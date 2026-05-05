'use client'
import { useCart } from "@/contexts/cart-context"
import { ShoppingBag } from "lucide-react"

export function CartWidget() {
  const { totalItems, toggleCart, mounted } = useCart()
  return (
    <button
      onClick={toggleCart}
      className="relative flex items-center gap-2 transition-colors hover:text-emerald-400"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">
        Cart ({mounted ? totalItems : 0})
      </span>
    </button>
  )
}
