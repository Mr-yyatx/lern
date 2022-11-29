export default {
    namespaced: true,
    state: {
        info: {
            uname: 'yyyy',
            age: 23
        }
    },
    mutations: {
        updateUname(state: any, val: any) {
            state.info.uname = val
        },
        updateAge(state: any, val: any) {
            state.info.age = val
        }
    },
    actions: {
        asyncUpdate(store: any, val: any) {
            setTimeout(() => {
                store.commit('updateAge', val)
            }, 2000)
        }
    },
    getters: {
        format(state: any) {
            return state.info.uname + ',nice to meet you~'
        }
    }
}
