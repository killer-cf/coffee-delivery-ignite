import { useContext } from 'react'
import { DeliveryAddressContext } from '../../contexts/DeliveryAddressContext'

export function Order() {
  const { deliveryAddress } = useContext(DeliveryAddressContext)
  return <h1>ORDER</h1>
}
