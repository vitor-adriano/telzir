import React from 'react'
import { Link } from 'react-router-dom'
import { MdNavigateBefore } from 'react-icons/md'

import { StyledHeader } from './styles'

const Header = ({ goBack, ...props }) => {
  return (
    <StyledHeader>
      {goBack && (
        <Link to="..">
          <MdNavigateBefore />
        </Link>
      )}

      <h2 {...props} />
    </StyledHeader>
  )
}

export default Header
