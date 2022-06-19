export default[
    {
        path:'/rooms',
        component: () => import(/* webpackChunkName: "admin" */'../pages/rooms/index.vue'),
        meta:{ requiresAuth:true },
        name:'rooms'
    },
    {
        path:'/room-types',
        component: () => import(/* webpackChunkName: "admin" */'../pages/rooms/settings/index.vue'),
        meta:{ requiresAuth:true },
        name:'room-types'
    },
]