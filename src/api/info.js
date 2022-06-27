import request from '@/api/request'

export function getAdmins() {
    return request({
      url: '/admin/list',
      method: 'get'
    })
  }

  export function getSchools(params) {
    return request({
      url: '/school/list',
      method: 'get',
      params:params
    })
  }

  export function getTeachers(params) {
    return request({
      url: '/teacher/list',
      method: 'get',
      params:params
    })
  }

  export function getStudents(params) {
    return request({
      url: '/student/list',
      method: 'get',
      params:params
    })
  }

  export function rzstudent(params) {
    return request({
      url: '/student/rzty',
      method: 'post',
      params:params
    })
  }
  export function deltudent(params) {
    return request({
      url: '/student/delst',
      method: 'post',
      params:params
    })
  }

  export function rzsteacher(params) {
    return request({
      url: '/teacher/rzty',
      method: 'post',
      params:params
    })
  }
  export function delteacher(params) {
    return request({
      url: '/teacher/delst',
      method: 'post',
      params:params
    })
  }
  export function rzschool(params) {
    return request({
      url: '/school/rzty',
      method: 'post',
      params:params
    })
  }
  export function delschool(params) {
    return request({
      url: '/school/delst',
      method: 'post',
      params:params
    })
  }
  export function getSubjects() {
    return request({
      url: '/subject/getsubjects',
      method: 'get'
    })
  }

  export function getCars() {
    return request({
      url: '/car/list',
      method: 'get'
    })
  }


