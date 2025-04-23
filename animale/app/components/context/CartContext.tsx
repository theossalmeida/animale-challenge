'use client'
import { createContext, useContext, useReducer, ReactNode } from 'react'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'DELETE_ITEM'; payload: { id: string } }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
}>({ state: { items: [] }, dispatch: () => null })

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] }
    }
    case 'REMOVE_ITEM': {
      return {
        items: state.items
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      }
    }
    case 'DELETE_ITEM': {
      return {
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    }
    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)