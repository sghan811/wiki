import {createApp} from 'vue'
import App from './App.vue'
import router from './vue-routers'
import vueCookies from "vue-cookies";

const app = createApp(App)
app.use(vueCookies);
app.$cookies.config("7d");
app.use(router).mount('#app')