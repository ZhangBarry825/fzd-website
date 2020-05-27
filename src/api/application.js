import request from '@/utils/request'


export function getAppList(data) {
  return request({
    url: '/tApplication-deskend/tApplicationSelectByPage',
    method: 'get',
    params:data
  })
}


export function getAppDetail(data) {
  return request({
    url: '/tApplication-deskend/tApplicationSelectById',
    method: 'get',
    params:data
  })
}

