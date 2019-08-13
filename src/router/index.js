import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App.vue'
import Index from '@/components/Index.vue'
import register from '@/components/register.vue'
import login from '@/components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App
    // },
    
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ],
  mode:'history'
})
