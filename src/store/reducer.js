import { CHANGE_DIOLOG_LIST, CHANGE_MODE, CHANGE_QUESTION, CHANGE_REPLY, CHANGE_REQUEST, CHANGE_TIMESLIMIT, SET_API } from "./constants";
const defaultState = {
  isreply: 0,  //判断是否是回复内容
  timeslimit: 20,  //初始使用次数
  diologlist: [{ text: '你好，很高兴为你服务！', isloading: false, type: 'ingoing' }],  //消息列表
  apikey: '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',  //API 密钥
  requestdata: {
    mode: 1,
    model: "",     //请求类型
    prompt: "",    //语境
    max_tokens: "",    //最大回复字数
    temperature: 1,   //输出结果随机性 0-2，数值越大随机结果就越大（胡说参数）
    top_p: 0.75,   //值越大随机性就约到，值越小准确性就越高
  },
  mode: 1,
  question: '',  //问题内容
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
      return { ...state, apikey: action.text };
    case CHANGE_MODE:
      return { ...state, mode: action.num };
    case CHANGE_QUESTION:
      return { ...state, question: action.text };
    case CHANGE_REQUEST:
      return { ...state, requestdata: action.ary }
    default:
      return state;
  }
}
export default reducer;