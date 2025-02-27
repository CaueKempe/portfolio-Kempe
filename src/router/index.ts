/* 

// EXEMPLO

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ResumeView from '@/views/ResumeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/curriculo', component: ResumeView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
 */