import { Trash } from 'phosphor-react'
import {
  BottonRemove,
  CartActions,
  ItemContainer,
  ItemInfoAndActions,
  PriceItemQuant,
} from './styles'
import { Item } from '../../../../reducers/cart/reducer'

interface ItemProps {
  itemData: Item
}

export function CartItem({ itemData }: ItemProps) {
  return (
    <ItemContainer>
      <ItemInfoAndActions>
        <img src={itemData.src} alt="" />
        <div className="title">
          <h2>{itemData.name}</h2>
          <CartActions>
            <div>
              <button type="button">
                <span>-</span>
              </button>
              <p>{itemData.quantity}</p>
              <button type="button">
                <span>+</span>
              </button>
            </div>
            <BottonRemove type="button">
              <Trash size={16} />
              REMOVER
            </BottonRemove>
          </CartActions>
        </div>
      </ItemInfoAndActions>
      <PriceItemQuant>
        <h5>R$ {itemData.value}</h5>
      </PriceItemQuant>
    </ItemContainer>
  )
}
