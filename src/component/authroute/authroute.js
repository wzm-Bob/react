import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
/**
 * withRouter可以包装任何自定义组件， 将react - router 的 history, location, match 三个对象传入。
 无需一级级传递react - router 的属性， 当需要用的router 属性的时候， 将组件包一层withRouter， 就可以拿到需要的路由信息
正常情况下 只有Router 的component组件能够自动带有三个属性 如main.js中的
使用了connect的话就不用withrouter
 */
@withRouter
class AuthRoute extends React.Component{
	componentDidMount() {
        console.log(this.props)
		const publicList = ['/login','/register']
		const pathname = this.props.location.pathname //当前的路由
		if (publicList.indexOf(pathname)>-1) {
			return null
		}
		// 获取用户信息
		axios.get('/user/info')
			.then(res=>{
				if (res.data.code===200) {
					if (res.data.data.code===0) {
						// 有登录信息de
						console.log(this.props)
					}else{
						this.props.history.push('/login')
					}
				}
			})
	}
	render(){
		return null
	}

}
export default AuthRoute