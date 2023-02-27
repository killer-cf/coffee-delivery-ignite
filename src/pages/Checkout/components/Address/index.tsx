import { MapPinLine } from 'phosphor-react'
import {
  AddressCard,
  AddressCardTitle,
  CepInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  NumbertInput,
  StreetInput,
  UfInput,
} from './styles'

export function Address() {
  return (
    <AddressCard>
      <AddressCardTitle>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressCardTitle>

      <CepInput type="text" name="cep" placeholder="CEP" />

      <StreetInput type="text" name="rua" placeholder="Rua" />

      <div className="mobal">
        <NumbertInput type="text" name="numero" placeholder="Número" />
        <div className="optional-input">
          <ComplementInput
            type="text"
            name="complemento"
            placeholder="Complemento"
          />
          <div>Opcional</div>
        </div>
      </div>

      <div className="flex">
        <DistrictInput type="text" name="bairro" placeholder="Bairro" />
        <CityInput type="text" name="cidade" placeholder="Cidade" />
        <UfInput type="text" name="uf" placeholder="UF" />
      </div>
    </AddressCard>
  )
}
