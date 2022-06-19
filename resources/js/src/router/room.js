export default[
    {
        path:'/rooms',
        component: () => import(/* webpackChunkName: "admin" */'../pages/rooms/index.vue'),
        meta:{ requiresAuth:true },
        name:'rooms'
    },
    {
        path:'/preferences/rooms',
        component: () => import(/* webpackChunkName: "admin" */'../pages/rooms/settings/index.vue'),
        meta:{ requiresAuth:true },
        name:'room-type'
    },
]