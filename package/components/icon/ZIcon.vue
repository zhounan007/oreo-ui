<template>
    <svg :class="classNames" @click="handlerClick">
        <use :xlink:href="link" />
    </svg>
</template>
<script>
export default {
    name: 'z-icon',
    data() {
        return {
            link: ''
        }
    },
    props: {
        type: String,
        className: String
    },
    computed: {
        classNames() {
            return {
                'oreo-icon': true,
                [`oreo-icon-${this.type}`]: !!this.type
            }
        }
    },
    created() {
        this.render()
    },
    beforeUpdate() {
        this.render()
    },
    methods: {
        handlerClick() {
            this.$emit('click')
        },
        render() {
            let svg = this.renderSvg()
            if (!svg) {
                throw new Error(`Invalid Type [${this.type}]`)
            } else {
                this.link = `#${this.type}`
            }
        },
        renderSvg() {
            let svg
            try {
                // svg = require(`OreoUI/src/style/assets/${this.type}.svg`)
                svg = require(`./assets/${this.type}.svg`)
                return svg
            } catch (e) {
                return svg
            } finally {
            }
        }
    }

}
</script>
