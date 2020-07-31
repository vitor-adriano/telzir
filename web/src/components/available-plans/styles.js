import styled from 'styled-components'

import StyledCard from 'components/card/styles'
import StyledButton from 'components/button/styles'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -10px;
  margin-left: -10px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  & > div {
    display: flex;
    flex: 1;
    padding: 0 20px;

    & > ${StyledCard} {
      flex: 1;
      margin-right: -10px;
      margin-left: -10px;
      color: #666;
      text-align: center;

      & h3 {
        font-size: 16px;
        text-transform: uppercase;

        & + span {
          font-size: 14px;
        }

        & ~ div {
          padding: 10px 0 0;
          // margin-top: auto;

          & > span {
            color: #999;
            font-weight: 600;

            & > span {
              color: #666;
              font-size: 32px;
              font-weight: 700;
            }
          }

          & > ${StyledButton} {
            margin-top: 20px;
          }
        }
      }
    }
  }
`
