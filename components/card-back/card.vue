<template>
    <div class="oreo-card">
        <div class="oreo-card-header">
            <slot name="card-header">
                <div class="oreo-card-inner">
                    <slot name="card-header-inner">
                        {{header}}
                    </slot>
                </div>
            </slot>
        </div>
        <div class="oreo-card-content">
            <slot name="card-content"></slot>
            <div :class="{'oreo-card-media': media, 'oreo-card-inner': contentInner}">
                <slot name="card-content-inner">
                    {{content}}
                </slot>
            </div>
        </div>
        <div class="oreo-card-footer">
            {{footer}}
            <slot name="card-footer" v-if="footer === void 0"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'z-card',
    props: {
        header: String,
        footer: String,
        content: String,
        media: Boolean
    },
    computed: {
        contentInner() {
            return this.content !== void 0 || this.$slots['card-content-inner']
        }
    }
}
</script>
