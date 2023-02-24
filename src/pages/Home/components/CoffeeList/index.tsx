import { CoffeeItem } from '../CoffeeItem'
import { CoffeeListContainer, ListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <ListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </ListContainer>
    </CoffeeListContainer>
  )
}
