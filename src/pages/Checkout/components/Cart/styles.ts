import styled from 'styled-components'

export const CartCard = styled.div`
  width: 28rem;
  margin-top: 0.9375rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  button {
    margin-top: 1.5rem;
    width: 100%;
    height: 2.875rem;
    padding: 0.75rem 0.5rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const Item = styled.div``

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      line-height: 1.3;
    }

    span {
      font-size: 1rem;
      line-height: 1.3;
    }

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.3;
    }
  }
`
