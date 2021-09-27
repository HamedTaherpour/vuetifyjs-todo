import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    },
    {
        path: '/project',
        name: 'project',
        component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
    },
    {
        path: '/team',
        name: 'team',
        component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
