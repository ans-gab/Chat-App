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
  description: 'Davinci 是最有能力的模型系列，可以执行其他模型可以执行的任何任务，而且通常只需要很少的指令。对于需要对内容有大量理解的应用程序，例如针对特定受众的摘要和创意内容生成，Davinci 将产生最佳结果。这些增加的功能需要更多的计算资源，因此 Davinci 每次 API 调用的成本更高，并且不如其他模型快。\n\nDavinci 的另一个亮点是理解文本的意图。达芬奇擅长解决多种逻辑问题和解释人物的动机。达芬奇已经能够解决一些涉及因果关系的最具挑战性的人工智能问题。 \n\n擅长：复杂的意图、因果、为听众总结'
},
{
  title: 'Curie',
  value: 'Curie',
  description: 'Curie非常强大，而且速度非常快。 Davinci 在分析复杂文本方面更强大， Curie 能够胜任许多细微的任务，例如情感分类和摘要。Curie 还非常擅长回答问题和执行问答以及作为通用服务聊天机器人。\n\n擅长：语言翻译、复杂分类、文本情感、摘要'
},
{
  title: 'Babbage',
  value: 'Babbage',
  description: 'Babbage 可以执行简单的任务，例如简单的分类。在语义搜索方面，它也非常有能力对文档与搜索查询的匹配程度进行排名。\n\n擅长：适度分类、语义搜索分类。'
},
{
  title: 'Ada',
  value: 'Ada',
  description: 'Ada 通常是最快的模型，可以执行解析文本、地址更正和不需要太多细微差别的某些分类任务等任务。Ada 的性能通常可以通过提供更多上下文来提高。\n\n擅长：解析文本、简单分类、地址修正、关键词。'
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
    title: '问答（示例）',
    description: '根据现有知识回答问题',
    imgsrc: '/assets/homelist/chat2.png',
    prompt: 'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D.Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA: ',
    response: 'The Valley of Kings is located in Luxor, Egypt.'
  },
  {
    title: '语法修正（示例）',
    description: '将句子改正标准英语',
    imgsrc: '../../assets/homelist/modify.png',
    prompt: '将此更正为标准英语:\n\nShe no went to the market.',
    response: 'She did not go to the market.',
  },
  {
    title: '命令文本（示例）',
    description: '将文本转换为变成命令',
    imgsrc: '../../assets/homelist/codepen.png',
    prompt: 'Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\n\n\nOutput: send-msg `find constance` Do we need some bread?\n\n   Reach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday',
    response: 'send-msg `find ski store` Can I get my skis fixed before I leave on Thursday?',
  },
  {
    title: '翻译语言（示例）',
    description: '将文本翻译成其他语种语言',
    imgsrc: '../../assets/homelist/translate.png',
    prompt: 'Translate this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.',
    response: 'Quels sont les chambres que vous avez disponibles?\n2. ¿Qué habitaciones tienes disponibles?\n3. どの部屋が利用可能ですか？',
  },
  {
    title: 'SQL翻译（示例）',
    description: '将自然语言翻译成SQL查询',
    imgsrc: '../../assets/homelist/sql.png',
    prompt: 'SQL查询出过去三个月内雇佣员工超过10名的部门名称和部门负责人姓名',
    response: 'SELECT DepartmentName, ManagerName\nFROM Departments \nWHERE (SELECT COUNT(*) \nFROM Employees \nWHERE Departments.DepartmentID = Employees.DepartmentID \n  AND HireDate > DATEADD(MONTH, -3, GETDATE())) > 10;',
  },
  {
    title: '电影到表情符号（示例）',
    description: '将电影片名转换为表情符号',
    imgsrc: '../../assets/homelist/movie.png',
    prompt: '将大话西游电影转换为表情符号',
    response: '😁😆🤩🤩',
  },
  {
    title: '解释代码（示例）',
    description: '解释一段复杂的代码',
    imgsrc: '../../assets/homelist/explain.png',
    prompt: 'class Log:  def __init__(self, path):     dirname = os.path.dirname(path)    os.makedirs(dirname, exist_ok = True)      f = open(path, "a+")       # Check that the file is newline- terminated       size = os.path.getsize(path)       if size > 0:  f.seek(size - 1)end = f.read(1)if end != "\n":  f.write("\n")self.f = f self.path = path    def log(self, event):event["_event_id"] = str(uuid.uuid4())json.dump(event, self.f)self.f.write("\n")    def state(self):state = { "complete": set(), "last": one }for line in open(self.path):  event = json.loads(line)if event["type"] == "submit" and event["success"]:state["complete"].add(event["id"])state["last"] = event return state """Here\'s what the above class is doing:1.',
    response: '  The constructor creates a directory for the log file if it doesn\'t exist. 2.  The log() method writes a JSON-encoded event to the log file.    3.  The state() method returns a dictionary with the set of complete tasks and the most recent event.',
  },
  {
    title: '广告文案（示例）',
    description: '将产品说明变成广告文案',
    imgsrc: '../../assets/homelist/ad.png',
    prompt: '为下面的产品撰写创意广告\n脑白金产品的主要作用：改善睡眠、润肠通便。\n产品类别：老年人保健品',
    response: '“宝贝，睡眠不好，消化不良，这可怎么办？答案只有一个——脑白金！脑白金是一款针对老年人的保健品，主要功能是改善睡眠，润肠通便。它采用先进的配方，有效缓解睡眠不足，消除便秘等症状，让你拥有健康睡眠，改善消化系统。脑白金，让你无忧睡眠，消化更加舒适！”',
  },
  {
    title: 'SQL请求（示例）',
    description: '创建简单的SQL请求',
    imgsrc: '../../assets/homelist/MySQL.png',
    prompt: '创建一个 SQL 请求以查找居住在加利福尼亚并拥有超过 1000 积分的所有用户：',
    response: 'SELECT * FROM users WHERE state = "California" AND credits > 1000',
  },
  {
    title: '微型恐怖故事创作者（示例）',
    description: '根据主题词输入创建两到三句话的简单恐怖故事',
    imgsrc: '../../assets/homelist/creation.png',
    prompt: '主题：早餐; 生成恐怖故事：当我把牛奶倒在他的麦片上时，他总是不哭。我只需要记住不要让他看到他在纸箱上的脸。\n题目：风;\n生成恐怖故事：',
    response: '狂风呼啸着划破夜空，带着一股阴森森的力量摇晃着房子的窗户。当我走出去时，我能感觉到它在呼唤我，召唤我跟随它那令人不寒而栗的道路。',
  },
  {
    title: '论文大纲（示例）',
    description: '为研究主题生成大纲',
    imgsrc: '../../assets/homelist/paper.png',
    prompt: '生成一篇关于钢铁产能过剩的论文大纲',
    response: '一、引言\n1. 关于钢铁产能过剩的概述\n2. 对钢铁产能过剩的影响\n二、钢铁产能过剩的成因\n1. 钢铁行业过度投资\n2. 技术和管理的缺失\n3. 市场结构的失衡\n三、政府政策的干预\n1. 宏观经济调控政策\n2. 行业调控政策\n3. 环境保护政策\n四、解决钢铁产能过剩的措施\n1. 强化产能调整\n2. 优化产能结构\n3. 推动绿色发展\n五、结论\n1. 钢铁产能过剩是一个复杂的问题，政府政策的干预是解决钢铁产能过剩的关键\n2. 需要加强宏观经济调控、行业调控以及环境保护等政策的实施\n3. 需要强化产能调整、优化产能....',
  },
]