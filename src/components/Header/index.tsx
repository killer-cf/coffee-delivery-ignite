import {
  CartLinkContainer,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

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
          <ShoppingCart weight="fill" size={22} />
        </CartLinkContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
