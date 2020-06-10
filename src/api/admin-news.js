import request from '@/utils/request'

export function getNewsList(data) {
  return request({
    url: '/news-backend/newsSelectByPage',
    method: 'get',
    params:data
  })
}
export function getNewsDetail(data) {
  return request({
    url: '/news-backend/newsSelectById',
    method: 'get',
    params:data
  })
}

export function deleteNews(data) {
  return request({
    url: '/news-backend/newsDel',
    method: 'post',
    data
  })
}
export function updateNews(data) {
  return request({
    url: '/news-backend/newsUpdate',
    method: 'post',
    data
  })
}
export function addNews(data) {
  return request({
    url: '/news-backend/newsAdd',
    method: 'post',
    data
  })
}



