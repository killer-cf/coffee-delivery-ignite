import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  ErrorContainer,
  PaymentCard,
  PaymentCardTitle,
  PaymentOptions,
} from './styles'

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

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
            value="credit-card"
            id="credit_card"
            {...register('paymentOption')}
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
            value="debit-card"
            id="debit_card"
            {...register('paymentOption')}
          />
          <button type="button">
            <label htmlFor="debit_card">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </label>
          </button>
        </div>
        <div>
          <input
            type="radio"
            value="money"
            id="money_"
            {...register('paymentOption')}
          />
          <button type="button">
            <label htmlFor="money_">
              <Money size={16} />
              <span>DINHEIRO</span>
            </label>
          </button>
        </div>
      </PaymentOptions>
      <ErrorContainer>
        {errors.paymentOption?.message && (
          <p>{errors.paymentOption?.message?.toString()}</p>
        )}
      </ErrorContainer>
    </PaymentCard>
  )
}
