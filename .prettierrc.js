module.exports = {
  // 避免在单参数箭头函数周围添加括号
  arrowParens: 'avoid',

  // 在对象字面量的括号间打印空格
  bracketSpacing: true,

  // 规定如何处理HTML中的空白
  htmlWhitespaceSensitivity: 'css',

  // 在文件的第一块docblock注释中插入@format pragma
  insertPragma: false,

  // 将JSX闭合标签打印在最后一个属性的同一行
  bracketSameLine: false,

  // 在JSX中使用单引号代替双引号
  jsxSingleQuote: true,

  // 规定Prettier应换行的行长度
  printWidth: 120,

  // 规定Prettier如何换行Markdown文件中的内容
  proseWrap: 'preserve',

  // 规定对象属性中何时使用引号
  quoteProps: 'as-needed',

  // 需要在待格式化的文件顶部添加特殊注释
  requirePragma: false,

  // 在语句末尾打印分号
  semi: true,

  // 使用单引号代替双引号
  singleQuote: true,

  // 规定缩进的空格数
  tabWidth: 2,

  // 使用制表符代替空格缩进
  useTabs: false,

  // 将JSX闭合标签打印在最后一个属性的同一行
  jsxBracketSameLine: true,

  // 在可能的多行中打印尾随逗号
  trailingComma: 'es5',

  // 是否使用Stylelint进行CSS校验
  stylelintIntegration: false,

  // 是否使用TSLint进行TypeScript校验
  tslintIntegration: true,
};
