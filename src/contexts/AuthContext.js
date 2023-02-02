import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser") || null);
  });

  const [authError, setAuthError] = useState(null)
  const handleCurrentUser = (value) => {
    setCurrentUser(value);
  };
  const handleAuthError =(value)=>{
    setAuthError(value)
  }

  //users/signup’ [POST]
  const signup = async (signupInfo) => {
    try {
      const res = await axios.post('http://localhost:8080/users/signup', signupInfo);
      return res;
    } catch (error) {
    
    }
  };
  //‘users/login’ [POST]
  const login = async (loginInfo) => {
    try {
      const res = await axios.post('http://localhost:8080/users/login', loginInfo)
      return res;
    } catch (error) {
      console.log(error);
      handleAuthError(error.response.data)
    }
  };

  const logout = ()=>{
    try{
      handleCurrentUser(null);
      localStorage.clear()
      return {logout: true }
    }catch(error){
      console.log(error)
      handleAuthError(error)
    }
  }

  

  const values = {
    currentUser,
    authError,
    handleCurrentUser,
    signup,
    login,
    logout,
    handleAuthError
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default AuthContext;
