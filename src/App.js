import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useAuthContext from './hooks/useAuthContext';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import HomePage from './pages/home/HomePage';
import GamePage from './pages/game/GamePage';
import ScoresPage from './pages/scores/ScoresPage';
import LandingPage from './pages/landingPage/LandingPage';

function App() {

  const { currentUser } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/signupPage' element={<SignUpPage />} />
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/gamePage' element={<GamePage />} />
        <Route path='/scoresPage' element={<ScoresPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
