import React from 'react'
import { useDispatch } from 'react-redux'

import { logoutUser } from 'actions/user'

const Navigation = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logoutUser())

  return (
    <nav>
      <button onClick={handleLogout}>Sair</button>
    </nav>
  )
}

export default Navigation
