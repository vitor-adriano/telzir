import React from 'react'
import { Link } from 'react-router-dom'
import { MdNavigateBefore } from 'react-icons/md'

import { StyledHeader } from './styles'

const Header = ({ goBack, children, ...props }) => {
  return (
    <StyledHeader>
      {goBack && (
        <Link to="..">
          <MdNavigateBefore />
        </Link>
      )}

      <h2 {...props}>{children}</h2>
    </StyledHeader>
  )
}

export default Header
