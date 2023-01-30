import './App.css';
import SignupForm from './components/forms/signup/SignupForm';
import useAuthContext from './hooks/useAuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const { currentUser } = useAuthContext()
  
  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/loginPage' />
        <Route path='/signupPage' />
        <Route path='/homePage' />
        <Route path='/gamePage' />
        <Route path='/scoresPage' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
