import { getAdmins } from "@/api/info"

const getDefaultState = () => {
  return {
   admins:[]
  }
}

const state = getDefaultState()

const mutations = {
  GETADMINS(state,data){
    state.admins=data
  }
}

const actions = {
  async getadmins({commit}){

    let result=await getAdmins()
    if(result.code==201){
      commit('GETADMINS',result.data) 
      
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

