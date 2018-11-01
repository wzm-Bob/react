import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import Slider from "react-slick";
import Head from "./basehead.css";

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
      navData:[
          {
              tilte: '走马观花',
              id: '1',
              path: '/abc'
          }, {
              tilte: '铁骨铮铮',
              id: '2',
              path: '/abc'
          }, {
              tilte: '大义凛然',
              id: '3',
              path: '/abc'
          }, {
              tilte: '仪表堂堂',
              id: '4',
              path: '/abc'
          }, {
              tilte: '平步青云',
              id: '5',
              path: '/abc'
          }, {
              tilte: '至高无上',
              id: '6',
              path: '/abc'
          }, {
              tilte: '无与伦比',
              id: '7',
              path: '/abc'
          }, {
              tilte: '瞒天过海',
              id: '8',
              path: '/abc'
          },
      ]
    };
   //this.goToPage=this.goToPage.bind(this)
  }
  componentDidMount() {
    this.setState({
      nav2: this.slider
    });
  }
 goToPage(c){
    debugger
    console.log(c)
 }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            <Icon type="lock" theme="outlined" />
            &nbsp;个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            <Icon type="delete" theme="outlined" />
            &nbsp;修改密码
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            <Icon type="poweroff" theme="outlined" />
            &nbsp;后台完善
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
            navData.map(item=>(
                 <div key={item.id} 
                 onClick={this.goToPage.bind(this,item.path)} 
                 className={Head.linkNav}>
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
