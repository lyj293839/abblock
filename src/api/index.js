import axios from 'axios';
import qs from 'qs';
import {ElMessage} from 'element-plus';
import router from '@/router/index.js'
import store from '@/store'
import {sign} from '@/api/crypto.js';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = import.meta.env.VITE_BASE_API;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    let timestamp = Math.round(new Date() / 1000);
    let signstr = sign(timestamp);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
      time:timestamp,
      sign:signstr
    }
    if(localStorage.getItem('token')){
      config.headers.Authorization = localStorage.getItem('token');
      config.headers.userToken = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code ==402){
      store.commit('logout')
      router.push({
        path:"/",
      }) 
      ElMessage.error('Please login');
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}