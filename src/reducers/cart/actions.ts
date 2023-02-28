import { Item } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem },
  }
}
