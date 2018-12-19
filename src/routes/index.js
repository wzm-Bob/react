import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import * as AllComponents from '../components';
import Analysis from '../page/dashboard/analysis';
//import routesConfig from './config';
//import queryString from 'query-string';

export default class CRouter extends Component {
  /*   requireAuth = (permission, component) => {
        debugger
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    requireLogin = (component, permission) => {
        debugger
        const { auth } = this.props;
        const { permissions } = auth.data;
        if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
            return <Redirect to={'/login'} />;
        }
        return permission ? this.requireAuth(permission, component) : component;
    }; */
    render() {
        return (
            <Switch>
                <Route path='/home' component={Analysis}></Route>
            </Switch>
        )
    }
}