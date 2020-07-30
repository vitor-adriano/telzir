import React from 'react'

import StyledComponent from './styles'

const Button = ({ submit, ...props }) => {
  return <StyledComponent {...props} type={submit ? 'submit' : 'button'} />
}

Button.defaultProps = {
  submit: false,
}

export default Button
