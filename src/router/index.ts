import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/login.vue';

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: [
    {
      path: '/',
      redirect: '/login',
      children: [
        {
          path: 'login',
          component: Login,
        },
        {
          path: 'home',
          component: () => import('@/pages/home.vue'),
        },
      ],
    },
  ],
});

export default router;
