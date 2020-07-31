import styled from 'styled-components'

import StyledInput from 'components/input/styles'

export const StyledHeader = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;

  & > a,
  & > h2 {
    vertical-align: bottom;
  }

  & > a {
    width: 28px;
    height: 28px;
    padding: 0;
    border: 0;

    & > svg {
      width: inherit;
      height: inherit;
      fill: var(--primary);
    }
  }

  & > h2 {
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const StyledWarning = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary);

  ${StyledInput} + & {
    margin-top: -15px;
  }
`
