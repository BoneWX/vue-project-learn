import { createRouter, createWebHistory } from 'vue-router' //创建路由实例，创建history模式路由

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',//访问根路由时，默认也会渲染
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
export default router