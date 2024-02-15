import { createApp } from 'vue';
import App from './App.vue';
import router from './route/router'; // Chemin ajusté pour refléter le répertoire route

createApp(App).use(router).mount('#app');