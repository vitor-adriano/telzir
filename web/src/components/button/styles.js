import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const buttonStyles = css`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  border: 0;
  border-radius: 4px;
  background: var(--primary);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 3px var(--primary);
  }

  &:disabled {
    background: #bbb;
    cursor: initial;
  }
`

const smallStyles = css`
  height: 40px;
  font-size: 16px;
  line-height: 40px;
`

export default styled.button`
  ${buttonStyles};
  height: 56px;
  font-size: 20px;
  line-height: 56px;

  ${props => props.small && smallStyles}
`

export const StyledLink = styled(Link)`
  ${buttonStyles};
  ${smallStyles};
`
