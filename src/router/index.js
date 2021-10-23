import { createRouter, createWebHistory } from 'vue-router';

const Home = import('@/screens/Home');

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    }
  ],
});

export default router;
