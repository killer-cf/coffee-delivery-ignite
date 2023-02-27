import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { CheckoutForm } from './styles'

export function Checkout() {
  return (
    <CheckoutForm>
      <div className="box-1">
        <h3>Complete seu pedido</h3>
        <Address />
        <Payment />
      </div>
      <div className="box-2">
        <h3>Cafés selecionados</h3>
        <Cart />
      </div>
    </CheckoutForm>
  )
}
