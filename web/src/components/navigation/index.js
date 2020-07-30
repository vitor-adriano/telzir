import React from 'react'
import { useDispatch } from 'react-redux'
import { MdExitToApp } from 'react-icons/md'

import { logoutUser } from 'actions/user'
import Logo from 'assets/logo'

import StyledComponent from './styles'

const Navigation = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logoutUser())

  return (
    <StyledComponent>
      <nav>
        <Logo />

        <button onClick={handleLogout}>
          <MdExitToApp />
        </button>
      </nav>
    </StyledComponent>
  )
}

export default Navigation
