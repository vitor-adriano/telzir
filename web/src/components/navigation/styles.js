import styled from 'styled-components'

export default styled.nav`
  height: 64px;
  background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);

  & > nav {
    display: flex;
    align-items: center;
    max-width: 1024px;
    height: inherit;
    padding: 0 20px;
    margin-right: auto;
    margin-left: auto;

    & > svg {
      width: 40px;
      height: 40px;
    }

    & > button {
      margin-left: auto;
      border: 0;
      background: none;
      cursor: pointer;

      & > svg {
        width: 30px;
        height: 30px;
        fill: #fff;
      }
    }
  }
`
