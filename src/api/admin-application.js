import request from '@/utils/request'

export function getApplicationList(data) {
  return request({
    url: '/tApplication-backend/tApplicationSelectByPage',
    method: 'get',
    params:data
  })
}
export function getApplicationDetail(data) {
  return request({
    url: '/tApplication-backend/tApplicationSelectById',
    method: 'get',
    params:data
  })
}

export function deleteApplication(data) {
  return request({
    url: '/tApplication-backend/tApplicationDel',
    method: 'post',
    data
  })
}
export function updateApplication(data) {
  return request({
    url: '/tApplication-backend/tApplicationUpdate',
    method: 'post',
    data
  })
}
export function addApplication(data) {
  return request({
    url: '/tApplication-backend/tApplicationAdd',
    method: 'post',
    data
  })
}



