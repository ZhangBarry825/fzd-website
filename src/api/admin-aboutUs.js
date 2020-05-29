import request from '@/utils/request'


export function getAboutUs(data) {
  return request({
    url: '/aboutUs-backend/aboutUsListByPage',
    method: 'get',
    params:data
  })
}
export function updateAboutUs(data) {
  return request({
    url: '/aboutUs-backend/aboutUsUpdate',
    method: 'post',
    data
  })
}

