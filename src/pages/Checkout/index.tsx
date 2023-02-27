import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { CartCard, CheckoutForm } from './styles'

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
        <CartCard></CartCard>
      </div>
    </CheckoutForm>
  )
}
