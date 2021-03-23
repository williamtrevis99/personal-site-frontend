import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/HomePage/index.vue'
import login from '../components/LoginPage/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        }
    ]
})