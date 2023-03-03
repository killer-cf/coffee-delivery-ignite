import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 2.5rem);
  }
`

export const FlagsContainer = styled.div`
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  gap: 0.25rem;

  div {
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  div h3 {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
  }
`
export const CoffeeInfo = styled.div`
  text-align: center;
  margin-bottom: 2.062rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.3;
  }
`
export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: baseline;
  padding: 0 0.25rem;
`

export const Price = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-text']};

  p {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-style: normal;
    line-height: 1.3;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding-left: 0.25rem;
  }
`
export const CartActions = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    width: 4.5rem;
    height: 2.375rem;
    border-radius: 6px;

    p {
      width: 1.25rem;
      text-align: center;
    }

    button {
      cursor: pointer;
      flex: 1;
      border: 0;
      background: ${(props) => props.theme['base-button']};

      :hover {
        span {
          font-weight: 600;
        }
      }
      :disabled {
        opacity: 0.5;
      }
    }

    span {
      color: ${(props) => props.theme.purple};
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
export const ButtonAddToCart = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.white};
  }

  :hover {
    background: ${(props) => props.theme.purple};
  }
`
