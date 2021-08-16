export default [
    {
        path: '/user',
        name: 'user',
        redirect:'order',
        component: () => import('@/views/user/index.vue'),
        children:[
          {
            path: '/user/order',
            name: 'user_order',
            component: () => import('@/views/user/order.vue'),
            meta: { 
              title:'Orders',
              isLogin:true
            }
          },{
            path: '/user/order/detail',
            name: 'user_orderDetail',
            component: () => import('@/views/user/order_detail.vue'),
            meta: { 
              title:'Orders Detail',
              isLogin:true
            }
          },{
            path: '/user/deliveryaddr_list',
            name: 'user_ship',
            component: () => import('@/views/user/ship_address.vue'),
            meta: { 
              title:'Shipping Address',
              isLogin:true
            }
          },{
            path: '/user/billaddr_list',
            name: 'user_bill',
            component: () => import('@/views/user/bill_address.vue'),
            meta: { 
              title:'Billing Address',
              isLogin:true
            }
          },{
            path: '/user/account',
            name: 'user_account',
            component: () => import('@/views/user/account.vue'),
            meta: { 
              title:'Account Setting',
              isLogin:true
            }
          },{
            path: '/user/resetpwd',
            name: 'user_reset',
            component: () => import('@/views/user/reset_pass.vue'),
            meta: { 
              title:'Reset Password',
              isLogin:true
            }
          }
        ]
    },
]