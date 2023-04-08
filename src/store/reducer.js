import { CHANGE_DIOLOG_LIST, CHANGE_EXAMPLE, CHANGE_MESSAGE, CHANGE_QUESTION, CHANGE_REPLY, CHANGE_REQUEST, CHANGE_SYSTEM, CHANGE_TIMESLIMIT, SET_API } from "./constants";
const defaultState = {
  isreply: 0,  //判断是否是回复内容
  timeslimit: 20,  //初始使用次数
  diologlist: [{ text: '你好，很高兴为你服务！', isloading: false, type: 'ingoing' }],  //消息列表
  apikey: '',  //API 密钥
  avatarurl: '../../assets/img/avatar.jpg',
  system: '',   //AI人设
  message: [],   //3.5模型下的请求体
  requestdata: {
    mode: 0,    //问答模式：0；聊天模式：1
    model: "gpt-3.5-turbo",     //请求类型
    prompt: "",    //语境
    max_tokens: 512,    //最大回复字数
    temperature: 0.75,   //输出结果随机性 0-1，数值越大随机结果就越大（胡说参数）
    top_p: 0.75,   //值越大随机性就约到，值越小准确性就越高
    frequency_penalty: 0,    //-2-2,正值会根据新 tokens 在文本中的现有频率对其进行惩罚，从而降低模型逐字重复同一行的可能性，重复度惩罚因子
    presence_penalty: 0,   //  -2-2,正值会根据到目前为止是否出现在文本中来惩罚新 tokens，从而增加模型谈论新主题的可能性
    preurl: '/v1/chat/completions'
  },
  funUrl: 'https://service-o9a22oki-1258507939.hk.apigw.tencentcs.com/release',
  question: '',  //问题内容
  example: {
    title: '问答（示例）',
    description: '根据现有知识回答问题',
    imgsrc: '/assets/homelist/chat2.png',
    prompt: 'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D.Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA: ',
    response: 'The Valley of Kings is located in Luxor, Egypt.'
  },
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
    case CHANGE_QUESTION:
      return { ...state, question: action.text };
    case CHANGE_REQUEST:
      return { ...state, requestdata: action.ary };
    case CHANGE_EXAMPLE:
      return { ...state, example: action.ary };
    case CHANGE_MESSAGE:
      return { ...state, message: action.ary };
    case CHANGE_SYSTEM:
      return { ...state, system: action.text };

    default:
      return state;
  }
}
export default reducer;