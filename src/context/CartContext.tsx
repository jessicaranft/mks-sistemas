import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CartItem {
  id: number
  brand: string
  name: string
  price: number
  photo: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addItemToCart: (item: CartItem, quantity: number) => void
  removeItemFromCart: (id: number) => void
  incrementQuantity: (id: number) => void
  decrementQuantity: (id: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItemToCart(item: CartItem, quantity: number) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        ),
      )
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity }])
    }
  }

  function removeItemFromCart(id: number) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id,
      )

      const cartItemsJSON = JSON.stringify(updatedCartItems)
      localStorage.setItem('@mks-sistemas:cart-items', cartItemsJSON)

      return updatedCartItems
    })
  }

  function incrementQuantity(id: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  function decrementQuantity(id: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  useEffect(() => {
    const storedCartItemsJSON = localStorage.getItem('@mks-sistemas:cart-items')

    if (storedCartItemsJSON) {
      const storedCartItems = JSON.parse(storedCartItemsJSON)
      setCartItems(storedCartItems)
    }
  }, [])

  useEffect(() => {
    const cartItemsJSON = JSON.stringify(cartItems)

    if (cartItems.length > 0) {
      localStorage.setItem('@mks-sistemas:cart-items', cartItemsJSON)
    }
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
