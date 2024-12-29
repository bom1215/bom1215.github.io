// import { createMemoryHistory, createRouter } from 'vue-router'

// import Home from '@/pages/About.vue'
// import Portfolio from '@/pages/Portfolio.vue'
// import About from '@/pages/About.vue'
// import Post from '@/pages/Post.vue'

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
//   { path: '/portfolio', component: Portfolio },
//   { path: '/post', component: Post },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })
// export default router;

// router/index.js 또는 router.js
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/about', component: () => import('@/pages/About.vue') },
  { path: '/portfolio', component: () => import('@/pages/Portfolio.vue') },
  { path: '/post', component: () => import('@/pages/Post.vue') },
];

const router = createRouter({
  history: createWebHashHistory(), // Hash 모드 사용
  routes,
});

export default router;
