import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const appName = 'NAILS APP'

const lazyLoadRoute = (pageName) => {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${pageName}`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoadRoute('Home'),
    meta: { title: `Home - ${appName}` }
  },
  {
    path: '/blogs/:id',
    name: 'blog',
    component: lazyLoadRoute('Blog'),
    meta: { title: `Blog - ${appName}` }
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: lazyLoadRoute('Blogs'),
    meta: { title: `Blogs - ${appName}` }
  },
  {
    path: '*',
    name: 'not-found',
    component: lazyLoadRoute('NotFound'),
    meta: { title: `NotFound - ${appName}` }
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
