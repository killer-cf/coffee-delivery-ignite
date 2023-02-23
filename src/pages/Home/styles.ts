import styled from 'styled-components'

export const HomeContainer = styled.main``

export const IntroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5.75rem 0;
  gap: 4.66rem;
`

export const IntroInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TitleContainer = styled.div`
  max-width: 36.75rem;
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }
`

export const BenefitsContainer = styled.div`
  max-width: 36.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  font-size: 1rem;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.white};
  }
`

const BackColor = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface BackColorProps {
  backColor: keyof typeof BackColor
}

export const BenefitItem = styled.div<BackColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: ${(props) => props.theme[BackColor[props.backColor]]};
`

export const IntroImgContainer = styled.div``
