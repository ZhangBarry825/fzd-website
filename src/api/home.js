import request from '@/utils/request'


export function getHomeMenu(data) {
  return request({
    url: '/classify-deskend/classifySelectByPage',
    method: 'get',
    params:data
  })
}

export function getHomeBanner(data) {
  return request({
    url: '/banner-deskend/bannerSelectListByPage',
    method: 'get',
    params:data
  })
}

export function getHomeProduct(data) {
  return request({
    url: '/product-deskend/productSelectList',
    method: 'get',
    params:data
  })
}

export function getHomeAboutUs(data) {
  return request({
    url: '/aboutUs-deskend/aboutUsSelectByIs',
    method: 'get',
    params:data
  })
}
export function getHomeEquipment(data) {
  return request({
    url: '/facility-deskend/facilitySelectByPage',
    method: 'get',
    params:data
  })
}
export function getHomeNews(data) {
  return request({
    url: '/news-deskend/newsSelectByPage',
    method: 'get',
    params:data
  })
}



