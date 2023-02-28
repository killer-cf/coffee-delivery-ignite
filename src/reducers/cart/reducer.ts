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

    default:
      return state
  }
}
