import { Trash } from 'phosphor-react'
import {
  BottonRemove,
  CartActions,
  ItemContainer,
  ItemInfoAndActions,
  PriceItemQuant,
} from './styles'
import { Item } from '../../../../reducers/cart/reducer'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface ItemProps {
  itemData: Item
}

export function CartItem({ itemData }: ItemProps) {
  const { decItemQuantity, sumItemQuantity, removeItem } =
    useContext(CartContext)

  function handleDecItemQuantity() {
    decItemQuantity(itemData.name)
  }

  function handleSumItemQuantity() {
    sumItemQuantity(itemData.name)
  }

  function handleRemoveItem() {
    removeItem(itemData.name)
  }

  const itemTotal = itemData.value * parseFloat(itemData.quantity.toFixed(2))
  const itemTotalFormated = itemTotal.toFixed(2).toString().replace('.', ',')

  return (
    <ItemContainer>
      <ItemInfoAndActions>
        <img src={itemData.src} alt="" />
        <div className="title">
          <h2>{itemData.name}</h2>
          <CartActions>
            <div>
              <button onClick={handleDecItemQuantity} type="button">
                <span>-</span>
              </button>
              <p>{itemData.quantity}</p>
              <button onClick={handleSumItemQuantity} type="button">
                <span>+</span>
              </button>
            </div>
            <BottonRemove onClick={handleRemoveItem} type="button">
              <Trash size={16} />
              REMOVER
            </BottonRemove>
          </CartActions>
        </div>
      </ItemInfoAndActions>
      <PriceItemQuant>
        <h5>R$ {itemTotalFormated}</h5>
      </PriceItemQuant>
    </ItemContainer>
  )
}
