import React from 'react'
import { Route } from 'react-router'
import { App, Child } from '../containers'

export default (
  <Route path="/" component={App}>
    <Route path="child" component={Child}></Route>
  </Route>
)