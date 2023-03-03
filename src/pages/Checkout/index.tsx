import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CartContext } from '../../contexts/CartContext'
import { DeliveryAddressContext } from '../../contexts/DeliveryAddressContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { CheckoutForm, EmptyCart } from './styles'

const checkoutFormValidationSchema = zod
  .object({
    cep: zod
      .string()
      .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP deve estar no formato 00000-000'),
    rua: zod.string().min(1, 'Rua não pode ficar em branco'),
    numero: zod.string().min(1, 'Número não pode ficar em branco').max(7),
    complemento: zod.string(),
    bairro: zod.string().min(1, 'Bairro não pode ficar em branco'),
    cidade: zod.string().min(1, 'Cidade não pode ficar em branco'),
    uf: zod
      .string()
      .min(1, 'UF não pode ficar em branco')
      .length(2, 'UF invalido'),
    paymentOption: zod.string().min(1, 'Selecione uma forma de pagamento'),
  })
  .partial({ complemento: true })

type CheckoutFormType = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { itens } = useContext(CartContext)
  const navigate = useNavigate()
  const { createDeliveyAddress } = useContext(DeliveryAddressContext)

  const checkoutForm = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentOption: '',
    },
  })

  const { handleSubmit } = checkoutForm

  function handleCreateAddress(data: CheckoutFormType) {
    createDeliveyAddress(data)
    navigate('/order')
  }

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
