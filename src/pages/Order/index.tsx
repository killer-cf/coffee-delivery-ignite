import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { DeliveryAddressContext } from '../../contexts/DeliveryAddressContext'
import {
  IconCircle,
  InfoBox,
  InfoBoxesContainer,
  OrderContent,
  OrderSuccessContainer,
} from './styles'

export function Order() {
  const { deliveryAddress } = useContext(DeliveryAddressContext)

  let { cidade, paymentOption, numero, uf, rua, bairro } = deliveryAddress

  if (paymentOption === 'credit-card') {
    paymentOption = 'Cartão de Crédito'
  } else if (paymentOption === 'debit-card') {
    paymentOption = 'Cartão de Débito'
  } else {
    paymentOption = 'Dinheiro'
  }

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
                <p>{`${bairro} - ${cidade}, ${uf}`}</p>
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
        <img src="/confirmed-image.svg" alt="homem correndo de moto" />
      </OrderContent>
    </OrderSuccessContainer>
  )
}
