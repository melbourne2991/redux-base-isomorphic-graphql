import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { Router, Route, Link, browserHistory } from 'react-router'
import routes from './routes'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>, 
  document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}