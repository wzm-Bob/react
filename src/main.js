import  React from "react"
import {HashRouter, Route, Switch} from 'react-router-dom'
/* 如果有服务器端的动态支持，建议使用 BrowserRouter，否则建议使用 HashRouter。hashrouter会加# */
import Login from './page/base/login'
import Notfound from './page/base/notfound'
import Example from './page/base/example'
import Register from './page/base/register'
import AuthRoute from "./component/authroute/authroute";
import  "./mock/login";
export default() => (
    <HashRouter>
        <div>
                <AuthRoute></AuthRoute> 
				<Switch>{/* 只会渲染命中的一个 */}
					<Route path='/notfound' component={Notfound}></Route>
					<Route path='/example' component={Example}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
					{/* <Route path='/chat/:user' component={Chat}></Route>
					<Route component={Dashboard}></Route> */}
				</Switch>
        </div>
    </HashRouter>
)