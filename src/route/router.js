import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Utilisez le chemin relatif approprié pour accéder à vos composants
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;