export interface Item {
  id: string
  name: string
  src: string
  quantity: number
  value: number
}

interface CartState {
  itens: Item[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
