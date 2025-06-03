import { createWebHistory, createRouter } from 'vue-router';
import SignForm from './components/SignForm.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  { path: '/', name: 'default', component: HelloWorld },
  { path: '/sign', name: 'sign', component: SignForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
