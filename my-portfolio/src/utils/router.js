import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/about', component: () => import('@/pages/About.vue') },
  { path: '/portfolio', component: () => import('@/pages/Portfolio.vue') },
  { path: '/post', component: () => import('@/pages/PostMain.vue') },
  { path: '/post/:id', component: () => import('@/pages/Post.vue') },
  
];

const router = createRouter({
  history: createWebHashHistory(), // Hash 모드 사용
  routes,
});

export default router;
