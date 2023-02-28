import {
  ButtonAddToCart,
  CartActions,
  CoffeeInfo,
  CoffeeItemContainer,
  FlagsContainer,
  Footer,
  Price,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../CoffeeList'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffeData: Coffee
}

export function CoffeeItem({ coffeData }: CoffeeItemProps) {
  const { createNewItem } = useContext(CartContext)
  const [itemQuantity, setItemQuantity] = useState(1)
  const { src, desc, name, value } = coffeData

  function handleAddItemToCart() {
    const item = {
      name,
      src,
      value,
      quantity: itemQuantity,
    }

    createNewItem(item)
  }

  return (
    <CoffeeItemContainer>
      <img src={src} alt="" />
      <FlagsContainer>
        <div>
          <h3>TRADICIONAL</h3>
        </div>
      </FlagsContainer>
      <CoffeeInfo>
        <h2>{name}</h2>
        <p>{desc}</p>
      </CoffeeInfo>
      <Footer>
        <Price>
          <p>
            R$<span>{value}</span>
          </p>
        </Price>
        <CartActions>
          <div>
            <button
              onClick={() => setItemQuantity(itemQuantity - 1)}
              type="button"
            >
              <span>-</span>
            </button>
            <p>{itemQuantity}</p>
            <button
              onClick={() => setItemQuantity(itemQuantity + 1)}
              type="button"
            >
              <span>+</span>
            </button>
          </div>
          <ButtonAddToCart onClick={handleAddItemToCart} type="button">
            <ShoppingCart weight="fill" size={22} />
          </ButtonAddToCart>
        </CartActions>
      </Footer>
    </CoffeeItemContainer>
  )
}
