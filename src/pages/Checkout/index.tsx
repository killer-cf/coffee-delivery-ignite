import { CurrencyDollar } from 'phosphor-react'
import { Address } from './components/Address'
import { CartCard, CheckoutForm, PaymentCard, PaymentCardTitle } from './styles'

export function Checkout() {
  return (
    <CheckoutForm>
      <div className="box-1">
        <h3>Complete seu pedido</h3>
        <Address />
        <PaymentCard>
          <PaymentCardTitle>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentCardTitle>
        </PaymentCard>
      </div>
      <div className="box-2">
        <h3>Cafés selecionados</h3>
        <CartCard></CartCard>
      </div>
    </CheckoutForm>
  )
}
