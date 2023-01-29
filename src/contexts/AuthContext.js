import { createContext, useState } from "react";

export const Context = createContext();

const  AuthContext = ({children})=>{
  const [currentUser, setCurrentUser] = useState(()=>{
    return JSON.parse(localStorage.getItem('currentUser') || null)
  })

  const handleCurrentUser = (value)=>{
    setCurrentUser(value)
  }
  
  return (
    <Context.Provider value={{currentUser, handleCurrentUser}}>
      {children}
    </Context.Provider>
  )
}
export default AuthContext;