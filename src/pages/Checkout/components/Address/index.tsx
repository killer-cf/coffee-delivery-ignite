import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
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
  const { register } = useFormContext()

  return (
    <AddressCard>
      <AddressCardTitle>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressCardTitle>

      <CepInput type="text" placeholder="CEP" {...register('cep')} />

      <StreetInput type="text" placeholder="Rua" {...register('rua')} />

      <div className="mobal">
        <NumbertInput
          type="text"
          placeholder="Número"
          {...register('numero')}
        />
        <div className="optional-input">
          <ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <div>Opcional</div>
        </div>
      </div>

      <div className="flex">
        <DistrictInput
          type="text"
          placeholder="Bairro"
          {...register('bairro')}
        />
        <CityInput type="text" placeholder="Cidade" {...register('cidade')} />
        <UfInput type="text" placeholder="UF" {...register('uf')} />
      </div>
    </AddressCard>
  )
}
