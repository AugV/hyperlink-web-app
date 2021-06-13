import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing';
import About from '../views/About';
import HyperlinkExpo from '../views/HyperlinkExpo';
import HyperlinkExpoIntro from '../views/HyperlinkExpoIntro';
import SuperfluitatesExpoIntro from '@/views/SuperfluitatesExpoIntro';
import SuperfluitatesExpo from '../views/SuperfluitatesExpo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/hyperlink',
    name: 'HyperlinkExpoIntro',
    component: HyperlinkExpoIntro,
  },
  {
    path: '/hyperlink/expo',
    name: 'HyperlinkExpo',
    component: HyperlinkExpo,
  },
  {
    path: '/superfluitates',
    name: 'SuperfluitatesExpoIntro',
    component: SuperfluitatesExpoIntro,
  },
  {
    path: '/superfluitates/expo',
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
