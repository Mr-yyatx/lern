<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()

interface Prop {
    msg?: number
}
defineProps<Prop>()

const to = () => {
    router.push({
        name: 'login',
        params: {
            age: 1
        }
    })
}

const updateName = () => {
    store.commit('user/updateUname', Date.now())
}

</script>

<template>
    <h1>home</h1>
    <button @click="to">去登录</button>
    <h2>用户{{ store.state.user.info.uname }}</h2>
    <button @click="updateName">修改名字</button>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
