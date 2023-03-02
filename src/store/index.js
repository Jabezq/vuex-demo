import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            counter: 100,
            message: "Hello Vuex"
        }
    },
    mutations: {
        increment(state) {
            console.log('state', state);
            state.counter++
        }
    }
})

export default store
