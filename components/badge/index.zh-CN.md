---
category: Components
type: Badge
title: Badge
subtitle: 徽章/标记
---

徽章/标记, 支持多种效果

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->

## ZBadge API

**Attributes**

属性 | 说明 | 类型 | 默认值
-----|-----|-----|-----
| type  | 类型 | String(`dot`, `text`) | `text`

**slot**

名称 | 说明
----|-----
| - | badge文字

## ZTag API

**Attributes**

属性 | 说明 | 类型 | 默认值
----|----|----|-----
|   type  |  颜色  | String(`default`, `red`, `blue`, `green`, `purple`, `orange`) | `default`(mark、triangle为`true`时，此属性无效)
|   size  |  大小   | String(`small`,`middle`,`big`) | `middle`(mark、triangle为`true`时，此属性无效)
|   mark  |  圆角   | Boolean  | `false`
| triangle | 三角 | Boolean | `false`
| direction | 三角方向 | String(`left`,`right`) | `left`
|   text  | 文本内容 | String | -
