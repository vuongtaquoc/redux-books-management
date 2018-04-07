import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Dashboard from '../Dashboard'
import Book from '../Book'

import { appLayout } from '../../styles/layout'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={appLayout.wrapper}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/books/:action/:bookId" component={Book} />
          <Route exact path="/books/:action" component={Book} />
        </div>
      </Router>
    )
  }
}

export default App