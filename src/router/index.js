import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const appName = 'NAILS APP'

const lazyLoadRoute = (pageName) => {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${pageName}`)
}

const routes = [
  { path: '/', name: 'home', component: lazyLoadRoute('Home'), meta: { title: `Home - ${appName}` } },
  { path: '/articles', name: 'articles', component: lazyLoadRoute('Articles'), meta: { title: `Articles - ${appName}` } },
  { path: '/articles/:id', name: 'article', component: lazyLoadRoute('Article'), meta: { title: `Article - ${appName}` } },
  { path: '*', name: 'not-found', component: lazyLoadRoute('NotFound'), meta: { title: `NotFound - ${appName}` } }
]

const router = new VueRouter({
  mode: "history",
  linkActiveClass: 'active',
  linkExactActiveClass: 'exacted',
  base: process.env.BASE_URL,
  routes,
})

export default router
