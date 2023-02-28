import styled from 'styled-components'

export const AddressCard = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .flex {
    display: flex;
    width: 100%;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .mobal {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .optional-input {
      display: flex;
      width: 100%;

      div {
        width: 0;
        height: 0;
        position: relative;
        left: -4.0625rem;
        top: 0.875rem;
        color: ${(props) => props.theme['base-label']};
        font-size: 0.75rem;
        font-style: italic;
        line-height: 1.3;
      }
    }

    @media screen and (max-width: 478px) {
      flex-direction: column;
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

  div {
    flex: 1;
  }
`

export const AddressCardTitle = styled(BaseTitle)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.75rem;
  border-radius: 4px;
  height: 2.625rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1060px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 478px) {
    width: 100%;
  }
`
export const StreetInput = styled(BaseInput)`
  margin-bottom: 1rem;
`
export const NumbertInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.75rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1060px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 478px) {
    width: 100%;
  }
`
export const ComplementInput = styled(BaseInput)`
  margin-bottom: 1rem;
  flex: 1;

  &::after {
    content: 'Opcional';
    width: 20px;
    height: 20px;
    background-color: red;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 478px) {
    width: 100%;
  }
`

export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1060px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`
export const CityInput = styled(BaseInput)`
  width: 12.5rem;
  flex: 1;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 45%;
  }
`
export const UfInput = styled(BaseInput)`
  max-width: 3.75rem;
  margin-bottom: 1rem;
  flex: 1;
`
