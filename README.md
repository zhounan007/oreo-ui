# Oreo-UI (奥利奥UI)

前端UI库... 针对移动端涉及到的各类`Css`样式


## 目录结构

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
        └── px/

```
- `oreo_ui.less` 入口
- `variable` 存放各类`component` 变量
- `components` 存放各类组件
- `default.less` 默认主题
- `dist`目录为自动生成,不要**修改**
- `docs` 文档

## 如何使用

> 包含 `px` 和 `rem` 两种类型, `rem` 是基于750设计文档 1rem = 100px;

`/dist/oreo_ui.css`, `/dist/oreo_ui.min.css` 

`/dist/oreo_ui.rem.css`, `/dist/oreo_ui.rem.min.css` 


如果想在本地运行,请安装`Node`环境。

```bash
$ npm install

$  gulp  // -s 启动服务 -w 实时监听 -p 服务端口,默认8086

```


## To Do List

- [x] Reset
- [x] Font(字体等)
- [x] Layout(基础布局)
    - [x] Flex
    - [x] Grid
- [x] Button(按钮)
- [ ] Form(表单)
    - [x] Input
    - [ ] Radio
    - [ ] CheckBox
    - [x] Textarea
    - [x] Switch
- [x] List(列表)
- [ ] Dialog(对话框)
- [ ] Modal()
- [ ] Toast(对话框)
- [x] Navbar(导航条)
- [ ] Tabbar(标签栏)
- [ ] Tab(标签页)


## Change Log

[Change Log](./docs/CHANGELOG.md)


## Support

> Oreo UI 参考或使用了以下开源项目代码

- Ant Design
- Ant Design Mobile
- WeUI
