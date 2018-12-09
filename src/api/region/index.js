import request from '@/utils/request.js'

export function scoresource (params) {
  return request({
    url: '/eventscoresource/findbymonth',
    method: 'post',
    data: params
  })
}
