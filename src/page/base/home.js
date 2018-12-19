import React, {
    Component
} from 'react'
import BaseHead from "../../components/basehead/basehead"
import Routes from "../../routes"
// import Styles from "./home.css";


export default class home extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.state = {}
    }

    render() {
        return ( 
            <div> 
            <BaseHead></BaseHead>
            <div className="pub-contain">

                <Routes></Routes> 
            {/*     <div className={Styles.leftMenu}>
                99999
                </div> 
                <div className={Styles.rightArea}>
                核心内容
                </div> */}
            </div>   
            </div>
        )
    }
}