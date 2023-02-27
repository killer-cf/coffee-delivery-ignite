import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentCard, PaymentCardTitle, PaymentOptions } from './styles'

export function Payment() {
  return (
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
      <PaymentOptions>
        <div>
          <input
            type="radio"
            name="payment-option"
            value="credit-card"
            id="credit_card"
          />
          <button type="button">
            <label htmlFor="credit_card">
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </label>
          </button>
        </div>
        <div>
          <input
            type="radio"
            name="payment-option"
            value="debit-card"
            id="debit_card"
          />
          <button type="button">
            <label htmlFor="debit_card">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </label>
          </button>
        </div>
        <div>
          <input type="radio" name="payment-option" value="money" id="money_" />
          <button type="button">
            <label htmlFor="money_">
              <Money size={16} />
              <span>DINHEIRO</span>
            </label>
          </button>
        </div>
      </PaymentOptions>
    </PaymentCard>
  )
}
