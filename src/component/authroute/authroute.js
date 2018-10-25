import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
//普通组件没有路由 this.propsundefined 所以这里用withrouter包裹
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