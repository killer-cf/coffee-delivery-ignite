import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { CheckoutForm, EmptyCart } from './styles'

interface CheckoutFormType {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  'payment-option': string
}

export function Checkout({ history }: any) {
  const { itens } = useContext(CartContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormType>({
    defaultValues: {
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

  const { handleSubmit } = checkoutForm

  function handleCreateAddress(data: CheckoutFormType) {}

  if (itens.length > 0) {
    return (
      <CheckoutForm onSubmit={handleSubmit(handleCreateAddress)}>
        <FormProvider {...checkoutForm}>
          <div className="box-1">
            <h3>Complete seu pedido</h3>
            <Address />
            <Payment />
          </div>
          <div className="box-2">
            <h3>Cafés selecionados</h3>
            <Cart />
          </div>
        </FormProvider>
      </CheckoutForm>
    )
  } else {
    return (
      <EmptyCart>
        <h2>Carrinho vazio</h2>
        <NavLink to="/">Voltar para home</NavLink>
      </EmptyCart>
    )
  }
}
