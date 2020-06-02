import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/Dashboard').default
    },
    /*
    // Example of component template
    {
      path: '/home/',
      component: require('@/components/templates/default').default,
      children: [
        {
          path: 'statistics',
          component: require('@/views/Statistics').default
        }
      ]
    },*/
    {
      path: '/statistics',
      name: 'statistics',
      component: require('@/views/Statistics').default
    },
    {
      path: '/article',
      name: 'article',
      component: require('@/views/Article').default
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: require('@/views/0_welcome').default
    },
    {
      path: '/votes',
      name: 'Votes',
      component: require('@/views/Votes').default
    },
    {
      path: '/communities',
      name: 'Communities',
      component: require('@/views/Communities').default
    },
    {
      path: '/profile',
      name: 'Profile',
      component: require('@/views/Profile').default
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('@/views/Settings').default
    },
    {
      path: '/signup',
      name: 'signup-identification',
      component: require('@/views/signup/1_identification').default
    },
    {
      path: '/signup-address',
      name: 'signup-address',
      component: require('@/views/signup/2_address').default
    },
    {
      path: '/signup-recap',
      name: 'signup-recap',
      component: require('@/views/signup/3_recap').default
    },
    {
      path: '/signup-finished',
      name: 'signup-finished',
      component: require('@/views/signup/4_finished').default
    },
    {
      path: '/signin',
      name: '1_signin',
      component: require('@/views/1_signin').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
