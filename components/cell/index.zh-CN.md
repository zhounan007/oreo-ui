---
category: Components
type: Display
title: Cell
subtitle: 单元格
---

单元格, 应用场景用于信息展示,通常配合`Cell-Group`使用。

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## API


**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title    |    标题     | `String`  | `-` |
| value    |   内容   | `String`  | `-` |
| link    |   是否显示链接图标并开启点击反馈    | `Boolean`  |  `false` |
| label    |   标题下方的描述信息     | `String`  |  `-` |
| index    |   唯一标识,方便回调函数处理     | `String|Number`  |  `-` |
| url    |   链接地址     | `String`  |  `-` |
| replace    |   跳转时是否替换当前history     | `Boolean`  |  `-` |
| to    |   路由跳转对象, `vue-router`中`to`    | `String|Object`  |  `` |

**Slot**

名称 | 说明 
----|-----
| icon |    自定义`icon`  |

**Event**

事件名称 | 说明 | 参数 
----|-----|------
| click    |    点击cell回调     | `-` |

当`link`设置为`false`时,不影响`click`点击事件,`click`事件和`url,to` 不是互斥型。

