import { CoffeeItem } from '../CoffeeItem'
import { CoffeeListContainer, ListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ListContainer>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </ListContainer>
    </CoffeeListContainer>
  )
}
