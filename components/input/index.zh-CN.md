---
category: Components
type: Display
title: Input
subtitle: 输入框
---

单元格, 应用场景用于信息展示,通常配合`Cell-Group`使用。

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## API


**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| placeholder    |    占位信息     | `String`  | `-` |
| label    |   标签   | `String`  | `-` |
| type    |   类型,目前支持两种    | `text`,`password`  |  `text` |
| disabled    |   是否可编辑     | `Boolean`  |  `-` |
| value    |   值,通过`v-model`绑定     | `String|Number`  |  `-` |
| rightAlign    |   文本是否右对齐     | `Boolean`  |  `false` |

