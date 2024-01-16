import './assets/styles/_button.css';
import './assets/styles/_form-group.css';
import './assets/styles/_form.css';
import './assets/styles/_input-group.css';
import './assets/styles/_page-auth.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

//Добавляем pinia как плагин для использования
const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
