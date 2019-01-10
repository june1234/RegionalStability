import request from '@/utils/request'

export function login (formLabelAlign) {
  return request({
    url: '/login',
    method: 'post',
    data: formLabelAlign
  })
}

// export function getInfo (token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}
