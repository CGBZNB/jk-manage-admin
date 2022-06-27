//axios 二次封装
import axios from 'axios'
import router from '@/router/index'
import store from '@/store';
import { getToken } from '@/utils/cookie';
const requests =axios.create({
    baseURL:'/api',
    timeout:5000,
});

//请求拦截器
requests.interceptors.request.use((config)=>{
  
    if (getToken()) {
        config.headers.Authorization =getToken()
       
      }
      return config
});
//响应拦截器
requests.interceptors.response.use((res)=>{

  console.log(res.data)


    return res.data;
},(err)=>{
    
  return Promise.reject(new Error('faile'));
});


export default requests;
