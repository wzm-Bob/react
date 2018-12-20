import React from 'react'

class BaseMenu extends React.Component {
    constructor(props, context) {
        super(props)
    }
    render() {
        return ( 
            <div className="left-menu">
            我是公共左侧菜单 
            </div>
        )
    }
}
export default BaseMenu