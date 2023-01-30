import './App.css';
import SignupForm from './components/forms/signup/SignupForm';
import useAuthContext from './hooks/useAuthContext';

function App() {

  const { currentUser } = useAuthContext()

  return (
    <div>hello</div>
  );
}

export default App;
