import Home from './components/Home.vue';
import Premium from './components/Premium.vue';
import Free from './components/Free.vue';
import Subscription from './components/Subscription.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/premium', component: Premium },
  { path: '/free', component: Free },
  { path: '/subscribe', component: Subscription },
  { path: '*', redirect: '/' },
];
