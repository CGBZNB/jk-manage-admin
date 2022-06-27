import { getSubjects } from "@/api/info"


const getDefaultState = () => {
  return {
      subjects:[],
      list:[]
  }
}

const state = getDefaultState()

const mutations = {
  GETSUBJECTS(state,data){
    state.subjects=data
  },
  GETLIST(state,data){
    console.log(data)
    state.list=state.subjects.slice((data.page - 1) * data.limit, (data.page - 1) * data.limit + data.limit)
  }
}

const actions = {

  async getsubjects({commit}){

    let result=await getSubjects()
    if(result.code==200){
      commit('GETSUBJECTS',result.data) 
      return 'ok';
    }else{
        return Promise.reject(new Error('faile'));
    }

  },
  getlist({commit},param){
    commit('GETLIST',param)
  }


}

export default {

  state,
  mutations,
  actions
}

