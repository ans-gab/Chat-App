export const requestModel = [{
  title: 'GPT-3',
  value: 'GPT-3',
  selectable: false,
  children: [
    { title: 'text-davinci-003', value: 'text-davinci-003', description: '功能最强大的 GPT-3 模型。可以完成其他模型可以完成的任何任务，通常具有更高的质量、更长的输出和更好的指令遵循。还支持在文本中插入补全。', max_tokens: 4000 },
    { title: 'text-curie-001', value: 'text-curie-001', description: '非常有能力，但比Davinci更快，成本更低。', max_tokens: 2048 },
    { title: 'text-babbage-001', value: 'text-babbage-001', description: '能够执行简单的任务，速度非常快，成本更低。', max_tokens: 2048 },
    { title: 'text-ada-001', value: 'text-ada-001', description: '能够执行非常简单的任务，通常是 GPT-3 系列中最快的型号，而且成本最低。', max_tokens: 2048 },
  ]
},
{
  title: 'Davinci',
  value: 'Davinci',
  description: 'Davinci 是最有能力的模型系列，可以执行其他模型可以执行的任何任务，而且通常只需要很少的指令。对于需要对内容有大量理解的应用程序，例如针对特定受众的摘要和创意内容生成，Davinci 将产生最佳结果。这些增加的功能需要更多的计算资源，因此 Davinci 每次 API 调用的成本更高，并且不如其他模型快。\nDavinci 的另一个亮点是理解文本的意图。达芬奇擅长解决多种逻辑问题和解释人物的动机。达芬奇已经能够解决一些涉及因果关系的最具挑战性的人工智能问题。 \n擅长：复杂的意图、因果、为听众总结'
},
{
  title: 'Curie',
  value: 'Curie',
  description: 'Curie非常强大，而且速度非常快。 Davinci 在分析复杂文本方面更强大， Curie 能够胜任许多细微的任务，例如情感分类和摘要。Curie 还非常擅长回答问题和执行问答以及作为通用服务聊天机器人。\n擅长：语言翻译、复杂分类、文本情感、摘要'
},
{
  title: 'Babbage',
  value: 'Babbage',
  description: 'Babbage 可以执行简单的任务，例如简单的分类。在语义搜索方面，它也非常有能力对文档与搜索查询的匹配程度进行排名。\n擅长：适度分类、语义搜索分类。'
},
{
  title: 'Ada',
  value: 'Ada',
  description: 'Ada 通常是最快的模型，可以执行解析文本、地址更正和不需要太多细微差别的某些分类任务等任务。Ada 的性能通常可以通过提供更多上下文来提高。\n擅长：解析文本、简单分类、地址修正、关键词。'
},
{
  title: 'Codex',
  value: 'Codex',
  selectable: false,
  children: [
    { title: 'code-cushman-001', value: 'code-cushman-001', description: '几乎与 Davinci Codex 一样强大，但速度稍快。这种速度优势可能使其成为实时应用程序的首选。', max_tokens: 2048 },
    { title: 'code-davinci-002', value: 'code-davinci-002', description: '功能最强大的 Codex 型号。特别擅长将自然语言翻译成代码。除了补全代码，还支持在代码中插入补全。', max_tokens: 8000 },

  ]
}
]

export const example = [
  {
    title:'问答',
    content:'根据现有知识回答问题',
    imgsrc:`../../assets/homelist/chat2.png`
  },
  {
    title:'语法修正',
    content:'将句子改正标准英语',
    imgsrc:'../../assets/homelist/modify.png'
  },
  {
    title:'命令文本',
    content:'将文本转换为变成命令',
    imgsrc:'../../assets/homelist/codepen.png'
  },
  {
    title:'翻译语言',
    content:'将文本翻译成其他语种语言',
    imgsrc:'../../assets/homelist/translate.png'
  },
  {
    title:'SQL翻译',
    content:'将自然语言翻译成SQL查询',
    imgsrc:'../../assets/homelist/sql.png'
  },
  {
    title:'电影到表情符号',
    content:'将电影片名转换为表情符号',
    imgsrc:'../../assets/homelist/movie.png'
  },
  {
    title:'解释代码',
    content:'解释一段复杂的代码',
    imgsrc:'../../assets/homelist/explain.png'
  },
  {
    title:'广告文案',
    content:'将产品说明变成广告文案',
    imgsrc:'../../assets/homelist/ad.png'
  },
  {
    title:'SQL请求',
    content:'创建简单的SQL请求',
    imgsrc:'../../assets/homelist/MySQL.png'
  },
  {
    title:'微型恐怖故事创作者',
    content:'根据主题词输入创建两到三句话的简单恐怖故事',
    imgsrc:'../../assets/homelist/creation.png'
  },
  {
    title:'总结说明',
    content:'将会议记录变成摘要',
    imgsrc:'../../assets/homelist/conclusion.png'
  },
  {
    title:'论文大纲',
    content:'为研究主题生成大纲',
    imgsrc:'../../assets/homelist/paper.png'
  },
  {
    title:'餐厅评论',
    content:'将几句话变成餐厅评论',
    imgsrc:`../../assets/homelist/reply.png`
  },
]