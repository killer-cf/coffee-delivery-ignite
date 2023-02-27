import styled from 'styled-components'

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

  div {
    flex: 1;
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

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  div {
    flex: 1;
    display: flex;
  }

  button {
    flex: 1;
    min-width: 8.125rem;
    height: 3.1875rem;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      label span {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    label {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    label span {
      flex: 1;
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;
      line-height: 1.6;
      text-align: left;
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  input {
    display: none;
  }

  input:checked + button {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
