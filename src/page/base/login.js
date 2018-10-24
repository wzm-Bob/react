import React, {
    Component
} from 'react'
import axios from 'axios'
import LoginMap from "./login.css"

let lineStyle={
    marginTop:50,
    textAlign:'center',
    paddingTop:100
}
export default class login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.handleLink = this.handleLink.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            user:'rr',
            password:'444'
        }
    }
    handleLink(){  
        this.props.history.push('./register')
    }
    handleChange(key,val){
        //这里key必须加中括号  不然就是字符串
        this.setState({
            [key]:val
        })
    }
    handleSubmit(){
        //https://react.docschina.org/docs/events.html
        console.log(this.state.user)
       
        //debugger
       /*  console.log(this.props)
        console.log(this.state) */
        /*axios.post('/login/login',{
            user:'admin',
            password:'888888'
        })
		.then(res=>{
                debugger
                console.log(res)
			})*/
    }
    render() {
        return ( < div> 
        <div className={LoginMap.box} style={lineStyle}>
            <div><input type="text" onChange={v=>this.handleChange('user',v)} placeholder='请输入用户名'></input></div>
            <div><input type="password" onChange={v => this.handleChange('password', v)} placeholder='请输入密码'></input></div>
            <div><button style={{outline:'none'}} onClick={this.handleSubmit} className={LoginMap.button}>登录</button></div>
            <div><button style={{outline:'none'}} onClick={this.handleLink} className={LoginMap.button}>注册</button ></div>
        </div>
    </div>)
    }
}