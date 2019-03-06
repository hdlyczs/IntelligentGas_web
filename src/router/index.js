import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/views/Login'
import wrapperComponent from '@/views/wrapper'

//首页
import indexManagementRoutes from './index-management/index-management.route';


// 把各个模块下的路由拼接起来，作为home下的子路由
var childRoutes = [
  {
    path: '',
    // redirect: 'regional-management'
  }
];
childRoutes = childRoutes
    .concat(indexManagementRoutes)

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/home',
          component: wrapperComponent,
          children: childRoutes
        },
        {
          path:'/',
          name:'redirect',
          redirect:'/login'
        },
        {
          path: '/login',
          name: 'login',
          component: loginComponent
        },
      ,
    ]
})
