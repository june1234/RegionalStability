import request from '@/utils/request'

export function worldbank (params) {
  return request({
    url: '/requesttest/worldbanktwo',
    method: 'post',
    data: params
  })
}
