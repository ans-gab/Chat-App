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