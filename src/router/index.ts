import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import Projects from '../components/ProjectsPage.vue'
import Contact from '../components/ContactPage.vue'
import Code from '../components/about/CodePage.vue'
import Smartphone from '../components/about/SmartphonePage.vue'
import Climbing from '../components/about/ClimbingPage.vue'
import RouteSetting from '../components/about/RouteSettingPage.vue'
import Education from '../components/about/EducationPage.vue'
import Animaiton from '../components/about/AnimationPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/about/code', name: 'code', component: Code },
  { path: '/about/mobile', name: 'phone', component: Smartphone },
  { path: '/about/climbing', name: 'climbing', component: Climbing },
  { path: '/about/route-setting', name: 'route-setting', component: RouteSetting },
  { path: '/about/education', name: 'education', component: Education },
  { path: '/about/animation', name: 'animation', component: Animaiton }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
