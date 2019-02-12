import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/',
      name: 'helloword',
      component: HelloWorld
    }
  ]
})
