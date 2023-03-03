import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import {
  HeaderContainer,
  InvisibleDid,
  LocationContainer,
  NavContainer,
} from './styles'
import Logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { DeliveryAddressContext } from '../../contexts/DeliveryAddressContext'

export function Header() {
  const { itens } = useContext(CartContext)
  const { deliveryAddress } = useContext(DeliveryAddressContext)

  const { cidade, uf } = deliveryAddress

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
        {!!cidade && !!uf ? (
          <LocationContainer>
            <MapPin weight="fill" size={22} />
            <p>{`${cidade}, ${uf}`}</p>
          </LocationContainer>
        ) : (
          <InvisibleDid />
        )}
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
