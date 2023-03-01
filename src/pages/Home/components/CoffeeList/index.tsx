import { CoffeeItem } from '../CoffeeItem'
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
  const coffes: Coffee[] = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      desc: 'O tradicional café feito com água quente e grãos moídos',
      src: 'src/assets/express.svg',
      value: 8.9,
      stock: 10,
    },
  ]

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
