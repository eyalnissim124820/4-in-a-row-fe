import { createContext, useState } from "react";

export const Context = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser") || null);
  });

  //users/signup’ [POST]
  const signup = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  //‘users/login’ [POST]
  const login = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrentUser = (value) => {
    setCurrentUser(value);
  };

  const values = {
    currentUser,
    handleCurrentUser,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default AuthContext;
