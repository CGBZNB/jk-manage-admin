import requests from '@/api/request'
import qs from 'qs'



  export function addExamAp(params) {
    return requests({
      url: '/exam/addap',
      method: 'get',
      params:params
    })
  };

  export function getExamApList(params) {
    return requests({
      url: '/exam/getap',
      method: 'get',
      params:params
    })
  };

  export function updateExamAp(params) {
    return requests({
      url: '/exam/bm',
      method: 'get',
      params:params
    })
  };
  export function updateLCAp(params) {
    return requests({
      url: '/lc/bm',
      method: 'get',
      params:params
    })
  };
  export function addLCAp(params) {
    return requests({
      url: '/lc/addap',
      method: 'get',
      params:params
    })
  };

  export function getLCApList(params) {
    return requests({
      url: '/lc/getap',
      method: 'get',
      params:params
    })
  };



  export function getCar(params) {
    return requests({
      url: '/car/getcars',
      method: 'get',
      params:params
    })
  }