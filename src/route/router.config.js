import React from 'react'
import { Router, Route } from 'react-router-dom'
import *  as base from '../page/base' 
const isLogin = false


export default () => (
  <Router>
    <Route path="/" component={base.example} onEnter={isLogin}>
      <Route path="/desk" component={base.welcome} />
      <Route path="/desk$/index" component={base.example} />
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
