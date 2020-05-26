import request from '@/utils/request'


export function getHomeInfo(data) {
  return request({
    url: '/banner-deskend/bannerSelectListByPage',
    method: 'get',
    params:data
  })
}
