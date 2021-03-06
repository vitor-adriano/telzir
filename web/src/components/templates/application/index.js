import React from 'react'

import Navigation from 'components/navigation'

import StyledComponent from './styles'

const ApplicationTemplate = ({ children }) => {
  return (
    <>
      <Navigation />

      <StyledComponent>{children}</StyledComponent>
    </>
  )
}

export default ApplicationTemplate
