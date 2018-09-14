<template>
    <div :class="b([direction,justify])">
        <slot></slot>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'flex',
    props: {
        direction: String,
        justify: String
    }
})
</script>