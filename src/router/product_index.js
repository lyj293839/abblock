export default [
    {
        path: '/prods/:type_path/index',
        name: 'prods_type',
        component: () => import('@/views/prod_index/prods_type.vue'),
    },{
        path: '/prods/:type_path/:index',
        name: 'prods_index',
        component: () => import('@/views/prod_index/prods_index.vue'),
    }
]