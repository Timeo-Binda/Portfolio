import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import './index.css'
import NotFound from '@/components/Page404.vue' 
import { createHead } from '@unhead/vue'
import V3ScrollLock from 'v3-scroll-lock'

const scrollToAnchor = (to: RouteLocationNormalized) => {
  if (to.hash) {
    const element = document.getElementById(to.hash.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    scrollToAnchor(to)
  }
})

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.use(V3ScrollLock, {})


app.mount('#app')
