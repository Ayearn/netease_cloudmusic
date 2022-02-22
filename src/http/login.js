import { request } from '@/http/request'

export function login(phone, password) {

	return request({
		url: '/login/cellphone',
		method: 'post',
		params: {
			phone,
			password
		}
	})
}

