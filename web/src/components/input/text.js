import React from 'react'

import StyledComponent from './styles'

const TextInput = props => {
  return <StyledComponent as="input" {...props} autoComplete="off" />
}

export default TextInput
