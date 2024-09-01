import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import './assets/styles/reset.css';
import './assets/styles/base.css';

createApp(App)
    .use(router)
    .mount('#app');