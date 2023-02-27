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
export const BaseTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    padding-bottom: 0.125;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const PaymentCard = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const PaymentCardTitle = styled(BaseTitle)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartCard = styled.div``
