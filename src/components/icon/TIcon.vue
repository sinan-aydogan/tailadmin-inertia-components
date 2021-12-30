<template>
        <component :is="component" :class="styleClass"/>
</template>

<script>
import {defineComponent,defineAsyncComponent,createApp} from "vue";

export default defineComponent({
    name: "TIcon",
    props: {
        name: {
            type: String
        },
        size: {
            type: Number,
            default: 3
        },
        design: {
            type: String,
            default: 'solid'
        },
        inline: {
            type: Boolean,
        }
    },
    setup(props,context) {
        const app = createApp({})
        /*Design Check*/
        const design = props.design
        const size = props.size
        const styleClass = 'icon-size-' + size

        /*Import Icons*/
        const component = defineAsyncComponent(() => import(`@/Components/Icon/${props.design}/${props.name}.vue`))

        return {styleClass,component}
    }
})
</script>
