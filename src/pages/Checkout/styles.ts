import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .box-1 {
    max-width: 40rem;
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .box-1 {
      width: 100%;
    }
  }
`

export const CartCard = styled.div``
