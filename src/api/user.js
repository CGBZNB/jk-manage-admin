import requests from '@/api/request'
import qs from 'qs'

export const reqPostLogin=(data)=>requests({
  url:'/user/login',
  method:'post',
  data:qs.stringify(data)
  });

  export const reqGetUserInfo=()=>requests({
      url:'/user/userinfo',
      method:'get',
      });
