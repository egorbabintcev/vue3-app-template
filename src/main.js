import { createApp } from 'vue';
import Main from '@/screens/Main';
import router from './router';
import store from './store';

createApp(Main)
  .use(store)
  .use(router)
  .mount('#app');
