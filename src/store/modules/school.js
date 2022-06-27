
import { getSchools } from "@/api/info"
const getDefaultState = () => {
  return {
    schools:[]
  }
}

const state = getDefaultState()

const mutations = {
  GETSCHOOLS(state,data){
    state.schools=data
  }
}

const actions = {
  async getschools({commit},params){

    let result=await getSchools(params)
    if(result.code==201){
      commit('GETSCHOOLS',result.data) 
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

