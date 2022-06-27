import { getCars } from "@/api/info"

const getDefaultState = () => {
    return {
      cars:[]
    }
  }
  
  const state = getDefaultState()
  
  const mutations = {
    GETCARS(state,data){
      state.cars=data
    }
  }
  
  const actions = {
  
    async getcars({commit}){

      let result=await getCars()
      if(result.code==201){
        commit('GETCARS',result.data) 
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
  
  