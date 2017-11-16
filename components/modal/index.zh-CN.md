---
category: Components
type: Feedback
title: Modal
subtitle: 模态框
---

模态框, 满足各类弹窗需求

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## API


**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| position    |    模态框弹出的位置     | string(`top`,`right`,`botton`,`right`)  | `` |
| transition    |   动画名称   | string  | `oreo-modal-fade` |
| enter-class    |   进入动画     | string  |  `` |
| leave-class    |   离开动画     | string  |  `` |
| max    |   是否全屏,     | boolean  | `false` |

**Slot**

名称 | 说明 
----|-----
| - |    Modal 的内容  |

**Event**

事件名称 | 说明 | 参数 
----|-----|------
| open    |    打开回调     | `` |
| close    |   关闭回调   | `` |

需要区别的是在`open`或`close`方法的时候,也可以传入`callback`函数. 执行顺序依次为:
`openCallback`,`@open`,`closeCallback`,`@close`

