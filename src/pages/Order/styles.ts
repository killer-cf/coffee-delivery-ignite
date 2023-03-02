import styled from 'styled-components'

export const OrderSuccessContainer = styled.main`
  width: 100%;
  margin-top: 5rem;

  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
  }

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  > div {
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
`

export const OrderContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6.375rem;

  img {
    width: 45%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      max-width: 30.75rem;
    }
  }

  .border {
    width: 55%;
    margin-top: 2.5rem;
    --secondary2: ${(props) => props.theme.yellow};
    --primary2: ${(props) => props.theme.purple};
    background: linear-gradient(to right, var(--secondary2), var(--primary2));
    border-radius: 6px 36px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      max-width: 32.875rem;
    }
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`
export const InfoBoxesContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  background-color: ${(props) => props.theme.background};
  background-clip: padding-box;
  border-radius: 6px 36px;
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
`
export const BaseIconCircle = styled.div`
  display: flex;
  margin-right: 0.75rem;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  svg {
    color: ${(props) => props.theme.white};
  }
`

const BackColor = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface BackColorProps {
  backColor: keyof typeof BackColor
}

export const IconCircle = styled(BaseIconCircle)<BackColorProps>`
  background-color: ${(props) => props.theme[BackColor[props.backColor]]};
`
