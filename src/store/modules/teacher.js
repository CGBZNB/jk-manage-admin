
import { getTeachers } from "@/api/info"
const getDefaultState = () => {
  return {
      teachers:[]
  }
}

const state = getDefaultState()

const mutations = {
  GETTEACHERS(state,data){
    state.teachers=data
  }
}

const actions = {

  async getteachers({commit},params){

    let result=await getTeachers(params)
    if(result.code==201){
      commit('GETTEACHERS',result.data) 
      
      return 'ok';
    }else{
        return Promise.reject(new Error('faile'));
    }

  }


}

export default {
  state,
  mutations,
  actions
}

