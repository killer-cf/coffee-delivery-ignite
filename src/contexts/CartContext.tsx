import { createContext, ReactNode, useReducer } from 'react'
import { addNewItemAction } from '../reducers/cart/actions'
import { cartReducer, Item } from '../reducers/cart/reducer'

interface CreateItemData {
  name: string
  quantity: number
}

interface CartContextType {
  itens: Item[]
  createNewItem: (data: CreateItemData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    itens: [],
  })

  const { itens } = cartState

  function createNewItem(data: CreateItemData) {
    const id = String(new Date().getTime())

    const newItem: Item = {
      id,
      name: data.name,
      quantity: data.quantity,
      src: data.src,
      value: data.value,
    }

    dispatch(addNewItemAction(newItem))
  }

  return (
    <CartContext.Provider value={{ itens, createNewItem }}>
      {children}
    </CartContext.Provider>
  )
}
