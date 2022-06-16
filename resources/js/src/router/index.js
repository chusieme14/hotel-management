import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import admin from './admin'
import room from './room'
import { store } from '../store/store'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        ...admin,
        ...room,
        {
            path:'/login',
            component: () => import(/* webpackChunkName: "login" */'@/layout/login.vue'),
            name:'login'
        },
        {
            path:'*',
            component: () => import(/* webpackChunkName: "404" */'@/layout/404.vue'),
            name:'not-found'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/admin/checkuser`).then(({data})=>{
        
        if(to.name=='login' && data){
            next({
                name: 'not-found',
                query: { redirect: to.fullPath }
              })
            return 
        } 
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!data) {
                next({
                    name: 'login',
                    query: { redirect: to.fullPath }
                })
            } 
            else {
                if(!data.isadmin && (to.name=='admins')){
                    next({
                        name: 'not-found',
                        query: { redirect: to.fullPath }
                    })
                }
                store.dispatch("GET_USER_DETAILS", data);
                next()
            }
        } else {
            next()
        }
    })
  })

export default router