import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js';
import {ElMessage} from 'element-plus';
import personal from "./personal";
import prod_index from "./product_index";
const routerHistory = createWebHistory()
const routes=[
    {
      path: '/',
      name: 'index',
      redirect:'/',
      component: () => import('@/views/index.vue'),
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home.vue'),
          meta: { 
            title:'aablocks.com'
          }
        },{
          path: '/about',
          name: 'about',
          component: () => import('@/views/about_us.vue'),
          meta: { 
            title:'About Us',
          }
        },{
          path: '/node/contactUs',
          name: 'contactUs',
          component: () => import('@/views/contact_us.vue'),
          meta: { 
            title:'contact Us'
          }
        },{
          path: '/products',
          name: 'products',
          component: () => import('@/views/prod.vue'),
          meta: { 
            title:'Products'
          }
        },{
          path: '/Category/:id',
          name: 'Category',
          component: () => import('@/views/prod_Category.vue'),
          meta: { 
            title:'Products Category'
          }
        },{
          path: '/prod/:id',
          name: 'prod',
          component: () => import('@/views/prod_detail.vue'),
          meta: { 
            title:'abblock'
          }
        },{
          path: '/node/ordering',
          name: 'ordering',
          component: () => import('@/views/ordering.vue'),
          meta: { 
            title:'abblock'
          }
        },{
          path: '/node/shipping',
          name: 'shipping',
          component: () => import('@/views/shipping.vue'),
          meta: { 
            title:'abblock'
          }
        },{
          path: '/quotation',
          name: 'quotation',
          component: () => import('@/views/quotation.vue'),
          meta: { 
            title:'abblock'
          }
        },{
          path: '/user/cart',
          name: 'cart',
          component: () => import('@/views/cart.vue'),
          meta: { 
            title:'abblock',
            isLogin:true
          }
        },{
          path: '/user/pay',
          name: 'pay',
          component: () => import('@/views/pay.vue'),
          meta: { 
            title:'abblock',
            isLogin:true
          }
        },{
          path: '/news/index',
          name: 'news',
          component: () => import('@/views/about/news.vue'),
          meta: { 
            title:'abblock',
          }
        },{
          path: '/node/:id',
          name: 'node',
          component: () => import('@/views/about/news_detail.vue'),
          meta: { 
            title:'abblock',
          }
        },{
          path: '/node/terms_conditions',
          name: 'terms_conditions',
          component: () => import('@/views/about/terms_conditions.vue'),
          meta: { 
            title:'abblock',
          }
        },{
          path: '/node/Distributors',
          name: 'distributors',
          component: () => import('@/views/about/distributors.vue'),
          meta: { 
            title:'abblock',
          }
        },{
          path: '/register',
          name: 'register',
          component: () => import('@/views/register.vue'),
          meta: { 
            title:'abblock',
          }
        },
        ...prod_index,
        ...personal,
        {
          path: "/:pathMatch(.*)*",
          name:'404',
          component: () => import('@/components/404.vue'),
          meta: { 
            title:'404 Not found',
          }
        }
      ]
    },
]
const router = createRouter({
  history: routerHistory,
  routes
})

router.beforeEach((to,from,next)=>{ 
  if(to.meta.isLogin){
    let token = localStorage.getItem('token');
    if(!token){
      store.state.is_login = true
      ElMessage.error('Please login')
      next({path:from.path})
    }else{
      store.state.is_login = false
      store.commit('toTop',to.meta.title)
      next()
    }
  }else{
    store.state.is_login = false
    store.commit('toTop',to.meta.title)
    next()
  }
})

export default router