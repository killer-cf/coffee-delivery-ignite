import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewItemAction,
  decItemQuantityAction,
  removeItemAction,
  sumItemQuantityAction,
} from '../reducers/cart/actions'
import { cartReducer, Item } from '../reducers/cart/reducer'

interface CreateItemData {
  id?: string
  name: string
  quantity: number
  src: string
  value: number
}

interface CartContextType {
  itens: Item[]
  createNewItem: (data: CreateItemData) => void
  sumItemQuantity: (itemName: string) => void
  decItemQuantity: (itemName: string) => void
  removeItem: (itemName: string) => void
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
    const duplicate = itens.filter((item) => item.name === data.name)

    if (duplicate.length === 0) {
      const id = String(new Date().getTime())
      const newItem: Item = {
        id,
        name: data.name,
        quantity: data.quantity,
        src: data.src,
        value: data.value,
      }

      dispatch(addNewItemAction(newItem))
    } else {
      dispatch(sumItemQuantityAction(data.name, data.quantity))
    }
  }

  function sumItemQuantity(itemName: string) {
    dispatch(sumItemQuantityAction(itemName))
  }

  function decItemQuantity(itemName: string) {
    dispatch(decItemQuantityAction(itemName))
  }

  function removeItem(itemName: string) {
    dispatch(removeItemAction(itemName))
  }

  return (
    <CartContext.Provider
      value={{
        itens,
        createNewItem,
        sumItemQuantity,
        decItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
