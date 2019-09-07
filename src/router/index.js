import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [//所有路由
    {
      path: '/msite',
      name: 'Login',
      component: () => import('@/pages/MSite/MSite'),
      meta:{
        showFooter:true,
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/pages/Search/Search'),
      meta:{
        showFooter:true,
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/Profile/Profile'),
      meta:{
        showFooter:true,
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/pages/Order/Order'),
      meta:{
        showFooter:true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login/Login')
    }
  ]
})
