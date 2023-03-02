import { useContext } from 'react'

import { DeliveryAddressContext } from '../../contexts/DeliveryAddressContext'
import {
  IconCircle,
  InfoBox,
  InfoBoxesContainer,
  OrderContent,
  OrderSuccessContainer,
} from './styles'
import confirmedImage from '../../assets/confirmed-image.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Order() {
  const { deliveryAddress } = useContext(DeliveryAddressContext)

  const { cidade, paymentOption, numero, uf, rua, bairro } = deliveryAddress
  return (
    <OrderSuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <OrderContent>
        <div className="border">
          <InfoBoxesContainer>
            <InfoBox>
              <IconCircle backColor="purple">
                <MapPin size={16} weight="fill" />
              </IconCircle>
              <div>
                <p>
                  Entrega em <strong>{`${rua}, ${numero}`}</strong>
                </p>
                <p>{`${bairro} - ${cidade}, ${uf.toUpperCase()}`}</p>
              </div>
            </InfoBox>

            <InfoBox>
              <IconCircle backColor="yellow">
                <Timer size={16} weight="fill" />
              </IconCircle>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </InfoBox>

            <InfoBox>
              <IconCircle backColor="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </IconCircle>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentOption}</strong>
              </div>
            </InfoBox>
          </InfoBoxesContainer>
        </div>
        <img src={confirmedImage} alt="homem correndo de moto" />
      </OrderContent>
    </OrderSuccessContainer>
  )
}
