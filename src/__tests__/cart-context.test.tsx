import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { ReactNode } from "react";
import { CartProvider, useCart } from "@/contexts/cart-context";

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("starts with an empty cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
    expect(result.current.totalItems).toBe(0);
  });

  it("adds a product to the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });

    expect(result.current.items).toEqual([{ productId: 1, quantity: 1 }]);
    expect(result.current.totalItems).toBe(1);
  });

  it("does not add duplicate products", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });
    act(() => {
      result.current.addToCart(1);
    });

    expect(result.current.items).toEqual([{ productId: 1, quantity: 1 }]);
    expect(result.current.totalItems).toBe(1);
  });

  it("removes a product from the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
      result.current.addToCart(2);
    });
    act(() => {
      result.current.removeFromCart(1);
    });

    expect(result.current.items).toEqual([{ productId: 2, quantity: 1 }]);
    expect(result.current.totalItems).toBe(1);
  });

  it("updates quantity of a product", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });
    act(() => {
      result.current.updateQuantity(1, 5);
    });

    expect(result.current.items).toEqual([{ productId: 1, quantity: 5 }]);
    expect(result.current.totalItems).toBe(5);
  });

  it("removes product when quantity is set to 0", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });
    act(() => {
      result.current.updateQuantity(1, 0);
    });

    expect(result.current.items).toEqual([]);
  });

  it("removes product when quantity is set to negative", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });
    act(() => {
      result.current.updateQuantity(1, -1);
    });

    expect(result.current.items).toEqual([]);
  });

  it("clears the entire cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
      result.current.addToCart(2);
      result.current.addToCart(3);
    });
    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toEqual([]);
    expect(result.current.totalItems).toBe(0);
  });

  it("computes totalItems correctly across multiple products", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
      result.current.addToCart(2);
    });
    act(() => {
      result.current.updateQuantity(1, 3);
      result.current.updateQuantity(2, 2);
    });

    expect(result.current.totalItems).toBe(5);
  });

  it("toggles cart open state", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggleCart();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleCart();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it("opens and closes cart explicitly", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.openCart();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeCart();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it("opens cart when addToCart is called", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(1);
    });
    expect(result.current.isOpen).toBe(true);
  });

  it("persists cart to localStorage after mount", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(42);
      result.current.updateQuantity(42, 3);
    });

    // The provider should have written to localStorage
    const stored = JSON.parse(localStorage.getItem("devstore-cart") || "[]");
    expect(stored).toEqual([{ productId: 42, quantity: 3 }]);
  });

  it("restores cart from localStorage on mount", () => {
    localStorage.setItem(
      "devstore-cart",
      JSON.stringify([{ productId: 10, quantity: 2 }])
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // After the mount effect runs
    expect(result.current.items).toEqual([{ productId: 10, quantity: 2 }]);
    expect(result.current.totalItems).toBe(2);
  });
});
