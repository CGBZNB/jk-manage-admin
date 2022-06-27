export const setSubject=(data)=>{
  
  localStorage.setItem("SUBJECT",data);
}

export const getSubject=()=>{
  return JSON.parse(localStorage.getItem("SUBJECT"))
}

export const setToken=(token)=>{
  console.log('LOCALSTORAGE:'+ token)
  localStorage.setItem("TOKEN",token);
}

export const getToken=()=>{
  return localStorage.getItem("TOKEN");
}

export const removeToken=()=>{
  return localStorage.removeItem("TOKEN");
}