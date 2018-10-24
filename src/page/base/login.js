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
        this.state = {}
    }
    handleSubmit(){
        debugger
       /*  console.log(this.props)
        console.log(this.state) */
        axios.post('/login/login',{
            user:'admin',
            password:'888888'
        })
		.then(res=>{
                debugger
                console.log(res)
			})
    }
    render() {
        return ( < div> 
        <div className={LoginMap.box} style={lineStyle}>
            <div><input type="text"  placeholder='请输入用户名'></input></div>
            <div><input type="password" placeholder='请输入密码'></input></div>
            <button style={{outline:'none'}} onClick={this.handleSubmit} className={LoginMap.button}>登录</button>
        </div>
         </div>)
    }
}