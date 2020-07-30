import styled from 'styled-components'

import StyledCard from 'components/card/styles'

export default styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  padding: 75px 0;
  background: radial-gradient(
    100% 270.84% at 0% 100%,
    var(--primary) 0%,
    var(--tertiary) 100%
  );

  & > div {
    flex: 0 0 280px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
      flex: 0 0 360px;
    }

    & > ${StyledCard} {
      padding: 30px 20px 40px;
    }
  }
`
