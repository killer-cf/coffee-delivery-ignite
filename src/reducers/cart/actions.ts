import { Item } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITENS = 'CLEAR_ITENS',
  SUM_ITEM_QUANTITY = 'SUM_ITEM_QUANTITY',
  DEC_ITEM_QUANTITY = 'DEC_ITEM_QUANTITY',
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem },
  }
}

export function sumItemQuantityAction(itemName: string, quantity: number = 1) {
  return {
    type: ActionTypes.SUM_ITEM_QUANTITY,
    payload: { itemName, quantity },
  }
}

export function decItemQuantityAction(itemName: string) {
  return {
    type: ActionTypes.DEC_ITEM_QUANTITY,
    payload: { itemName },
  }
}

export function removeItemAction(itemName: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { itemName },
  }
}

export function clearItensAction() {
  return {
    type: ActionTypes.CLEAR_ITENS,
  }
}
