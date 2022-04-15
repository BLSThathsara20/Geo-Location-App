import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/Gmap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import firebase from 'firebase/compat/app'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if rout requirs auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, processed to route
      next()
    }else{
      // no user signed in, redirect to login page
      next({ name : 'Login' })
    }
  }else {
    next()
  }
})

export default router
