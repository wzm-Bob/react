import React, {Component} from 'react'
import LoginMap from "./login.css"
import {login} from "../../redux/user.redux"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'

let lineStyle = {
    marginTop: 0,
    textAlign: 'center',
    position: 'absolute',
    top:'10%',
    marginLeft:-250,
    left:'50%'
}
/* @connect(
    state=>state.user,
    {login}
) */
class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props) {
        super(props)
        this.state = {
			user:'',
			password:''
		}
        this.handleLink = this.handleLink.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleLink() {
        this.props.history.push('./register')
    }
    handleChange(key,val){
		this.setState({
			[key]:val.target.value
		})
	}
    handleSubmit() {
        debugger
        //https://react.docschina.org/docs/events.html
        console.log(this.props)
        console.log(this.state)
        /* 把setState当作是请求更新组件，而不是立即更新组件。为了性能，React会延迟更新，
        会把多个组件的更新放在一次操作里。React不保证state的改变会立刻发生 */
        this.props.login(this.state)   
    }
    render() {
        return (
          <div style={{background:'green',position:'relative',height:'100%'}}>
          
          {(this.props.redirectTo&&this.props.redirectTo!=='/login')? <Redirect to={this.props.redirectTo} />:null}
              <div className={LoginMap.box} style={lineStyle}>
              <h2 style={{marginBottom:45}}>西部野战指挥作战系统</h2>
              <div style={{marginBottom:25}}><input type="text" onChange={v=>this.handleChange('user', v)} placeholder='请输入用户名' ></input> </div>
            <div style={{marginBottom:25}}><input type="password" onChange={v=>this.handleChange('password', v)} placeholder='请输入密码' ></input> </div>
            <div><button onClick = {this.handleSubmit} className = {LoginMap.button}>登录</button> </div>
              </div>
          </div>
        )
       }
   }

function mapStateToProps(state) {
    return state.user
} 
/* 而mapDispatchToProp常规的写法应该是返回一个Object，这个Object与 mapStateToProps 的返回值不同的是
它的value并不是一个固定值，而是一个返回值为dispath()方法的回调函数 */
/* 
const mapDispatchToProps = (dispatch, ownProps) => {
  let actionObject1 = actions.increase(...args);//actions.类型
  let actionObject2 = actions.decrease(...args);
  return {
    increase: ()=>(dispatch(actionObject1)),
    decrease: ()=>(dispatch(actionObject2))
  } */
/*  connect第二个参数可以直接放入action对象*/
export default connect(mapStateToProps,{login})(Login)
// export default Login
