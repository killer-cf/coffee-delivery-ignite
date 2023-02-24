import {
  ButtonAddToCart,
  CartActions,
  CoffeeInfo,
  CoffeeItemContainer,
  FlagsContainer,
  Footer,
  Price,
} from './styles'
import CoffeeTraditionalExpress from '../../../../assets/coffee-traditional-express.svg'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <img src={CoffeeTraditionalExpress} alt="" />
      <FlagsContainer>
        <div>
          <h3>TRADICIONAL</h3>
        </div>
      </FlagsContainer>
      <CoffeeInfo>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeInfo>
      <Footer>
        <Price>
          <p>
            R$<span>9,90</span>
          </p>
        </Price>
        <CartActions>
          <div>
            <button type="button">
              <span>-</span>
            </button>
            <p>1</p>
            <button type="button">
              <span>+</span>
            </button>
          </div>
          <ButtonAddToCart type="button">
            <ShoppingCart weight="fill" size={22} />
          </ButtonAddToCart>
        </CartActions>
      </Footer>
    </CoffeeItemContainer>
  )
}
