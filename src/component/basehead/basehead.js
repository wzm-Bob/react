import React from 　'react'
import {
    Menu,
    Dropdown,
    Icon
} from 'antd';
import Slider from "react-slick";
import Head from "./basehead.css";

let styles = {
    height: 80,
    background: 'olivedrab',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}

class BaseHead extends React.Component {
    constructor(props, context) {
        super(props)
        this.state = {
            nav2: null
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider
        })
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        <Icon type="lock" theme="outlined" />&nbsp;个人中心</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        <Icon type="delete" theme="outlined" />&nbsp;修改密码</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        <Icon type="poweroff" theme="outlined" />&nbsp;后台完善</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={Head.pubHead} style={styles}>
                <div className={Head.log}>西部野战陆军作战指挥系统</div>
                <div className={Head.nav} style={{}}>
                    <div style={{ textAlign: "center" }}>
                        <button className="button" onClick={this.previous}>
                            Previous
          </button>
                        <button className="button" onClick={this.next}>
                            Next
          </button>
                    </div>
                    <Slider
                        dots={false}
                        infinite={true}
                        asNavFor={this.state.nav2}
                        ref={c => (this.slider = c)}
                        slidesToShow={4}
                        slidesToScroll={1}
                    // swipeToSlide={true}
                    // focusOnSelect={true}
                    >
                        <div key={1} className={Head.linkNav}><h3 >走马观花</h3></div>
                        <div key={2} className={Head.linkNav}><h3>铁骨铮铮</h3></div>
                        <div key={3} className={Head.linkNav}><h3>大义凛然</h3></div>
                        <div key={4} className={Head.linkNav}><h3>仪表堂堂</h3></div>
                        <div key={5} className={Head.linkNav}><h3>平步青云</h3></div>
                        <div key={6} className={Head.linkNav}><h3>至高无上</h3></div>
                        <div key={7} className={Head.linkNav}><h3>无与伦比</h3></div>
                        < /Slider>
                </div>
                    <div className={Head.user}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#" style={{ color: '#fff', fontSize: 18 }}>
                                < Icon type="user" theme="outlined" style={{ fontSize: 26 }} />
                                admin
      < Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
                )
            }
        }
export default BaseHead