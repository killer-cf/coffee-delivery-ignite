import { Trash } from 'phosphor-react'
import {
  BottonRemove,
  CartActions,
  ItemContainer,
  ItemInfoAndActions,
  PriceItemQuant,
} from './styles'
import TraditionalExpress from '../../../../assets/express.svg'

export function Item() {
  return (
    <ItemContainer>
      <ItemInfoAndActions>
        <img src={TraditionalExpress} alt="" />
        <div className="title">
          <h2>Expresso Tradicional</h2>
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
            <BottonRemove type="button">
              <Trash size={16} />
              REMOVER
            </BottonRemove>
          </CartActions>
        </div>
      </ItemInfoAndActions>
      <PriceItemQuant>
        <h5>R$ 9,90</h5>
      </PriceItemQuant>
    </ItemContainer>
  )
}
