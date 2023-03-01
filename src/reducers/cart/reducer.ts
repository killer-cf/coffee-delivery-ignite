import { ActionTypes } from './actions'

import { produce } from 'immer'

export interface Item {
  id: string
  name: string
  src: string
  quantity: number
  value: string
}

interface CartState {
  itens: Item[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.itens.push(action.payload.newItem)
      })

    case ActionTypes.REMOVE_ITEM: {
      const itemIndex = state.itens.findIndex((item) => {
        return item.name === action.payload.itemName
      })

      return produce(state, (draft) => {
        draft.itens.splice(itemIndex, 1)
      })
    }

    case ActionTypes.SUM_ITEM_QUANTITY: {
      const itemIndex = state.itens.findIndex((item) => {
        return item.name === action.payload.itemName
      })

      return produce(state, (draft) => {
        draft.itens[itemIndex].quantity += action.payload.quantity
      })
    }

    case ActionTypes.DEC_ITEM_QUANTITY: {
      const itemIndex = state.itens.findIndex((item) => {
        return item.name === action.payload.itemName
      })

      return produce(state, (draft) => {
        draft.itens[itemIndex].quantity -= 1
      })
    }

    default:
      return state
  }
}
