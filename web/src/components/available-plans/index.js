import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { receiveLogin } from 'actions/user'
import api from 'services/api'

import Card from 'components/card'
import Button from 'components/button'

import StyledComponent from './styles'

const AvailablePlans = ({ price, minutes, plans }) => {
  const { plan_id } = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const history = useHistory()

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

  const handleSubmit = async event => {
    event.preventDefault()

    const plan_id = Number(event.target.plan_id.value) || null

    try {
      const { data: token } = await api.put('/update-plan', { plan_id })

      dispatch(receiveLogin(token))

      history.push('/dashboard')
    } catch (e) {
      //
    }

    // dispatch(updateUser({ plan_id }))
  }

  return (
    <StyledComponent>
      <div>
        <Card>
          <form onSubmit={handleSubmit}>
            <h3>Sem plano</h3>
            <span>Sem minutos gratuitos</span>
            <div>
              <span>
                R$ <span>{localeString(price * minutes)}</span>
              </span>
              <Button name="plan_id" submit small disabled={!plan_id} value="0">
                {plan_id ? 'Contratar' : 'Selecionado'}
              </Button>
            </div>
          </form>
        </Card>
      </div>

      {pricePerPlan.map(plan => (
        <div key={plan.id}>
          <Card>
            <form onSubmit={handleSubmit}>
              <h3>{plan.name}</h3>
              <span>{plan.free_minutes} minutos gratuitos</span>
              <div>
                <span>
                  R$ <span>{localeString(plan.price)}</span>
                </span>
                <Button
                  name="plan_id"
                  submit
                  small
                  disabled={plan.id === plan_id}
                  value={plan.id}>
                  {plan.id === plan_id ? 'Selecionado' : 'Contratar'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      ))}
    </StyledComponent>
  )
}

export default AvailablePlans
