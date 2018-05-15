# Vue版新闻资讯


Vue项目构建模版

### 包含主要功能：
- 输出多页面功能
- 包含Vue-oreo库及oreo-ui库
- 新增less支持
- 支持多语言切换(方言)



### 备注

- 通过 git subtree 方式引用 vue-oreo 库,git subtree 具体使用方法参考(https://note.youdao.com/share/?id=13f7af0e41ddebf605cb693970d140c2&type=note#/),如果修改，请联系维护人员(为了统一管理,不建议直接在该库上进行修改)

- 由于该项目通过会话形式进行身份验证及其他安全校验, 本项目中通过Proxy代理进行。具体参看`config/index.js`,失效修改`Cookie`即可。

- 快捷路径方式：

```
    @ ==> src
    package ==> package
    @oreoUI ==> package/theme/lib
```
- 完美校园客户端`JSSDK`路径`http://static.17wanxiao.com/wmxy_jssdk/v1.2.5/wanxiao-js-api.js`

