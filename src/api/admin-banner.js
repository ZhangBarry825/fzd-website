import request from '@/utils/request'


export function getBannerList(data) {
  return request({
    url: '/banner-backend/bannerSelectListByPage',
    method: 'get',
    params:data
  })
}
export function updateBanner(data) {
  return request({
    url: '/banner-backend/bannerUpdate',
    method: 'post',
    data
  })
}
export function deleteBanner(data) {
  return request({
    url: '/banner-backend/bannerDel',
    method: 'post',
    data
  })
}
export function uploadFile(data) {
  return request({
    url: '/image-backend/up',
    method: 'post',
    data
  })
}


