import axios from 'axios'

export function request(config) {
	//  1.创建axios实例
	const instance = axios.create({
		baseURL: 'http://localhost:3000',
		timeout: 50000
	})

	// 2.axios的拦截器
	instance.interceptors.request.use(config => {
		return config
	}, error => { })

	instance.interceptors.request.use(res => {
		return res
	}, err => {
		console.log(err)
	})

	// 3.发送真正的网络请求
	return instance(config);
}
