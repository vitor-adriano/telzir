import styled from 'styled-components'

import StyledInput from 'components/input/styles'

export const StyledHeader = styled.h2`
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
`

export const StyledWarning = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary);

  ${StyledInput} + & {
    margin-top: -10px;
  }
`
