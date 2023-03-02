import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { CheckoutForm, EmptyCart } from './styles'

export function Checkout() {
  const { itens } = useContext(CartContext)

  if (itens.length > 0) {
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
  } else {
    return (
      <EmptyCart>
        <h2>Carrinho vazio</h2>
        <NavLink to="/">Voltar para home</NavLink>
      </EmptyCart>
    )
  }
}
