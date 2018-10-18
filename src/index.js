import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store/reducer/index'
/* 请求拦截 */
import Main from './main';
import './index.css';

// redux 注入操作
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    /* 中间件有点像微信等第三方工具  单个人可以和多个个体建立联系 */
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log('打印初始状态');
console.log(store.getState());


ReactDOM.render(
        (<Provider store={store}>
            <Main/>
        </Provider>)
 ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
 serviceWorker.unregister();
