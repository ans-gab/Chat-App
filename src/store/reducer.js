import { CHANGE_DIOLOG_LIST, CHANGE_REPLY, CHANGE_TIMESLIMIT, SET_API } from "./constants";
const defaultState = {
  isreply: 0,  //判断是否是回复内容
  timeslimit: 20,  //初始使用次数
  diologlist: [{ text: '你好，很高兴为你服务！', isreply: 0, type: 'ingoing' }],  //消息列表
  apikey: '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'  //API 密钥
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_REPLY:
      return { ...state, isreply: action.num };
    case CHANGE_TIMESLIMIT:
      return { ...state, timeslimit: action.num };
    case CHANGE_DIOLOG_LIST:
      return { ...state, diologlist: action.ary };
    case SET_API:
      return { ...state, apikey: action.text }
    default:
      return state;
  }
}
export default reducer;