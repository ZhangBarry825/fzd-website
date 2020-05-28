import request from '@/utils/request'

export function getNewsList(data) {
  return request({
    url: '/news-deskend/newsSelectByPage',
    method: 'get',
    params:data
  })
}
export function getNewsDetail(data) {
  return request({
    url: '/news-deskend/newsSelectById',
    method: 'get',
    params:data
  })
}

export function getEquipmentDetail(data) {
  return request({
    url: '/facility-deskend/facilitySelectById',
    method: 'get',
    params:data
  })
}


export function geEquipmentList(data) {
  return request({
    url: '/facility-deskend/facilitySelectByPage',
    method: 'get',
    params:data
  })
}
export function getAboutDetail(data) {
  return request({
    url: '/aboutUs-deskend/aboutUsSelectByIs',
    method: 'get',
    params:data
  })
}

