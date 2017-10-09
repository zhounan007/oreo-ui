# oreo_ui

前端UI库... 针对移动端涉及到的各类`Css`样式





## 目录结构

```

OREO_UI/
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
    ├── dist/style/
    └── dist/example/ 

```
- `oreo_ui.less` 入口
- `variable` 存放各类`component` 变量
- `components` 存放各类组件
- `default.less` 默认主题
- `dist`目录为自动生成,不要**修改**

## 如何使用

`/dist/style/oreo_ui.css`, `/dist/style/oreo_ui.min.css` 直接引用即可

如果想在本地运行,请安装`Node`环境。

```bash
$ npm install

$  gulp  // -s 启动服务 -w 实时监听 -p 服务端口,默认8086

```


## To Do List

- [ ] Reset
- [ ] Font(字体等)
- [ ] Layout(基础布局)
    - [x] Flex
    - [x] Grid
- [ ] Button(按钮)
- [ ] Form(表单)
    - [ ] Input
    - [ ] Radio
    - [ ] CheckBox
    - [ ] Textarea
- [ ] List(列表)
- [ ] Dialog(对话框)
- [ ] Modal()
- [ ] Toast(对话框)
- [ ] Navbar(导航条)
- [ ] Tabbar(标签栏)
- [ ] Tab(标签页)


## Change Log

[Change Log](./CHANGELOG.md)


## Support

Design By Mobile Internet Front-end Web Team