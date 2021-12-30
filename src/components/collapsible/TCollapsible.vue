<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: 'TCollapsible'
})
</script>