import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
