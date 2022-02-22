import { request } from '@/http/request'

export function login_code() {

  return request({
    url: '/login/status',
    method: 'post',
  })
}

