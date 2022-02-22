import {request} from '@/http/request'

export function getBanners() {
	return request({
		url: '/personalized/privatecontent',
		params:{

		}
	})
}
