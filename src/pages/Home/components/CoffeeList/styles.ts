import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 3.375rem;
  padding-bottom: 8rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
