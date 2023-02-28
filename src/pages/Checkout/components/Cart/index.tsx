import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem } from '../Item'
import { CartCard, TotalBox } from './styles'

export function Cart() {
  const { itens } = useContext(CartContext)

  return (
    <CartCard>
      <div>
        {itens.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <TotalBox>
        <div>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </div>
        <div>
          <h2>Total</h2>
          <h2>R$ 33,20</h2>
        </div>
      </TotalBox>
      <button type="submit">CONFIRMAR PEDIDO</button>
    </CartCard>
  )
}
