import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [matchDetails, setMatchDetails] = useState(null);

  const handleMatchDetails = (value) => {
    setMatchDetails(value);
  };

  //‘/scores [POST]  Add Score API
  const addMatchScore = async () => {
    try {
      const res = axios.post();
    } catch (error) {
      console.log(error);
    }
  };

  // ‘/scores [GET] (Protected to user only) Get All Users Score History API
  const getScoreHistory = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users/topScores");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // ‘/scores/:id [GET] (Protected to user only) Get Logged In User’s Score history API
  const getUserScoreHistory = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/matches/history/${userId}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  //‘/scores/last/:id [GET] (Protected to user only) Get user last score API
  const getUserLastMatchScore = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/matches/lastScore/${userId}`
      );
      console.log(`getUserLastMatchScore`, res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Get user highest score API ‘/scores/winningStreak/:id [GET] (Protected to user only)
  const getUserWinningStreack = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/matches/longStrike/${userId}`
      );
      console.log(`getUserWinningStreack`, res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersScore = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/users/usersScore/${userId}`
      );
      return res.data.data[0].score;
    } catch (err) {
      console.log(err);
    }
  };

  //////////// test ///////////
  useEffect(() => {
    // getScoreHistory();
    // getUserScoreHistory(5);
    // getUserLastMatchScore(5);
    // getUserWinningStreack(5);
    // getUsersScore(6);
  }, []);

  //////////////////////////

  const createMatch = async (userId) => {
    try {
      const response = await axios.post("http://localhost:8080/game", userId);
      const roomId = response.data.id;
      console.log(roomId);
      return roomId;
    } catch (error) {
      console.log(error);
    }
  };

  const addToMatches = async (u1, u2, winner) => {
    try {
      const newMatch = {
        u1: u1,
        u2: u2,
        winner: winner,
      };
      const res = await axios.post("http://localhost:8080/matches", newMatch);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const joinMatch = (userId, roomId) => {};

  const values = {
    addMatchScore,
    getScoreHistory,
    createMatch,
    joinMatch,
    handleMatchDetails,
    matchDetails,
    getUserScoreHistory,
    getUsersScore,
    addToMatches,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default AppContext;
