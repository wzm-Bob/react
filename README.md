# 全局安装脚手架
### 利用脚手架创建项目
### 安装babel-plugin-import --save-dev  实现antd样式按需加载
### 安装redux 等  run eject
### 组件通过props传值 组件内部通过state管理状态 初始值
### 事件来改变状态 onClick={this.函数名} 改变状态是返回一个新的状态 而不是### 直接修改 return this.setState({person:[...this.state.person,### person1]})  this问题在构造函数中 .bind(this)
### store中有所有的state 改变的话让dispatch专员触发变化（action）
### 处理变化人reducer拿到state和action 生成新state 所以通过reducer新建
### reducer是依据初始状态或老状态和action 生成新状态 即状态管理机
### 每个action是有type的 store= createStore（reducer）
### 初始状态 store.getState() 同步的action就是返回类型对象
### store.dispatch({type:''}) 派发事件 传递action的type
### redux处理异步 需要redux-thunk插件 action 可以返回一个函数
### redux中的applyMiddleware来管理中间件 需传入thunk
### react-redux联结二者 不需要subscribe
### provider放最外层 传入 store 仅一次
### connect 从store中取数据放到当前组件的props中
### connect用装饰器写  安装插件babel-plugin-transform-decorators-legacy
### babel7用@babel/plugin-proposal-decorators插件  前面的支持babel6
### 参数一要state啥属性放到props 参数二要啥方法放到props 并自动dispatch
### react-router-dom 路由安装
### browserRouter包裹整个应用
### router路由对应渲染的组件
### link跳转专用
### switch 唯一性只渲染一个子router组件 exact完全匹配
### URL参数 加冒号后可以跟location history match
### redirect组件跳转
### 