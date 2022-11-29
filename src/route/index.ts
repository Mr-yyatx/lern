import { createRouter, createWebHashHistory } from "vue-router";

const hello = () => import('@/pages/hello.vue')
const home = () => import('@/pages/home.vue')
const login = () => import('@/pages/login.vue')

const routes = [
    {
        path: '/',
        redirect: '/hello'
    },
    {
        path: "/hello",
        name: "hello",
        component: hello,
        beforeEnter: (to: any, from: any) => {
            console.log(to, from);
        }
    },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})