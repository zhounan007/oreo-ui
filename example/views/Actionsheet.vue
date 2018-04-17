<template>
  <flexview>
    <scrollview title="Actionsheet 选择框" sub-title="数据选择">
      <div class="message-content">
        <span>年级:</span>
        <span class="span_input" @click="selectGrade">{{userData.grade}}</span>
      </div>
      <div class="message-content">
        <span>性别:</span>
        <span class="span_input" @click="selectSex">{{userData.sex}}</span>
      </div>
      <z-actionsheet :showActionsheet="actionsheetShow" :sheetData="actionsheetData" @selectedMeaage="selectedMeaage" @closeActionsheet="closeActionsheet"></z-actionsheet>
    </scrollview>
  </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
  name: 'actionsheet',
  data() {
    return {
      actionsheetData: null,
      gradeActionsheetData: [
        {
          sheet: '大一',
          type: 'grade'
        },
        {
          sheet: '大二',
          type: 'grade'
        },
        {
          sheet: '大三',
          type: 'grade'
        },
        {
          sheet: '大四',
          type: 'grade'
        }
      ],
      sexActionsheetData: [
        {
          sheet: '男',
          type: 'sex'
        },
        {
          sheet: '女',
          type: 'sex'
        }
      ],
      actionsheetShow: false,
      userData: {
        sex: '男',
        grade: '大一'
      }
    }
  },
  components: {
    flexview,
    scrollview
  },
  methods: {
    selectGrade() {
      this.actionsheetData = this.gradeActionsheetData
      this.actionsheetShow = !this.actionsheetShow
    },
    selectSex() {
      this.actionsheetData = this.sexActionsheetData
      this.actionsheetShow = !this.actionsheetShow
    },
    selectedMeaage(item) {
      this.userData[item.type] = item.sheet
      this.actionsheetShow = false
    },
    closeActionsheet() {
      this.actionsheetShow = false
    }
  }
}
</script>
<style lang="less" scoped>
.message-content {
  height: 0.6rem;
  font-size: 0.26rem;
  padding: 0 0.12rem;
  text-align: center;
  margin-bottom: 0.2rem;
  .span_input {
    color: #999;
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 100%;
    line-height: 0.6rem;
    border: 1px solid #999;
    border-radius: 5px;
  }
}
</style>