import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
`

export const ItemInfoAndActions = styled.div`
  display: flex;
  margin: 0.5rem 0.25rem;
  gap: 1.25rem;

  .title {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  img {
    width: 4rem;
  }
`

export const PriceItemQuant = styled.div`
  min-width: 3.4375rem;
  margin-top: 0.5rem;
  h5 {
    width: 4rem;
    text-align: right;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
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
      flex: 1;
      border: 0;
      background: ${(props) => props.theme['base-button']};
      cursor: pointer;

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

export const BottonRemove = styled.button`
  border: 0;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
