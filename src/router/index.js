import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing';
import Home from '../views/Home';
import About from '../views/About';
import Expo from '../views/Expo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/expo',
    name: 'Expo',
    component: Expo,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});

export default router;
