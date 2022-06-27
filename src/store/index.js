import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import admin from './modules/admin'
import school from './modules/school'
import teacher from './modules/teacher'
import student from './modules/student'
import car from './modules/car'
import subject from './modules/subject'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    admin,
    school,
    teacher,
    student,
    car,
    subject
  },
  getters
})

export default store
