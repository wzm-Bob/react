import React, {Component} from 'react'
 import LoginMap from "./login.css"
import { login } from "../../redux/user.redux"
import { Form, Icon, Input, Button } from 'antd'
import { connect } from "react-redux";

const FormItem = Form.Item;
@connect(
    state => state.user, {
        login
    }
)
class NormalLoginForm extends Component  {
    constructor(props, context){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state = {
            user: '',
            password: ''
        }
    }
handleChange(key,val){
        //这里key必须加中括号  不然就是字符串
        this.setState({
            [key]:val
        })
    }
  handleSubmit = (e) => {
      debugger
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        console.log(this.state)
        console.log(this.props)
        debugger
      if (!err) {
        this.props.login(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className={LoginMap.box}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('user', {
            rules: [{ required: true, message: '请输入您的用户名!' }],
          })(
            <Input onChange={v=>this.handleChange('user',v)} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }],
          })(
            <Input onChange={v=>this.handleChange('password',v)} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
           登录
          </Button>
        </FormItem>
      </Form>
      < /div>
    );
  }
  
}
const Login = Form.create()(NormalLoginForm);
export default Login;


/*let lineStyle={
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
        console.log(this.props.state)
       this.props.login(this.props.state)
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
}*/