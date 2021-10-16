import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Game',
      component: import(/* webpackChunkName: "about" */ '@/screens/Game'),
    },
  ],
});

export default router;
