<template>
    <div>
        Home: {{ counter }} <br>
        Home: {{ message }}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            // 取值方式一
            counter() {
                return this.$store.state.counter
            },
            // 取值方式二：数组
            ...mapState(["message"])
        }
    }
</script>

<style scoped>

</style>