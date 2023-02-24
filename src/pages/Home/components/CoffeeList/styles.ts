import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 8rem;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  h1 {
    grid-column: span 4;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 3.375rem;
  }

  @media screen and (max-width: 1370px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    h1 {
      grid-column: span 3;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    h1 {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 590px) {
    grid-template-columns: 1fr;
    h1 {
      grid-column: span 1;
    }
  }
`
