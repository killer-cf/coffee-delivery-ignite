import {
  CartLinkContainer,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <NavContainer>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <p>Recife, PE</p>
        </LocationContainer>
        <CartLinkContainer>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </CartLinkContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
