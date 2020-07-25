import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import Routes from './routes'

const App = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
