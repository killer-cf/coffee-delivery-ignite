import { DeliveryAddress } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  CREATE_NEW_ADDRESS = 'CREATE_NEW_ADDRESS',
}

export function createDeliveryAddressAction(address: DeliveryAddress) {
  return {
    type: ActionTypes.CREATE_NEW_ADDRESS,
    payload: { address },
  }
}
