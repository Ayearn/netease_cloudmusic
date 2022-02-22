import { request } from "./request";

export function verification_code(phone) {

  return request({
    url: '/captcha/sent',
    method: 'post',
    params: {
      phone
    }
  })
}