import React from 'react'

import StyledComponent from './styles'

const ApplicationTemplate = ({ children }) => {
  return (
    <StyledComponent>
      <div>{children}</div>
    </StyledComponent>
  )
}

export default ApplicationTemplate
