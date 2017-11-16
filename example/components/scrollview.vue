<template>
    <div class="scrollview">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'scrollview'
}
</script>
<style lang="less">
.scrollview {
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all .2s ease-in-out;
    background: #efeff4;
    margin: 0 auto;
    .demo-hd {
        padding: 0.4rem;
        .demo-title {
            color: #3d3d3d;
            font-size: .6rem;
            font-weight: 400;
        }
        .demo-subtitle {
            font-size: .26rem;
            color: #3d3d3d;
            font-weight: 400;
        }
        .demo-name {
            font-size: .38rem;
            color: #404040;
            text-align: left;
        }
        .demo-home{
            padding-right: 10px;
        }
    }
    .demo-body {
        position: relative;
        padding: 0.2rem;
        h2 {
            /* padding: .3rem 0 .18rem .3rem; */
            color: #000;
            font-size: .32rem;
            font-weight: bolder;
            padding: 0 0 0 0.5rem;
        }
    }
    &::-webkit-scrollbar {
        display: none;
    }
    
}
</style>
