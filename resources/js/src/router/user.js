export default[
    {
        path:'/users',
        component: () => import(/* webpackChunkName: "admin" */'../pages/admins/index.vue'),
        meta:{ requiresAuth:true },
        name:'users'
    },
]