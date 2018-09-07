import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/List'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/list:id/detail',
        name: 'Detail',
        component: Detail
    }
  ]
})
