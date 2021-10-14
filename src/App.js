import React from 'react'
import { Provider } from 'react-redux'
import { MainScreen } from './components/MainScreen'
import { store } from './store/store'

export const App = () => {
  return (

    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}

