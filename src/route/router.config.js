import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import login from '../page/base/login'

export default () => (
  <BrowserRouter>
  < Switch>
  < Route path = "*"
  exact
  component = {
    login
  } > </Route></Switch >
  </BrowserRouter>
)
