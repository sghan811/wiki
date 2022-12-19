import { createApp } from 'vue'
import App from './App.vue'
import router from './vue-routers'

const app = createApp(App)
app.use(router).mount('#app')