import { createContext, ReactNode, useReducer } from 'react'
import { createDeliveryAddressAction } from '../reducers/deliveryAddress/actions'
import {
  DeliveryAddress,
  deliveryAddressReducer,
} from '../reducers/deliveryAddress/reducer'

interface DeliveryAddressContextType {
  deliveryAddress: DeliveryAddress
  createDeliveyAddress: (data: DeliveryAddress) => void
}

export const DeliveryAddressContext = createContext(
  {} as DeliveryAddressContextType,
)

interface DeliveryAddressProviderProps {
  children: ReactNode
}

export function DeliveryAddressProvider({
  children,
}: DeliveryAddressProviderProps) {
  const [deliveryAddressState, dispatch] = useReducer(deliveryAddressReducer, {
    deliveryAddress: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      'payment-option': '',
    },
  })

  const { deliveryAddress } = deliveryAddressState

  function createDeliveyAddress(data: DeliveryAddress) {
    dispatch(createDeliveryAddressAction(data))
  }

  return (
    <DeliveryAddressContext.Provider
      value={{ deliveryAddress, createDeliveyAddress }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}
