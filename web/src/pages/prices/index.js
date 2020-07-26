import React from 'react'
import immer from 'immer'
import { find } from 'lodash'

import api from 'services/api'

const Prices = () => {
  const [data, setData] = React.useState({
    fetched: false,
    tariffs: [],
    plans: [],
  })

  const [state, setState] = React.useState({
    origin: 0,
    destination: 0,
    minutes: 1,
  })

  const handleOrigin = event => {
    const { value } = event.target
    setState(
      immer(draft => {
        draft.origin = Number(value)
        draft.destination = 0
      })
    )
  }

  const handleDestination = event => {
    const { value } = event.target
    setState(
      immer(draft => {
        draft.destination = Number(value)
      })
    )
  }

  const handleMinutes = event => {
    const { value } = event.target
    setState(
      immer(draft => {
        draft.minutes = Number(value)
      })
    )
  }

  const availableDestinations = React.useMemo(() => {
    const origin = find(data.tariffs, ({ id }) => id === state.origin) || {}
    return origin.destinations
  }, [data.tariffs, state.origin])

  const calcPrice = React.useCallback(
    (freeMinutes = 0) => {
      const pricePerMinute = find(data.tariffs, ({ id }) => id === state.origin)
        .destinations[state.destination].price
      const exceededMinutes = Math.max(freeMinutes, state.minutes) - freeMinutes
      const totalValue =
        exceededMinutes * pricePerMinute * (freeMinutes ? 1.1 : 1)
      return totalValue.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    },
    [data.tariffs, state, availableDestinations]
  )

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
    <div>
      <h3>Preços</h3>

      <div>
        <strong>DDD de origem</strong>
        <select defaultValue={0} onChange={handleOrigin}>
          <option value={0} disabled>
            Selecione uma opção
          </option>
          {data.tariffs.map(({ id, code }, i) => (
            <option key={i} value={id}>
              {code}
            </option>
          ))}
        </select>
      </div>

      {!!state.origin && (
        <div>
          <strong>DDD de destino</strong>
          <select defaultValue={0} onChange={handleDestination}>
            {availableDestinations.map(({ code }, i) => (
              <option key={i} value={i}>
                {code}
              </option>
            ))}
          </select>
        </div>
      )}

      {!!state.origin && (
        <div>
          <strong>Minutos em ligações</strong>
          <input
            type="number"
            min={1}
            value={state.minutes}
            onChange={handleMinutes}
          />
        </div>
      )}

      {!!state.origin && (
        <table style={{ border: '1px solid' }}>
          <thead>
            <tr>
              <th>Sem plano</th>
              {data.plans.map(plan => (
                <th key={plan.id}>{plan.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{calcPrice()}</td>
              {data.plans.map((plan, i) => (
                <td key={i}>{calcPrice(plan.free_minutes)}</td>
              ))}
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td />
              <td colSpan={data.plans.length}>
                Total referente a 10% do valor do minuto excedente do limite da
                promoção.
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  ) : (
    <div>
      <span>Carregando informações</span>
    </div>
  )
}

export default Prices
