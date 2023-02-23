import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
`
export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  width: 8.9375rem;
  height: 2.375rem;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  p,
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartLinkContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
