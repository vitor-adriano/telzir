import styled from 'styled-components'

export default styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  margin-bottom: 20px;
  border: 0;
  border-radius: 4px;
  background: var(--light-gray);

  &:focus {
    box-shadow: 0 0 0 3px var(--primary);
  }
`

export const StyledLabel = styled.span`
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 5px;
  color: var(--primary);
  font-weight: 600;
`
