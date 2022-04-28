<template>
    <div class="example">{{ msg }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const data = reactive({
            msg: 'hello world! ~~'
        })

        return {
            ...toRefs(data)
        }
    }
}
</script>
<style>
.example {
    color: blue;
}
</style>