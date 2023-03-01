import { CoffeeItem } from '../CoffeeItem'
import { data } from './data'
import { CoffeeListContainer, ListContainer } from './styles'

export interface Coffee {
  id: number
  name: string
  desc: string
  src: string
  value: number
  stock: number
}

export function CoffeeList() {
  const coffes: Coffee[] = data

  return (
    <CoffeeListContainer>
      <ListContainer>
        <h1>Nossos cafés</h1>

        {coffes.map((coffee) => (
          <CoffeeItem key={coffee.id} coffeData={coffee} />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
