import { getStudents } from "@/api/info"

const getDefaultState = () => {
  return {
    students:[]
  }
}

const state = getDefaultState()

const mutations = {
  GETSTUDEBTS(state,data){
    state.students=data
  }
}

const actions = {
  async getstudents({commit},params){

    let result=await getStudents(params)
    if(result.code==201){
      commit('GETSTUDEBTS',result.data) 
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

