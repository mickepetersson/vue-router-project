import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import localStoragePlugin from './plugins/pinia/localStoragePlugin';

const app = createApp(App);
const pinia = createPinia();

//create a pinia plugin
//this plugin is available in all pinia stores
function ourPlugin() {
    return {
        secret: 'Dummy secret',
    };
}

pinia.use(ourPlugin);
pinia.use(localStoragePlugin);
//use the pinia plugin
app.use(pinia);
app.use(router);

app.mount('#app');
