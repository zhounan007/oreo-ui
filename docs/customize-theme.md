# 定制主题

`Oreo-UI` 设计规范上支持一定程度上的样式定制, 来满足不同业务和项目上多元化的视觉需求, 包括但不限于主色、圆角、边框和部分组件的视觉定制。


## 样式变量

`Oreo-UI` 样式采用less作为开发语言, 并定义了一系列的全局/组件样式变量, 可以根据不同需求进行相应修改。

- [默认样式变量](https://github.com/zhounan007/oreo-ui/blob/master/src/style/theme/default.less)

## 定制方式

`less` 文件变量覆盖

创建单独的`less`  文件, 在引入该文件。

```less

// default theme
@import "../theme/default.less";
// Custom theme
@import "your-custom-theme.less";

```
