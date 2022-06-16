export default[
    {
        path:'/rooms',
        component: () => import(/* webpackChunkName: "admin" */'../pages/rooms/index.vue'),
        meta:{ requiresAuth:true },
        name:'rooms'
    },
]