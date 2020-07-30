import styled from 'styled-components'

import StyledCard from 'components/card/styles'

export default styled(StyledCard)`
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    flex: 0 0 100%;
    margin-bottom: 20px;

    & > h3 {
      color: var(--primary);
      font-size: 36px;
    }

    & > span {
      color: #666;
    }
  }

  & > a {
    width: auto;
  }
`
