import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/helloWorld'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Hello
    }
  ]
})

export default router
