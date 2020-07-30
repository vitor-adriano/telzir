import styled from 'styled-components'

import { StyledHeader } from 'components/typo/styles'

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);

  ${StyledHeader} + & {
    margin-top: -10px;
  }

  & > ${StyledHeader} {
    padding-right: 0px;
    padding-left: 0px;
  }
`
