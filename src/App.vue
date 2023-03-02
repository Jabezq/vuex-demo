<template>
    <div id="appWrap">
        <home></home>
        <div>APP: {{ $store.state.counter }}</div>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    import Home from './pages/Home.vue'

    export default {
        components: {
            Home
        },
        methods: {
            increment() {
                this.$store.commit("increment");
            }
        }
    }
</script>

<style scoped>

</style>