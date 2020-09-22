import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing';
import Home from '../views/Home';
import About from '../views/About';
import HyperlinkExpo from '../views/HyperlinkExpo';
import SuperfluitatesExpo from '../views/SuperfluitatesExpo';

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
    path: '/hyperlink',
    name: 'HyperlinkExpo',
    component: HyperlinkExpo,
  },
  {
    path: '/superfluitates',
    name: 'SuperfluitatesExpo',
    component: SuperfluitatesExpo,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: Landing,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});

export default router;
