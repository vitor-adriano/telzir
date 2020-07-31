import React from 'react'
import { useSelector } from 'react-redux'

import WelcomeMessage from 'components/welcome-message'
import UserPlan from 'components/user-plan'
import { Header } from 'components/typo'

const Dashboard = () => {
  const { name, plan_id, plan } = useSelector(state => state.user.user)

  return (
    <>
      <WelcomeMessage name={name} />

      <Header>Meu plano</Header>

      <UserPlan id={plan_id} plan={plan} />
    </>
  )
}

export default Dashboard
