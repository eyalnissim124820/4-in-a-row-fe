import './App.css';
import LoginForm from './components/forms/login/LoginForm';
import useAuthContext from './hooks/useAuthContext';

function App() {

  const { currentUser } = useAuthContext()

  return (
    // <div>hello</div>
    <LoginForm />
  );
}

export default App;
