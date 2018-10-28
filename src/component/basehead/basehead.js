import React  from　'react'
import Head from "./basehead.css";

let styles={
        height: 80 ,
        background: 'olivedrab',
        paddingLeft: 20,
        paddingRight:20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
}
class BaseHead extends React.Component{
    constructor(props,context){
        super(props)
    }
    render(){
        return (
            <div className={Head.pubHead} style={styles}>
                <div className={Head.log}>西部野战陆军作战指挥系统</div>
                <div className={Head.nav}>9999</div>
                <div className={Head.user}>个人中心</div>
            </div>
        )
    }
}
export default BaseHead