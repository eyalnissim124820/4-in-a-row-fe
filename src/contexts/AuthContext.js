import { createContext, useState } from "react";

export const Context = createContext();

const  AuthContext = ({children})=>{
  const [currentUser, setCurrentUser] = useState(()=>{
    return JSON.parse(localStorage.getItem('currentUser') || null)
  })

  const handleCurrentUser = (value)=>{
    setCurrentUser(value)
  }

  const values = { 
    currentUser,
    handleCurrentUser
  }
  
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}
export default AuthContext;