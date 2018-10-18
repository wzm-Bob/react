import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style


NProgress.configure({ showSpinner: false })// NProgress Configuration
// 拦截请求
axios.interceptors.request.use(function(config){
	NProgress.start()
	console.log('请求开始')
	return config
})

// 拦截相应

axios.interceptors.response.use(function(config){
	NProgress.done()
	console.log('请求结束')
	return config
})