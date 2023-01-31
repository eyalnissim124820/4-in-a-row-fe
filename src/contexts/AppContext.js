import { createContext } from "react";
import axios from "axios";

export const Context = createContext();

const AppContext = ({ children }) => {
  //‘/scores [POST]  Add Score API
  const addMatchScore = async () => {
    try {
      const res = axios;
    } catch (error) {
      console.log(error);
    }
  };

  // ‘/scores [GET] (Protected to user only) Get All Users Score History API
  const getScoreHistory = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  // ‘/scores/:id [GET] (Protected to user only) Get Logged In User’s Score history API
  const getUserScoreHistory = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  //‘/scores/last/:id [GET] (Protected to user only) Get user last score API
  const getUserLastMatchScore = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  //Get user highest score API ‘/scores/winningStreak/:id [GET] (Protected to user only)
  const getUserWinningStreack = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const createMatch = (userId) =>{
    try{
      const roomId = axios.post('http://localhost:8080', userId)
      return roomId
    }catch(error){
      console.log(error)
    }
  }
  const joinMatch = (userId, roomId) => {

  }

  const values ={
    addMatchScore,
    getScoreHistory,
    createMatch,
    joinMatch
  }
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default AppContext;
