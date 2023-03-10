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
  const { src, desc, name, value, flags } = coffeData

  function handleAddItemToCart() {
    const item = {
      name,
      src,
      value,
      quantity: itemQuantity,
    }

    itemQuantity >= 1 && createNewItem(item)
  }

  const valueFormated = value.toFixed(2).toString().replace('.', ',')

  return (
    <CoffeeItemContainer>
      <img src={src} alt="" />
      <FlagsContainer>
        {flags.map((flag: string) => (
          <div key={flag}>
            <h3>{flag}</h3>
          </div>
        ))}
      </FlagsContainer>
      <CoffeeInfo>
        <h2>{name}</h2>
        <p>{desc}</p>
      </CoffeeInfo>
      <Footer>
        <Price>
          <p>
            R$<span>{valueFormated}</span>
          </p>
        </Price>
        <CartActions>
          <div>
            <button
              disabled={itemQuantity === 1}
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
