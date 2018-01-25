<template>
    <div class="oreo-tabs-default-bar-line" :style="activeStyle">
    </div>
</template>
<script>
export default {
    name: 'z-tab-line',
    props: {
        panes: Array,
        position: String,
        pageSize: Number
    },
    computed: {
        activeStyle() {
            const style = {}
            let offset = {
                width: 0,
                height: 0
            }
            // 百分比
            let barLength = this.panes.length > this.pageSize ? 100 / this.pageSize : 100 / (this.panes.length || 1)
            this.panes.every((pane, index) => {
                let $el = this.$parent.$refs.bar[index]
                if (!$el) return false

                if (!pane.active) {
                    offset.width += $el.clientWidth
                    offset.height += $el.clientHeight
                    return true
                }
                return false
            })

            let unit = (this.position === 'top' || this.position === 'bottom') ? 'left' : 'top'
            // let unit = 'left'
            if (this.position === 'left') {
                style.height = `${barLength}%`
                style['right'] = 0
                style['top'] = `${offset.height}px`
            } else if (this.position === 'right') {
                style.height = `${barLength}%`
                style['left'] = 0
                style['top'] = `${offset.height}px`
            } else if (this.position === 'bottom') {
                style.width = `${barLength}%`
                style['left'] = `${offset.width}px`
            } else if (this.position === 'top') {
                style.width = `${barLength}%`
                style['left'] = `${offset.width}px`
            }
            // style.width = `${barLength}%`
            // style[`${unit}`] = `${offset}px`
            // const transform = 'translate${unit}(${offset}px)'
            // style.transform = transform
            // style.webkitTransform = transform
            // style.msTransform = transform
            return style
        }
    }
}
</script>
