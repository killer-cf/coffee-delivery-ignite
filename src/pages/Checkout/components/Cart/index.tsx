import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem } from '../Item'
import { CartCard, TotalBox } from './styles'

export function Cart() {
  const { itens } = useContext(CartContext)

  const itensTotal = itens.reduce((total, item) => {
    return (total += item.value * item.quantity)
  }, 0)

  const freight = 5.0
  const total = itensTotal + freight
  const freightFormated = freight.toFixed(2).toString().replace('.', ',')
  const itensTotalFormated = itensTotal.toFixed(2).toString().replace('.', ',')
  const totalFormated = total.toFixed(2).toString().replace('.', ',')

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
          <span>R$ {itensTotalFormated}</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>R$ {freightFormated}</span>
        </div>
        <div>
          <h2>Total</h2>
          <h2>R$ {totalFormated}</h2>
        </div>
      </TotalBox>
      <button type="submit">CONFIRMAR PEDIDO</button>
    </CartCard>
  )
}
