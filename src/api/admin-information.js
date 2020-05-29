import request from '@/utils/request'


export function getInformation(data) {
  return request({
    url: '/contactUs-backend/contactUsSelectById',
    method: 'get',
    params:data
  })
}
export function updateInformation(data) {
  return request({
    url: '/contactUs-backend/contactUsUpdate',
    method: 'post',
    data
  })
}

