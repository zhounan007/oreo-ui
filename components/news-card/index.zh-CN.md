---
category: Components
type: ZNewsCard
title: ZNewsCard
subtitle: 新闻列表
---

新闻列表, 支持多种效果

 <!-- ### 规则 
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。 -->


## ZTextCard API

**Attributes**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title   |   标题   |   `String`  | - |
| brief   |   描述   |   String  | - |
| type    | tag颜色  |   String  | - |
| info    |   标记   |   String  | - |
| source  |   来源   |   String  | - |
| num     |   数量   |  String/Number | - |
| date    |   时间   |   String  | - |
| titleStyle | title样式 | Object | `fontSize: .36rem, marginBottom: .1rem`

## ZTag API

**Attributes**

属性 | 说明 | 类型 | 默认值
----|----|----|-----
|type  |  颜色  | string(`default`, `red`, `blue`, `green`, `purple`, `orange`) | `default`

**ZTag Slot**

名称 | 说明 
----|-----
| - |    tag文字  |
