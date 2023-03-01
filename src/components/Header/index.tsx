import { HeaderContainer, LocationContainer, NavContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { itens } = useContext(CartContext)

  const itensTotal = itens.reduce((total, item) => {
    return (total += item.quantity)
  }, 0)

  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <NavContainer>
        {itensTotal > 0 && (
          <div className="boll">
            <p>{itensTotal}</p>
          </div>
        )}
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <p>Recife, PE</p>
        </LocationContainer>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
