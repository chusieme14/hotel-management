export default[
    {
        path:'/admins',
        component: () => import(/* webpackChunkName: "admin" */'../pages/admins/index.vue'),
        meta:{ requiresAuth:true },
        name:'admins'
    },
]