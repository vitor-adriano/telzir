import React from 'react'
import immer from 'immer'

import AvailablePlans from 'components/available-plans'
import { Header } from 'components/typo'
import Card from 'components/card'
import Input from 'components/input'

import api from 'services/api'

const Prices = () => {
  const [data, setData] = React.useState({
    fetched: false,
    tariffs: [],
    plans: [],
  })

  const [state, setState] = React.useState({
    origin: '0',
    destination: '0',
    minutes: '20',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setState(
      immer(draft => {
        draft[name] = value

        if (name === 'origin') {
          draft.destination = '0'
        }
      })
    )
  }

  const availableDestinations = React.useMemo(() => {
    const response = data.tariffs[state.origin] || {}
    return response.destinations
  }, [data.tariffs, state.origin])

  React.useEffect(() => {
    const boot = async () => {
      const [tariffs, plans] = await Promise.all([
        api.get('/tariffs'),
        api.get('/plans'),
      ])

      setData(
        immer(draft => {
          draft.fetched = true
          draft.tariffs = tariffs.data.data
          draft.plans = plans.data.data
        })
      )
    }

    boot()
  }, [])

  return data.fetched ? (
    <>
      <Header goBack>Comparar preços</Header>

      <Card>
        <Input.Label>DDD de origem</Input.Label>
        <Input.Select
          name="origin"
          value={state.origin}
          onChange={handleChange}>
          {data.tariffs.map(({ code }, i) => (
            <option key={i} value={i}>
              {code}
            </option>
          ))}
        </Input.Select>

        <Input.Label>DDD de destino</Input.Label>
        <Input.Select
          name="destination"
          value={state.destination}
          onChange={handleChange}>
          {availableDestinations.map(({ code, price }, i) => (
            <option key={i} value={i}>
              {code} (
              {price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) + ' por minuto'}
              )
            </option>
          ))}
        </Input.Select>

        <Input.Label>Minutos em ligações</Input.Label>
        <Input.Text
          type="number"
          min="1"
          name="minutes"
          value={state.minutes}
          onChange={handleChange}
        />
      </Card>

      <AvailablePlans
        price={availableDestinations[state.destination].price}
        minutes={state.minutes}
        plans={data.plans}
      />
    </>
  ) : (
    <div>
      <span>Carregando informações</span>
    </div>
  )
}

export default Prices
