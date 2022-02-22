import {request} from '@/http/request'

export function getSong(keywords) {
	return request({
		url: '/search',
		params:{
			keywords
		}
	})
}
