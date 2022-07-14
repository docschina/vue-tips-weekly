# Vue Tips Weekly

## 来源

- 访问 https://michaelnthiessen.com/
- 找到 Articles 选择 All
- 获取 URL

## 状态

目前试运行。北京时间每周三晚上八点会收到 weekly。

目前使用 `node app xxx.com` 的方式来爬取文章内容，具体可参考 `app.js` 里的内容。

后续考虑做成自动化的。

## 工作流

- 获取网址。参考来源
- 新增文章。`node app xxx.com`
- 开始翻译。`npx zx scripts/start-translate.js`

- 发起 PR https://github.com/docschina/vue-tips-weekly/compare/main...translate/69
