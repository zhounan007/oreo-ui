<template>
    <div class="ecard-wrapper">
        <div class="ecard-content">
            <div class="ecard-box">
                <div class="logo">
                    <img :src="logoUrl" alt="logo" width="100%">
                </div>
                <div class="card-no">150817</div>
                <div class="qrcode"></div>
                <div class="money">18.2</div>
                <div class="tip">{{$t('home.tip')}}</div>
            </div>
            <div class="ecard-bottom"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Ecard',
    data() {
        return {
            logoUrl: 'https://ecardh5.17wanxiao.com/ecardh5/ecard/img/wx-logo-t.png'
        }
    }
}
</script>
<style lang="less">
@import "./ecard.less";
</style>
