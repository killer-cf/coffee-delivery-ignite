import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { createDeliveryAddressAction } from '../reducers/deliveryAddress/actions'
import {
  DeliveryAddress,
  deliveryAddressReducer,
} from '../reducers/deliveryAddress/reducer'
import { capitalize } from '../utils/functions'

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
  const [deliveryAddressState, dispatch] = useReducer(
    deliveryAddressReducer,
    {
      deliveryAddress: {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        paymentOption: '',
      },
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:deliveryAddress-1.0.0',
      )

      if (storedStateAsJSON) {
        return { deliveryAddress: JSON.parse(storedStateAsJSON) }
      }

      return initialState
    },
  )

  const { deliveryAddress } = deliveryAddressState

  useEffect(() => {
    const dataJSON = JSON.stringify(deliveryAddress)

    localStorage.setItem('@coffee-delivery:deliveryAddress-1.0.0', dataJSON)
  }, [deliveryAddress])

  function createDeliveyAddress(data: DeliveryAddress) {
    const newDataFormated: DeliveryAddress = {
      bairro: capitalize(data.bairro),
      rua: capitalize(data.rua),
      cidade: capitalize(data.cidade),
      uf: data.uf.toUpperCase(),
      cep: data.cep,
      complemento: data.complemento,
      numero: data.numero,
      paymentOption: data.paymentOption,
    }

    dispatch(createDeliveryAddressAction(newDataFormated))
  }

  return (
    <DeliveryAddressContext.Provider
      value={{ deliveryAddress, createDeliveyAddress }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}
