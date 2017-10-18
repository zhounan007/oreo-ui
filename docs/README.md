# Oreo-UI (奥利奥UI)

> 一款移动端纯Css样式库, 包含各类常用的`Css`样式, 简单、方便、谁用谁知道😱...


## 快速上手


- `Oreo-UI`是什么?

    + `Oreo-UI` 是一款纯Css **样式库**, 包含经常用到的各类样式,对产品要求短时间上线来说, 简直就是福音;
    + 如需使用功能请关注近期发布的基于`Vue2.x`的移动端组件库。
    + 戳 [example](https://zhounan007.github.io/oreo-ui/example/index.html) 查看


- 预备知识
    + 使用 `Oreo-UI` 之前，应该熟悉 HTML、CSS、JavaScript 以外，还应了解移动端相关特性;
    + 了解 `rem` 相关知识;
    + 如果您并不了解以上预备知识，建议您先储备相关基础知识，而后再进行使用;


- 兼容性
    + 兼容绝大多数移动端设备(兼容Android4.4+、IOS7.0+) 
    + 采用 `flexbox` 弹性布局
    + 如果不兼容你的设备, 请[issues](https://github.com/zhounan007/oreo-ui/issues/new)(操作系统及版本 + 浏览器及版本)

- 如何使用
    
    下载 `Oreo-UI`,在lib目录下有生成的各类样式

```
OREO-UI/
    ├── src/style/
    │       ├── base/
    │       │   ├── mixin/
    │       │   ├── variable/
    │       │   ├── reset.less
    │       │   └── fn.less
    │       ├── components/
    │       ├── theme/
    │       │   └── default.less
    │       └── oreo_ui.less  
    │
    ├── src/example/
    ├── docs/example/ 
    └── lib/
        ├── rem/
        ├── px/
        ├── oreo_ui.css
        ├── oreo_ui.min.css
        ├── oreo_ui.rem.css
        └── oreo_ui.rem.min.css
```
在您的页面head标签内引入 `lib/oreo_ui.css`  或 `lib/oreo_ui.min.css` 即可

如果您的页面基于 `rem` 单位进行布局,可以引入 `lib/oreo_ui.rem.css`  或 `lib/oreo_ui.rem.min.css`,该样式基于1rem = 100px, 如需自定义可通过`gulp`导出

## 效果演示

移动端扫描下方二维码 或 [example](https://github.com/zhounan007/oreo-ui)

![](http://owz1rt8et.bkt.clouddn.com/assets/github-oreo-ui-example.png?imageView2/1/w/200/h/200/format/png/q/75|imageslim)



## 高级用法

如果您想自定义导出样式库或者本地运行,请确保安装 `Node` 环境

```bash
$ git clone https://github.com/zhounan007/oreo-ui.git

$ npm install
// -s 启动服务 -w 实时监听 -p 服务端口,默认8086
$ gulp  -s  

```
通过 `manifest.json` 配置自定义库


## 支持

> Oreo UI 参考或使用了以下开源项目代码

- Ant Design
- Ant Design Mobile
- WeUI

## 感谢
Design By Mobile Internet Front-end Web Team