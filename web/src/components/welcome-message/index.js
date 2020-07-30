import React from 'react'

import StyledComponent from './styles'

const WelcomeMessage = ({ name }) => {
  return (
    <StyledComponent>
      <span>
        Bem-vindo, <strong>{name}</strong>
      </span>
    </StyledComponent>
  )
}

export default WelcomeMessage
