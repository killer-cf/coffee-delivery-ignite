import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  AddressCard,
  AddressCardTitle,
  CepInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  ErrorContainer,
  NumbertInput,
  StreetInput,
  UfInput,
} from './styles'

export function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

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
      <ErrorContainer>
        {errors.cep?.message && <p>{errors.cep?.message?.toString()}</p>}
        {errors.rua?.message && <p>{errors.rua?.message?.toString()}</p>}
        {errors.numero?.message && <p>{errors.numero?.message?.toString()}</p>}
        {errors.bairro?.message && <p>{errors.bairro?.message?.toString()}</p>}
        {errors.cidade?.message && <p>{errors.cidade?.message?.toString()}</p>}
        {errors.uf?.message && <p>{errors.uf?.message?.toString()}</p>}
      </ErrorContainer>
    </AddressCard>
  )
}
