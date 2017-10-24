<p align="center">
  <a href="https://zhounan007.github.io/oreo-ui/">
    <img width="160" src="http://owz1rt8et.bkt.clouddn.com/assets/oreo-ui.png">
  </a>
</p>

# Oreo-UI

Oreo-UI is a modern CSS framework based on Mobile



## Quick Start

> 包含 `px` 和 `rem` 两种类型, `rem` 是基于750设计文档 1rem = 100px;

- `/lib/oreo_ui.css` 
- `/lib/oreo_ui.min.css` 
- `/lib/oreo_ui.rem.css`
- `/lib/oreo_ui.rem.min.css` 

### NPM
```bash
npm install oreo-ui
```

## Advanced Usage

如果您想自定义导出样式库或者本地运行,请确保安装 `Node` 环境

```bash
$ git clone https://github.com/zhounan007/oreo-ui.git

$ npm install
// -s 启动服务 -w 实时监听 -p 服务端口,默认8086
$ gulp  -s  

```
通过 `manifest.json` 配置自定义库


## Browser Support

Oreo-UI  使用 [autoprefixer](https://github.com/postcss/autoprefixer) 使`Flexbox` 特性兼容早期的浏览器版本, 通过 [Can I Use](https://caniuse.com/), Oreo-UI 兼容绝大多数移动端设备:
- Android4.4+
- iOS7.0+

## Change Log

[Change Log](./docs/CHANGELOG.md)


## License

MIT