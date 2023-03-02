import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .box-1 {
    flex: 1;
  }

  .box-2 {
    min-width: 23.875rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .box-1 {
      width: 100%;
    }
  }
`

export const EmptyCart = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
