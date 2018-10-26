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
			return {...state, msg:'',redirectTo:'/notfound',...action.payload}
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
	
	return dispatch=>{
		axios.post('/user/login',{user,password})
			.then(res=>{
				debugger
				if (res.status === 200) {
					dispatch(authSuccess(res.data))
					// 
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})		
	}


}