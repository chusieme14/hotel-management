export default[
    {
        path:'/reservations',
        component: () => import(/* webpackChunkName: "reservation" */'../pages/reservations/index.vue'),
        meta:{ requiresAuth:true },
        name:'reservations'
    },
]