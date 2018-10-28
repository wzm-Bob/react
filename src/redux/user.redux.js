import axios from "axios";



const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState={
	redirectTo:'',
	msg:'',
	user:'',
	type:''
}
// reducer
export function user(state=initState, action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state, msg:'',redirectTo:'/home',...action.payload}
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		default:
			return state
	}
} 

function authSuccess(obj){
	const {roles,...data} = obj
	return {type: AUTH_SUCCESS, payload:data}
}

function errorMsg(msg){
	return { msg, type:ERROR_MSG }
}
export function login({user,password}){
  if (!user||!password) {
	return alert('用户密码必须输入');
	}
	
	return async dispatch=>{
		let res = await axios.post('/user/login',{user,password})
			//将函数弄成async函数 然后就能用await将异步操作转成同步
				debugger
				if (res.data.status === 'ok') {
					dispatch(authSuccess(res.data))
					// 
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			
	}


}