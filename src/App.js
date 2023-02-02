import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useAuthContext from './hooks/useAuthContext';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import HomePage from './pages/home/HomePage';
import GamePage from './pages/game/GamePage';
import ScoresPage from './pages/scores/ScoresPage';
import LandingPage from './pages/landingPage/LandingPage';
import CreateGamePage from './pages/createGame/CreateGamePage';
import JoinGamePage from './pages/joinGame/JoinGamePage';
import BackButton from './components/buttons/backBtn/BackButton';
import PrivateRoutes from './components/routes/PrivateRoutes';
function App() {

  const { currentUser } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/signupPage' element={<SignUpPage />} />
        <Route path='/homePage' element={<PrivateRoutes><HomePage /></PrivateRoutes>} />
        <Route path='/CreateGamePage' element={<PrivateRoutes><CreateGamePage /></PrivateRoutes>} />
        <Route path='/JoinGamePage' element={<PrivateRoutes><JoinGamePage /></PrivateRoutes>} />
        <Route path='/gamePage' element={<PrivateRoutes><GamePage /></PrivateRoutes>} />
        <Route path='/scoresPage' element={<PrivateRoutes><ScoresPage/></PrivateRoutes>} />
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
