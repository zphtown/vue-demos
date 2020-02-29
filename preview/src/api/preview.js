import axios from '@/utils/request'
// 活动类型

// 活动预览-列表
export function getPreviewList (data) {
  return axios({
    baseURl: process.env.VUE_APP_API_BASE_URL,
    url: `/party/preview-list`,
    method: 'post',
    data
  })
}
// 活动预览-详情
export function getPreviewDetail (partyId) {
  return axios({
    baseURl: process.env.VUE_APP_API_BASE_URL,
    url: `/party/preview-detail?partyId=${partyId}`,
    method: 'post'
  })
}
