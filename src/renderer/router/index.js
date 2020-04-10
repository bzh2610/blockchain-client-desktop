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
      component: require('@/components/Dashboard').default
    },
    {
      path: '/article',
      name: 'article',
      component: require('@/components/Article').default
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: require('@/components/0_welcome').default
    },
    {
      path: '/votes',
      name: 'Votes',
      component: require('@/components/Votes').default
    },
    {
      path: '/communities',
      name: 'Communities',
      component: require('@/components/Communities').default
    },
    {
      path: '/profile',
      name: 'Profile',
      component: require('@/components/Profile').default
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/signup',
      name: 'signup-identification',
      component: require('@/components/signup/1_identification').default
    },
    {
      path: '/signup-address',
      name: 'signup-address',
      component: require('@/components/signup/2_address').default
    },
    {
      path: '/signup-recap',
      name: 'signup-recap',
      component: require('@/components/signup/3_recap').default
    },
    {
      path: '/signup-finished',
      name: 'signup-finished',
      component: require('@/components/signup/4_finished').default
    },
    {
      path: '/signin',
      name: '1_signin',
      component: require('@/components/1_signin').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
