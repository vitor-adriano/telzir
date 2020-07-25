import React from 'react'

import Navigation from 'components/navigation'

const ApplicationTemplate = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  )
}

export default ApplicationTemplate
