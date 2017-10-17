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
    + 如果不兼容你的设备, 请[issues](https://github.com/zhounan007/oreo-ui/issues)(操作系统及版本 + 浏览器及版本)

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
在你的页面 head标签内引入lib/oreo_ui.css

`rem` 版基于1rem = 100px, 如需自定义可通过`gulp`导出。

<div class="device-phone">
    <iframe src="./example/index.html" frameborder="0" class="device-preview"></iframe>
</div>