import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/statistics',
      name: 'landing-page',
      component: require('@/components/Statistics').default
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: require('@/components/0_welcome').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
