import request from '@/utils/request'

export function logFindbypage (params) {
  return request({
    url: '/log/findbypage',
    method: 'post',
    data: params
  })
}
