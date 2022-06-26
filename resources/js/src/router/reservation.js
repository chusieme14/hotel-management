export default[
    {
        path:'/reservations',
        component: () => import(/* webpackChunkName: "reservation" */'../pages/reservations/index.vue'),
        meta:{ requiresAuth:true },
        name:'reservations'
    },
    {
        path:'/check-ins',
        component: () => import(/* webpackChunkName: "reservation" */'../pages/check_ins/index.vue'),
        meta:{ requiresAuth:true },
        name:'check-ins'
    },
]