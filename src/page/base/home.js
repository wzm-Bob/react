import React, {
    Component
} from 'react'
import BaseHead from "../../component/basehead/basehead"
import BaseMenu from "../../component/baseleftmenu/basemenu"


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
                 <BaseMenu > </BaseMenu>
            </div>   
            </div>
        )
    }
}