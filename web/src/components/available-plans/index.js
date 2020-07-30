import React from 'react'
import { useSelector } from 'react-redux'

import Card from 'components/card'
import Button from 'components/button'

import StyledComponent from './styles'

const AvailablePlans = ({ price, minutes, plans }) => {
  const { plan_id } = useSelector(state => state.user.user)

  const localeString = value =>
    value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
    })

  const pricePerPlan = React.useMemo(() => {
    return plans.map(({ id, name, free_minutes }) => ({
      id,
      name,
      free_minutes,
      price: (Math.max(free_minutes, minutes) - free_minutes) * (price * 1.1),
    }))
  }, [price, minutes, plans])

  return (
    <StyledComponent>
      <div>
        <Card>
          <h3>Sem plano</h3>
          <span>Sem minutos gratuitos</span>
          <div>
            <span>
              R$ <span>{localeString(price * minutes)}</span>
            </span>
            <Button disabled={!plan_id} small>
              {plan_id ? 'Contratar' : 'Selecionado'}
            </Button>
          </div>
        </Card>
      </div>

      {pricePerPlan.map(plan => (
        <div key={plan.id}>
          <Card>
            <h3>{plan.name}</h3>
            <span>{plan.free_minutes} minutos gratuitos</span>
            <div>
              <span>
                R$ <span>{localeString(plan.price)}</span>
              </span>
              <Button disabled={plan.id === plan_id} small>
                {plan.id === plan_id ? 'Selecionado' : 'Contratar'}
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </StyledComponent>
  )
}

export default AvailablePlans
