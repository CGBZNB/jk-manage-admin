import { reqPostLogin,reqGetUserInfo} from '@/api/user'
import { getToken,setToken ,removeToken} from "@/utils/cookie";




const state = {
  token:getToken(),
  userinfo:{}
}

const mutations = {
  changeLogin (state, token) {
    console.log('store:'+ token)
    state.token = token;
   
  },
  LOGOUT(state) {
   state.token=''
   state.userinfo={}
   removeToken()
    
  },
  GETUSER(state,data){
    state.userinfo=data
   // localStorage.setItem('userinfo', JSON.stringify(data));
  }

}

const actions = {

  async login({commit},pararms){
    console.log(pararms)
    let result=await reqPostLogin(pararms)
    if(result.code==201){
    
        commit('changeLogin',result.data)
        setToken(result.data)
        return 'ok';
    }else{
        return Promise.reject(new Error('faile'));
    }

},
async getuserinfo({commit}){

  let result=await reqGetUserInfo()
  if(result.code==200){
      commit('GETUSER',result.data)
      return 'ok';
  }else{
      return Promise.reject(new Error('faile'));
  }

},logout({commit}){
  commit('LOGOUT')
}
  
}

export default {

  state,
  mutations,
  actions
}

