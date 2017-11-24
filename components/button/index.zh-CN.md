---
category: Components
type: Form
title: Button
subtitle: 按钮
---

按钮, 支持多种效果

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## API


**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| disabled    |    是否可点击     | boolean  | `false` |
| inline    |   是否是行内元素   | boolean  | `false` |
| small    |   按钮大小     | boolean  |  `false` |
| type    |   按钮类型     | string(``,`primary`,`success`,`error`)  |  `` |

**Slot**

名称 | 说明 
----|-----
| - |    button文字  |

**Event**

事件名称 | 说明 | 参数 
----|-----|------
| click    |    点击回调     | `` |

当`button`为`disabled`时, `click`事件无效 

