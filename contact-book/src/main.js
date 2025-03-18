import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import ContactDetails from './views/ContactView.vue'

// Set up Vue Router
const routes = [
  { path: '/', component: Home },
  { path: '/contact/:id', component: ContactDetails }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
