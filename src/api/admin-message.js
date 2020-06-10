import request from '@/utils/request'

export function getMessageList(data) {
  return request({
    url: '/message-backend/messageSelectByPage',
    method: 'get',
    params:data
  })
}


export function deleteMessage(data) {
  return request({
    url: '/message-backend/messageDel',
    method: 'post',
    data
  })
}




