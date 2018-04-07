import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import App from '../containers/App'
import store from './store'

class Bootstrap extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    )
  }
}

export default Bootstrap