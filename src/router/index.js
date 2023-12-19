import { createRouter, createWebHistory } from "vue-router";

import User from './modules/user'

// 路由信息
let routes = [
  
  {
    path: "/",
    component: () => import("@/views/home/home.vue"),
    children: [

      // 个人模块
      // ...User,
      
      {
        path: '/',
        component: () => import("@/views/index.vue"),
        name: 'Index',
        meta: {
          loginRequired: false,
          keepAlive: true, // 需要缓存
          deepth: 0.1 // 定义路由的层级
        }
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export async function setupRouter(app) {
  app.use(router)
  await router.isReady()
}

export default router;
