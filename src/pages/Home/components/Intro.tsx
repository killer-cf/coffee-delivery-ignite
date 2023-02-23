import {
  Benefit,
  BenefitItem,
  BenefitsContainer,
  IntroContainer,
  IntroImgContainer,
  IntroInfoContainer,
  TitleContainer,
} from '../styles'
import CupOfCoffee from '../../../assets/cup-of-coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfoContainer>
        <TitleContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <BenefitsContainer>
          <Benefit>
            <BenefitItem backColor="yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </BenefitItem>
            <p>Compra simples e segura</p>
          </Benefit>
          <Benefit>
            <BenefitItem backColor="gray">
              <Package weight="fill" size={16} />
            </BenefitItem>
            <p>Embalagem mantém o café intacto</p>
          </Benefit>
          <Benefit>
            <BenefitItem backColor="yellow">
              <Timer weight="fill" size={16} />
            </BenefitItem>
            <p>Entrega rápida e rastreada</p>
          </Benefit>
          <Benefit>
            <BenefitItem backColor="purple">
              <Coffee weight="fill" size={16} />
            </BenefitItem>
            <p>O café chega fresquinho até você</p>
          </Benefit>
        </BenefitsContainer>
      </IntroInfoContainer>
      <IntroImgContainer>
        <img src={CupOfCoffee} alt="Copo de café" />
      </IntroImgContainer>
    </IntroContainer>
  )
}
