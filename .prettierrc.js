module.exports = {
  printWidth: 120, // 单行最大字符数
  tabWidth: 2, // 缩进字符数
  useTabs: false, // 使用空格代替 tab 缩进 https://prettier.io/docs/en/options.html#tabs
  semi: true, // 保留行尾分号
  singleQuote: true, // 字符串使用单引号
  trailingComma: 'none', // 无尾逗号
  quoteProps: 'as-needed', // 对应 eslint quote-props
  bracketSpacing: false, // 对象大括号前后空格
  // jsxBracketSameLine: false, // [warn] jsxBracketSameLine is deprecated.
  arrowParens: 'avoid', // 对应 eslint arrow-parens
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore'
};
