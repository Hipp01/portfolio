import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import Projects from '../components/ProjectsPage.vue'
import Contact from '../components/ContactPage.vue'
import Code from '../components/about/CodePage.vue'
import Smartphone from '../components/about/SmartphonePage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/about/code', name: 'code', component: Code },
  { path: '/about/phone', name: 'phone', component: Smartphone }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
