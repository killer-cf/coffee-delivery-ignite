import { Item } from '../Item'
import { CartCard, TotalBox } from './styles'

export function Cart() {
  return (
    <CartCard>
      <div>
        <Item />
        <Item />
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
