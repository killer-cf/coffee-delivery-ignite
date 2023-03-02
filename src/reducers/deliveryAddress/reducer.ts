import { ActionTypes } from './actions'

export interface DeliveryAddress {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  'payment-option': string
}

interface DeliveyAddressState {
  deliveryAddress: DeliveryAddress
}

export function deliveryAddressReducer(
  state: DeliveyAddressState,
  action: any,
) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ADDRESS:
      return { deliveryAddress: action.payload.address }

    default:
      console.log('default')
      return state
  }
}
