# moment-mako-plugin

@ant-design/moment-webpack-plugin for mako，将 Ant Design 组件中的 dayjs 转换为 moment 的插件。

## 安装

```bash
npm install moment-mako-plugin
```

## usage

在 `mako.config.json` 文件中引入并配置 plugin 即可

```json
{
  "plugins": ["moment-mako-plugin"]
}
```

## 工作原理

插件会：

1. 检测所有 `.ts`, `.tsx`, `.js`, `.jsx` 文件
2. 查找包含 `generate/dayjs` 的代码
3. 将 `dayjs` 替换为 `moment`
4. 返回转换后的代码
