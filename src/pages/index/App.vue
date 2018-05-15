<template>
  <div id="app">
    <!-- <Ecard></Ecard>
    <ModuleList :modules="modules"></ModuleList> -->
  </div>
</template>

<script>
// import { Ecard } from '@/components/ecard';
// import { ModuleList } from '@/components/moduleList'
export default {
  name: 'App',
  components: {
    // Ecard,
    // ModuleList
  },
  data() {
    return {
      // modules: [{ "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:22:01", "cusSort": 1, "describe": "方便快捷", "functionId": 5, "functionSort": 1, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/d601ef56-f4d0-4e21-b71f-60ce3cabf59b.png", "name": "充值", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 3, "typeCode": "recharge" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:25:09", "cusSort": 2, "describe": "本月交易记录", "functionId": 6, "functionSort": 2, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/50ec430b-13a1-4199-b40a-5168c5812c82.png", "name": "交易明细", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 4, "typeCode": "trade" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:26:09", "cusSort": 3, "describe": "一键挂失", "functionId": 7, "functionSort": 3, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/dc3901da-c3b8-48fd-928c-30661682bb19.png", "name": "卡挂失", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 5, "typeCode": "lostCard" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:27:55", "cusSort": 5, "describe": "修改查询密码", "functionId": 9, "functionSort": 5, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/c20b240e-8df6-4c42-8284-27a47cf5fcd0.png", "name": "修改密码", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 7, "typeCode": "modifyPassword" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:28:33", "cusSort": 6, "describe": "有问题看这里", "functionId": 10, "functionSort": 6, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/8599d308-5b8e-4454-890c-c178a5bb9f8e.png", "name": "常见问题", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 8, "typeCode": "faq" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-20 11:23:39", "cusSort": 90, "describe": "", "functionId": 12, "functionSort": 90, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/b4877076-fe04-4630-8a25-19591ba796d9.png", "name": "解绑一卡通", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 11, "typeCode": "unBind" }, { "builtIn": true, "createOperator": "admin", "createTime": "2016-08-03 15:29:05", "cusSort": 99999, "describe": "有的学校有,有的学校无", "functionId": 11, "functionSort": 99999, "imagePath": "https://ecardh5.17wanxiao.com/ecardh5/~/functionPhoto/35b77431-95b0-4226-99cb-46db09cf6223.png", "name": "未领款", "passParam": false, "state": "启用", "system": true, "systemName": "全国级", "toUrl": "1", "type": 10, "typeCode": "queryUnclaim" }]
    }
  },
  created() {
    // this.$http.baseInfo({}, function ([status, data]) {
    //     console.log(status)
    // })
  }

}
</script>

<style>

</style>
