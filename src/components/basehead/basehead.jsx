import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import Slider from "react-slick";
import Head from "./basehead.css";
import axios from "axios";


let styles = {
  height: 80,
  background: "olivedrab",
  paddingLeft: 20,
  paddingRight: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

class BaseHead extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      nav2: null,
      curr:0,
      navData:[]
    };
  }
  componentDidMount() {
    var _this=this
    axios.get('/api/nav').then(function(res){
      debugger
      setTimeout(() => {
         _this.setState({
           navData: res.data
         });
      }, 0);
      
    })
    this.setState({
      nav2: this.slider
    });
  }
 goToPage(path,event) {
    debugger
    this.setState({
      curr: parseInt(event.currentTarget.getAttribute('index'), 10)
    })
 }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/usercenter"
          >
            <Icon type="lock" theme="outlined" />
            &nbsp;个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="changepass"
          >
            <Icon type="delete" theme="outlined" />
            &nbsp;修改密码
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/login"
          >
            <Icon type="poweroff" theme="outlined" />
            &nbsp;退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    const {navData} =this.state;
    return (
      <div className={Head.pubHead} style={styles}>
        <div className={Head.log}>西部野战陆军作战指挥系统</div>
        <div className={Head.nav} style={{}}>
          <Slider
            dots={false}
            infinite={true}
            asNavFor={this.state.nav2}
            ref={c => (this.slider = c)}
            slidesToShow={5}
            slidesToScroll={1}
            // swipeToSlide={true}
            // focusOnSelect={true}
          >{
            navData.map((item,i)=>(
                 <div key={item.id} 
                 index={i}
                 onClick={this.goToPage.bind(this,item.path)} 
                 className={`linkNav ${this.state.curr===i?'active':''}`}>
                    <h3> {item.tilte}</h3>
                </div>
                )) 
            }   
          </Slider>
        {/* onClick 不传参数{this.methodname}
     传参数 {this.handleClick.bind(this, props0, props1, ...}*/}
        </div>
        <div className={Head.user}>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              href="baidu.com"
              style={{ color: "#fff", fontSize: 18 }}
            >
              <Icon type="user" theme="outlined" style={{ fontSize: 26 }} />
              admin
              <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default BaseHead;
