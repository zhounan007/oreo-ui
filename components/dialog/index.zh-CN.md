---
category: Components
type: Feedback
title: Dialog
subtitle: 对话框
---

对话框, 目前支持`alert`,`confirm`

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## API


**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title    |    标题     | string  | `` |
| message    |   内容   | string  | `` |
| type    |   类型     | string(`alert`,`confirm`)  |  `` |
| theme   |   样式类型     | string(`ios`,`android`)  |  `` |
| callback   |   回调函数     | function  |  `` |
| okButtonText   |   按钮文本     | string  |  `确认` |
| cancelButtonText    |   按钮文本     | string  | `取消` |

**Slot**

名称 | 说明 
----|-----
| - |    Modal 的内容  |

**Event**

事件名称 | 说明 | 参数 
----|-----|------
| open    |    打开回调     | `` |
| close    |   关闭回调   | `` |

回调包含 `callback` 和 `promise` 两种:

- `callback(action)`
- `this.$dialog({}).then().catch()`


